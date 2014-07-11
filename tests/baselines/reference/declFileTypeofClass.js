//// [declFileTypeofClass.ts]

class c {
    static x : string;
    private static y: number;
    private x3: string;
    public y3: number;
}

var x: c;
var y = c;
var z: typeof c;
class genericC<T>
{
}
var genericX = genericC;


//// [declFileTypeofClass.js]
var c = (function () {
    function c() {
    }
    return c;
})();
var x;
var y = c;
var z;
var genericC = (function () {
    function genericC() {
    }
    return genericC;
})();
var genericX = genericC;


//// [declFileTypeofClass.d.ts]
declare class c {
    static x;
    private static y;
    private x3;
    y3;
}
declare var x;
declare var y;
declare var z;
declare class genericC<T> {
}
declare var genericX;