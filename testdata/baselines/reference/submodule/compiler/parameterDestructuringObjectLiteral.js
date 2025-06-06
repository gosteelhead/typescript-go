//// [tests/cases/compiler/parameterDestructuringObjectLiteral.ts] ////

//// [parameterDestructuringObjectLiteral.ts]
// Repro from #22644

const fn1 = (options: { headers?: {} }) => { };
fn1({ headers: { foo: 1 } });

const fn2 = ({ headers = {} }) => { };
fn2({ headers: { foo: 1 } });


//// [parameterDestructuringObjectLiteral.js]
// Repro from #22644
const fn1 = (options) => { };
fn1({ headers: { foo: 1 } });
const fn2 = ({ headers = {} }) => { };
fn2({ headers: { foo: 1 } });


//// [parameterDestructuringObjectLiteral.d.ts]
// Repro from #22644
declare const fn1: (options: {
    headers?: {};
}) => void;
declare const fn2: ({ headers }: {
    headers?: {};
}) => void;
