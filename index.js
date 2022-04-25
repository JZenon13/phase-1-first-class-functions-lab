// Code your solution in this file!
function selectingDrivers() {
  returnFirstTwoDrivers();
  returnLastTwoDrivers();
}

const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.splice(-2);
};

function createFareMultiplier(num) {
  return function (fare) {
    return num * fare;
  };
}

const fareDoubler = (fare) => {
  createFareMultiplier();
};

const fareTripler = (fare) => {
  createFareMultiplier();
};
