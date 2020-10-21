type A = { n: number };

type B = A & { id: string }

const b: B = {
    n: 10,
    id: ''
}

interface Aa {
    n: number 
}

interface Aa {
    id: string;
}

// declaration merging

const c: Aa = {
    n: 10,
    id: ''
}