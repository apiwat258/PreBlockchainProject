// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

//declares a new contract
contract ProductTracking {

    //product struct for storage product
    struct Product {
        string name;
        string details;
        uint256 productionDate;
        uint256 arrivalDate;
        uint256 transportTime;
        uint256 temperature;
        address owner;
    }

    //update history info show on view data page
    struct UpdateInfo {
        address updater;
        uint256 timestamp;
        string updateType;
        string details;
    }

    //link to storage define sting(_productcode) as key 
    mapping(string => Product) public products;
    mapping(string => UpdateInfo[]) public productUpdates;

    //define significant actions
    event ProductAdded(string productCode, string name, string details, uint256 productionDate);
    event TransportInfoUpdated(string productCode, uint256 transportTime, uint256 temperature);
    event ArrivalInfoUpdated(string productCode, uint256 arrivalDate);

    function addProduct(
        string memory _productCode,
        string memory _name,
        string memory _details,
        uint256 _productionDate
    ) public {
        products[_productCode] = Product({
            name: _name,
            details: _details,
            productionDate: _productionDate,
            arrivalDate: 0,
            transportTime: 0,
            temperature: 0,
            owner: msg.sender
        });

        productUpdates[_productCode].push(UpdateInfo({
            updater: msg.sender,
            timestamp: block.timestamp,
            updateType: "Add Product",
            details: "Product added"
        }));

        // important actions for exteanl react when use
        emit ProductAdded(_productCode, _name, _details, _productionDate);
    }

    function updateTransportInfo(
        string memory _productCode,
        uint256 _transportTime,
        uint256 _temperature
    ) public {
        Product storage product = products[_productCode];
        require(product.owner == msg.sender, "Not authorized");
        product.transportTime = _transportTime;
        product.temperature = _temperature;

        productUpdates[_productCode].push(UpdateInfo({
            updater: msg.sender,
            timestamp: block.timestamp,
            updateType: "Update Transport",
            details: "Transport info updated"
        }));

        emit TransportInfoUpdated(_productCode, _transportTime, _temperature);
    }

    function updateArrivalInfo(
        string memory _productCode,
        uint256 _arrivalDate
    ) public {
        Product storage product = products[_productCode];
        require(product.owner == msg.sender, "Not authorized");
        product.arrivalDate = _arrivalDate;

        productUpdates[_productCode].push(UpdateInfo({
            updater: msg.sender,
            timestamp: block.timestamp,
            updateType: "Update Arrival",
            details: "Arrival info updated"
        }));

        emit ArrivalInfoUpdated(_productCode, _arrivalDate);
    }

    function getProductInfo(string memory _productCode) public view returns (
        string memory name,
        string memory details,
        uint256 productionDate,
        uint256 arrivalDate,
        uint256 transportTime,
        uint256 temperature
    ) {
        Product memory product = products[_productCode];
        return (
            product.name,
            product.details,
            product.productionDate,
            product.arrivalDate,
            product.transportTime,
            product.temperature
        );
    }

    function getProductUpdates(string memory _productCode) public view returns (UpdateInfo[] memory) {
        return productUpdates[_productCode];
    }
}
