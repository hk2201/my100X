interface smething2 {
    readonly a1: string;
    readonly a2: string;
}

interface something {
    a3: string;
    a4: string;
}

const temp: Readonly<something> = {
    a3: "asdasd",
    a4: "sdasd"
}