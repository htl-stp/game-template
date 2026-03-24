export interface Color3 {
    r: number;
    g: number;
    b: number;
}

export interface Color4 {
    r: number;
    g: number;
    b: number;
    a: number;
}

export class Color implements Color4 {
    a: number;
    b: number;
    g: number;
    r: number;

    constructor(r: number, g: number, b: number, a: number = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toColor3(): Color3 {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
        }
    }

    toColor4(): Color4 {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a
        }
    }

    toHex() {
        return "#" +
            this.r.toString(16).padStart(2, "0") +
            this.g.toString(16).padStart(2, "0") +
            this.b.toString(16).padStart(2, "0");
    }
}