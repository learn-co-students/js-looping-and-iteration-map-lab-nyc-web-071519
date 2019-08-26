// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const lowerDrivers = drivers.map(function (drv) {
        return drv.toLowerCase()});
    return lowerDrivers;
}

function nameToAttributes(drivers){
    const newArray = drivers.map(function (drv) {
        let tempName = drv.split(" ");
        // return tempName;
        let tempObj = {
            'firstName': tempName[0],
            'lastName': tempName[1]
        };
        return tempObj;
    });
    return newArray;
}

function attributesToPhrase(drivers){
    const newArray = drivers.map(function (drv) {
        return `${drv['name']} is from ${drv['hometown']}`;
    });
    return newArray;
}