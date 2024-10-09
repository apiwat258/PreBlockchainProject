const web3 = new Web3('http://127.0.0.1:8545');

const contractABI = [
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
const contractAddress = '0x96e2894bB004ff7998B0f942D87431d0B28FfbdE';
const productTrackingContract = new web3.eth.Contract(contractABI, contractAddress);

function displayError(message) {
    const errorDisplay = document.getElementById('errorDisplay');
    if (errorDisplay) {
        errorDisplay.innerHTML = message;
    } else {
        console.error('Error display element not found.');
    }
}

document.addEventListener('DOMContentLoaded', async function () {
  if (typeof web3 !== 'undefined') {
      console.log('Connected to Ganache');
      const accounts = await web3.eth.getAccounts();

      const addProductForm = document.getElementById('addProductForm');
      const getProductInfoForm = document.getElementById('getProductInfoForm');
      const updateTransportForm = document.getElementById('updateTransportForm');
      const updateArrivalForm = document.getElementById('updateArrivalForm');
      const getProductUpdatesForm = document.getElementById('getProductUpdatesForm');
      const showBlocksButton = document.getElementById('showBlocks');

      // Handle adding a product
      if (addProductForm) {
          addProductForm.addEventListener('submit', async function (event) {
              event.preventDefault();
              const productCode = document.getElementById('productCode').value;
              const name = document.getElementById('name').value;
              const details = document.getElementById('details').value;
              const productionDate = new Date(document.getElementById('productionDate').value).getTime() / 1000;

              try {
                  await productTrackingContract.methods.addProduct(productCode, name, details, productionDate).send({ from: accounts[0] });
                  console.log('Product added successfully');
              } catch (error) {
                  console.error('Error adding product:', error);
              }
          });
      }

      // Handle getting product info
      if (getProductInfoForm) {
          getProductInfoForm.addEventListener('submit', async function (event) {
              event.preventDefault();
              const productCode = document.getElementById('infoProductCode').value;

              try {
                  const productInfo = await productTrackingContract.methods.getProductInfo(productCode).call();
                  document.getElementById('info').innerHTML = `
                      Name: ${productInfo.name}<br>
                      Details: ${productInfo.details}<br>
                      Production Date: ${new Date(productInfo.productionDate * 1000).toLocaleDateString()}<br>
                      Arrival Date: ${new Date(productInfo.arrivalDate * 1000).toLocaleDateString()}<br>
                      Transport Time: ${productInfo.transportTime} seconds<br>
                      Temperature: ${productInfo.temperature} °C<br>
                  `;
              } catch (error) {
                  console.error('Error getting product info:', error);
              }
          });
      }

      // Handle updating transport info
      if (updateTransportForm) {
          updateTransportForm.addEventListener('submit', async function (event) {
              event.preventDefault();
              const productCode = document.getElementById('transportProductCode').value;
              const transportTime = document.getElementById('transportTime').value;
              const temperature = document.getElementById('temperature').value;

              try {
                  await productTrackingContract.methods.updateTransportInfo(productCode, transportTime, temperature).send({ from: accounts[0] });
                  console.log('Transport info updated successfully');
              } catch (error) {
                  console.error('Error updating transport info:', error);
              }
          });
      }

      // Handle updating arrival info
      if (updateArrivalForm) {
          updateArrivalForm.addEventListener('submit', async function (event) {
              event.preventDefault();
              const productCode = document.getElementById('arrivalProductCode').value;
              const arrivalDate = new Date(document.getElementById('arrivalDate').value).getTime() / 1000;

              try {
                  await productTrackingContract.methods.updateArrivalInfo(productCode, arrivalDate).send({ from: accounts[0] });
                  console.log('Arrival info updated successfully');
              } catch (error) {
                  console.error('Error updating arrival info:', error);
              }
          });
      }

      // Handle getting product updates
      if (getProductUpdatesForm) {
          getProductUpdatesForm.addEventListener('submit', async function (event) {
              event.preventDefault();
              const productCode = document.getElementById('updatesProductCode').value;

              try {
                  const updates = await productTrackingContract.methods.getProductUpdates(productCode).call();
                  const updatesList = document.getElementById('updatesList');
                  updatesList.innerHTML = updates.map(update => `
                      <li>
                          Updater: ${update.updater}<br>
                          Timestamp: ${new Date(update.timestamp * 1000).toLocaleString()}<br>
                          Update Type: ${update.updateType}<br>
                          Details: ${update.details}
                      </li>
                  `).join('');
              } catch (error) {
                  console.error('Error getting product updates:', error);
              }
          });
      }

      // Handle showing blockchain info
      if (showBlocksButton) {
          showBlocksButton.addEventListener('click', async function () {
              const blocksList = document.getElementById('blocksList');
              blocksList.innerHTML = '';
              try {
                  const blockCount = await web3.eth.getBlockNumber();
                  for (let i = 0; i <= blockCount; i++) {
                      const block = await web3.eth.getBlock(i);
                      blocksList.innerHTML += `
                          <li>
                              Block #${block.number}<br>
                              Timestamp: ${new Date(block.timestamp * 1000).toLocaleString()}<br>
                              Transactions: ${block.transactions.length}
                          </li>
                      `;
                  }
              } catch (error) {
                  console.error('Error getting blockchain info:', error);
              }
          });
      }
  } else {
      console.error('Failed to connect to Ganache');
  }
});