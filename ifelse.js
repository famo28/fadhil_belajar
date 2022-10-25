// javascript
var myGundam = {
    "name": "GM Sniper II",
    "weapons": ["Sniper Rifle", "Bullpup", "Knife"],
    "shield": 1,
    "head": "1 Camera Sensor",
};

function testIf(a) {
    if (a >= 20) {
        return "Angka Besar"
    } else if (a < 20 && a > 10) {
        return "11 - 19"
    } else {
        return "Angka Kecil"
    }
}

console.log(testIf(20))
console.log(testIf(4))