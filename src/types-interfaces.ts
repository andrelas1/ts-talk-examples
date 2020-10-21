// TYPE ALIASES
type Car = { name: string };

type FormulaOneCar = Car & { drs: boolean }

const ferrari: FormulaOneCar = {
    name: 'ferrari',
    drs: false
}

// INTERFACES
interface Animal {
    name: string 
}

interface Fish extends Animal {
    swim: () => void
}

// interface merging 
interface Fish {
    color: string
}


const c: Fish = {
    name: 'nemo',
    swim: () => {},
    color: 'blue'
}