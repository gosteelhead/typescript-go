//// [tests/cases/compiler/genericClasses3.ts] ////

//// [genericClasses3.ts]
class B<T> {
    a: T;
    b: T;
}

class C<T> extends B<T> {
    public x: T;
}

var v2: C <string>;

var y = v2.x; // should be 'string'
var u = v2.a; // should be 'string'

var z = v2.b;



//// [genericClasses3.js]
class B {
    a;
    b;
}
class C extends B {
    x;
}
var v2;
var y = v2.x; // should be 'string'
var u = v2.a; // should be 'string'
var z = v2.b;


//// [genericClasses3.d.ts]
declare class B<T> {
    a: T;
    b: T;
}
declare class C<T> extends B<T> {
    x: T;
}
declare var v2: C<string>;
declare var y: string; // should be 'string'
declare var u: string; // should be 'string'
declare var z: string;
