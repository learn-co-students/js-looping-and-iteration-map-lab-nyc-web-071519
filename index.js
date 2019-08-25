// Code your solution in this file.
function lowerCaseDrivers(list){
    return list.map(function (driver) {
        return driver.toLowerCase();
    });
}

function nameToAttributes(list){
    return list.map(function(driver){
        const driverFrist = driver.split( ' ')[0];
        const driverLast = driver.split(' ')[1];
        return {firstName: driverFrist, lastName: driverLast};
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    });
  }
  