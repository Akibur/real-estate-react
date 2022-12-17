// SPDX-License-Identifier: MIT

//pragma solidity 0.8.8;
pragma solidity ^0.8.0;

// pragma solidity >=0.8.0 <0.9.0;

contract LandTransfers {
    struct LandTx {
        string landId;
        string location;
        uint256 area;
        string buyerId;
        string buyerEmail;
        string sellerId;
        string sellerEmail;
    }

    LandTx[] public landTx;
    mapping(string => LandTx) LandToTrx;

    function addLandTx(
        string memory _landId,
        string memory _location,
        uint256 _area,
        string memory _buyerId,
        string memory _buyerEmail,
        string memory sellerId,
        string memory _sellerEmail
    ) public {
        landTx.push(
            LandTx(
                _landId,
                _location,
                _area,
                _buyerId,
                _buyerEmail,
                sellerId,
                _sellerEmail
            )
        );
        LandToTrx[_landId] = LandTx(
            _landId,
            _location,
            _area,
            _buyerId,
            _buyerEmail,
            sellerId,
            _sellerEmail
        );
    }

    function getAllLandTx() public view returns (LandTx[] memory) {
        return landTx;
    }

    function getByLandId(
        string memory _landId
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        LandTx storage land = LandToTrx[_landId];

        return (
            land.landId,
            land.location,
            land.area,
            land.buyerId,
            land.buyerEmail,
            land.sellerId,
            land.sellerEmail
        );
    }

    // struct User {
    //     string userId;
    //     string name;
    //     string email;
    // }

    // User[] public user;
    // Land[] public land;
    // string[] public landIds;
    // string[] public userIds;

    // function addUser(string memory _userId,string memory _name,string memory _email ) public {
    //     userIds.push(_userId);
    //     user.push(User(_userId,_name,_email));
    // }

    // function addLand(string memory _landId,string memory _location,uint256 _area ) public {
    //     landIds.push(_landId);
    //     land.push(Land(_landId,_location,_area));

    // }

    // mapping(string => User) LandToUserTransfers;

    // function addLandTransfer (string memory _landId,string memory _location,uint256 _area, string memory _userId,string memory _name,string memory _email )public{
    //     addUser( _userId, _name, _email ) ;
    //     addLand( _landId, _location,_area );
    //     LandToUserTransfers[_landId] = User(_userId,_name,_email);
    // }

    // function getLandTrx(string LandId) public view returns (string memory){
    //     land storage l = students[id];
    //     return (s.name,s.birthdate,s.department,s.location,s.email,s.mobile_no);
    // }

    //Add user
    //add land
    //add landtransfer

    // --------------------------
    // uint256 favoriteNumber;

    // struct People {
    //     uint256 favoriteNumber;
    //     string name;
    // }
    // // uint256[] public anArray;
    // People[] public people;

    // mapping(string => uint256) public nameToFavoriteNumber;

    // function store(uint256 _favoriteNumber) public {
    //     favoriteNumber = _favoriteNumber;
    // }

    // function retrieve() public view returns (uint256){
    //     return favoriteNumber;
    // }

    // function addPerson(string memory _name, uint256 _favoriteNumber) public {
    //     people.push(People(_favoriteNumber, _name));
    //     nameToFavoriteNumber[_name] = _favoriteNumber;
    // }
}
