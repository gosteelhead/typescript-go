//// [tests/cases/compiler/conditionalTypesASI.ts] ////

//// [conditionalTypesASI.ts]
// Repro from #21637

interface JSONSchema4 {
  a?: number
  extends?: string | string[]
}


//// [conditionalTypesASI.js]


//// [conditionalTypesASI.d.ts]
// Repro from #21637
interface JSONSchema4 {
    a?: number;
    extends?: string | string[];
}
