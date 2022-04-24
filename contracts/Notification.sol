pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Notification {

    struct user {
        string name;
        address benefaciary_address;
        bool vote;
        string description;
        int percent;
    }

    struct owner {
        string name;
        address owner_address;
        bool vote;
        string description;
    }

    // TODO add function to retrieve wallet addresses of Owner and Beneficiaries, along with percent given

    // TODO send to smart chain


}
