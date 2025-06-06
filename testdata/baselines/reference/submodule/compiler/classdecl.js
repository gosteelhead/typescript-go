//// [tests/cases/compiler/classdecl.ts] ////

//// [classdecl.ts]
class a {
    //constructor ();
    constructor (n: number);
    constructor (s: string);
    constructor (ns: any) {

    }

    public pgF() { }

    public pv;
    public get d() {
        return 30;
    }
    public set d(a: number) {
    }

    public static get p2() {
        return { x: 30, y: 40 };
    }

    private static d2() {
    }
    private static get p3() {
        return "string";
    }
    private pv3;

    private foo(n: number): string;
    private foo(s: string): string;
    private foo(ns: any) {
        return ns.toString();
    }
}

class b extends a {
}

module m1 {
    export class b {
    }
    class d {
    }


    export interface ib {
    }
}

module m2 {

    export module m3 {
        export class c extends b {
        }
        export class ib2 implements m1.ib {
        }
    }
}

class c extends m1.b {
}

class ib2 implements m1.ib {
}

declare class aAmbient {
    constructor (n: number);
    constructor (s: string);
    public pgF(): void;
    public pv;
    public d : number;
    static p2 : { x: number; y: number; };
    static d2();
    static p3;
    private pv3;
    private foo(s);
}

class d {
    private foo(n: number): string;
    private foo(s: string): string;
    private foo(ns: any) {
        return ns.toString();
    }    
}

class e {    
    private foo(s: string): string;
    private foo(n: number): string;
    private foo(ns: any) {
        return ns.toString();
    }
}

//// [classdecl.js]
class a {
    constructor(ns) {
    }
    pgF() { }
    pv;
    get d() {
        return 30;
    }
    set d(a) {
    }
    static get p2() {
        return { x: 30, y: 40 };
    }
    static d2() {
    }
    static get p3() {
        return "string";
    }
    pv3;
    foo(ns) {
        return ns.toString();
    }
}
class b extends a {
}
var m1;
(function (m1) {
    class b {
    }
    m1.b = b;
    class d {
    }
})(m1 || (m1 = {}));
var m2;
(function (m2) {
    let m3;
    (function (m3) {
        class c extends b {
        }
        m3.c = c;
        class ib2 {
        }
        m3.ib2 = ib2;
    })(m3 = m2.m3 || (m2.m3 = {}));
})(m2 || (m2 = {}));
class c extends m1.b {
}
class ib2 {
}
class d {
    foo(ns) {
        return ns.toString();
    }
}
class e {
    foo(ns) {
        return ns.toString();
    }
}


//// [classdecl.d.ts]
declare class a {
    //constructor ();
    constructor(n: number);
    constructor(s: string);
    pgF(): void;
    pv: any;
    get d(): number;
    set d(a: number);
    static get p2(): {
        x: number;
        y: number;
    };
    private static d2;
    private static get p3();
    private pv3;
    private foo;
}
declare class b extends a {
}
declare namespace m1 {
    class b {
    }
    interface ib {
    }
}
declare namespace m2 {
    namespace m3 {
        class c extends b {
        }
        class ib2 implements m1.ib {
        }
    }
}
declare class c extends m1.b {
}
declare class ib2 implements m1.ib {
}
declare class aAmbient {
    constructor(n: number);
    constructor(s: string);
    pgF(): void;
    pv: any;
    d: number;
    static p2: {
        x: number;
        y: number;
    };
    static d2(): any;
    static p3: any;
    private pv3;
    private foo;
}
declare class d {
    private foo;
}
declare class e {
    private foo;
}
