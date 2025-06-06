//// [tests/cases/compiler/contextuallyTypingRestParameters.ts] ////

//// [contextuallyTypingRestParameters.ts]
var x: (...y: string[]) => void = function (.../*3*/y) { 
    var t = y; 
    var x2: string = t; // This should be error
    var x3: string[] = t; // No error
    var y2: string = y; // This should be error
    var y3: string[] = y; // No error
};

//// [contextuallyTypingRestParameters.js]
var x = function (... /*3*/y) {
    var t = y;
    var x2 = t; // This should be error
    var x3 = t; // No error
    var y2 = y; // This should be error
    var y3 = y; // No error
};
