//// [tests/cases/conformance/node/nodeModulesCjsFormatFileAlwaysHasDefault.ts] ////

//// [index.ts]
// cjs format file
export const a = 1;
//// [index.ts]
// esm format file
import mod from "./subfolder/index.js";
mod;
//// [package.json]
{
    "name": "package",
    "private": true,
    "type": "module"
}
//// [package.json]
{
    "type": "commonjs"
}

//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
// cjs format file
exports.a = 1;
//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// esm format file
const index_js_1 = require("./subfolder/index.js");
index_js_1.default;


//// [index.d.ts]
// cjs format file
export declare const a = 1;
//// [index.d.ts]
export {};
