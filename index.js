// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function lowercased(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function nameToAttributes(driver) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];

    return { firstName: first, lastName: last };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
