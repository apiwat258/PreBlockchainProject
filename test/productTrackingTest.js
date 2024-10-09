const Web3 = require('web3');

const contractABI =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "productCode",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "arrivalDate",
          "type": "uint256"
        }
      ],
      "name": "ArrivalInfoUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "productCode",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productionDate",
          "type": "uint256"
        }
      ],
      "name": "ProductAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "productCode",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "transportTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "temperature",
          "type": "uint256"
        }
      ],
      "name": "TransportInfoUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "productUpdates",
      "outputs": [
        {
          "internalType": "address",
          "name": "updater",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "updateType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "productionDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "arrivalDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "transportTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "temperature",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productCode",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_details",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_productionDate",
          "type": "uint256"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_transportTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_temperature",
          "type": "uint256"
        }
      ],
      "name": "updateTransportInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_arrivalDate",
          "type": "uint256"
        }
      ],
      "name": "updateArrivalInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productCode",
          "type": "string"
        }
      ],
      "name": "getProductInfo",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "productionDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "arrivalDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "transportTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "temperature",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productCode",
          "type": "string"
        }
      ],
      "name": "getProductUpdates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "updater",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "updateType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "details",
              "type": "string"
            }
          ],
          "internalType": "struct ProductTracking.UpdateInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
const contractAddress = '0x4E3e0460Cb734A7011F1D93E3150d674C3872Fb7';

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function testContract() {
    try {
       
        const addProduct = await contract.methods.addProduct(
            'product123', 
            'Product Name', 
            'Product details', 
            Math.floor(Date.now() / 1000) 
        ).send({ from: '0xYourAddress' }); 
        console.log('Add Product Result:', addProduct);

        
        const updateTransportInfo = await contract.methods.updateTransportInfo(
            'product123', 
            3600, 
            20 
        ).send({ from: '0xYourAddress' }); 
        console.log('Update Transport Info Result:', updateTransportInfo);

        
        const updateArrivalInfo = await contract.methods.updateArrivalInfo(
            'product123', 
            Math.floor(Date.now() / 1000) 
        ).send({ from: '0xYourAddress' }); 
        console.log('Update Arrival Info Result:', updateArrivalInfo);

        
        const productInfo = await contract.methods.getProductInfo('product123').call();
        console.log('Product Info:', productInfo);

        
        const productUpdates = await contract.methods.getProductUpdates('product123').call();
        console.log('Product Updates:', productUpdates);

    } catch (error) {
        console.error('Error:', error);
    }
}

testContract();
