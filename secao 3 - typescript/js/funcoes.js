var isEnoughToBeaMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
var distanceII = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeaMF(distance) ? 'YES' : 'NO'));
console.log("Is " + distanceII + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeaMF(distanceII) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
