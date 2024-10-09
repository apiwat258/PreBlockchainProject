// migrations/2_deploy_contracts.js
const ProductTracking = artifacts.require("ProductTracking");

module.exports = function(deployer) {
  deployer.deploy(ProductTracking);
};
