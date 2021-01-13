let isEnoughToBeaMF = function(parsecs: number): boolean {
    return parsecs < 12;
}

let  distance = 14;
let  distanceII = 11;

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeaMF(distance) ? 'YES' : 'NO'}`);
console.log(`Is ${distanceII} parsecs enough to beat Millennium Falcon? ${isEnoughToBeaMF(distanceII) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

function inc(speed: number, inc: number = 1): number {
    return speed + inc;
} 

console.log(`inc(5,1) = ${inc(5,1)}`);
console.log(`inc(5) = ${inc(5)}`);
