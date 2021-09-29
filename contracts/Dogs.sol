pragma solidity ^0.8.0;
import './Storage.sol';

contract Dogs is Storage {
    function getNumberOfDogs() internal view returns(uint256) {
        return Storage.number;
    }

    function setNumberOfDogs(uint256 _number) internal {
        Storage.number = _number;
    } 

}