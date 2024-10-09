const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');
const path = require('path');

// Connect to the Ganache local blockchain
const web3 = new Web3('http://127.0.0.1:8545');

// Read the Solidity file
const contractPath = path.resolve(__dirname, 'contracts', 'ProductTracking.sol');
const source = fs.readFileSync(contractPath, 'utf8');

// Compile the contract
const input = {
    language: 'Solidity',
    sources: {
        'ProductTracking.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

console.log('Compiling the contract...');
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Check for compilation errors
if (output.errors) {
    output.errors.forEach(err => {
        console.error(err.formattedMessage);
    });
    throw new Error('Compilation failed');
}

const abi = output.contracts['ProductTracking.sol'].ProductTracking.abi;
const bytecode = output.contracts['ProductTracking.sol'].ProductTracking.evm.bytecode.object;

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);

        const contract = new web3.eth.Contract(abi);

        console.log('Deploying the contract...');
        const deployedContract = await contract.deploy({
            data: bytecode
        }).send({
            from: accounts[0],
            gas: 1500000,
            gasPrice: '30000000000'
        });

        console.log('Contract deployed at address:', deployedContract.options.address);
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
};

deploy();
