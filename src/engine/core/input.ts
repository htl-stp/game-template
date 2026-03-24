export class Input {
    keys = new Set<string>();

    constructor() {
        window.addEventListener("keydown", e => this.keys.add(e.key));
        window.addEventListener("keyup", e => this.keys.delete(e.key));
    }

    isDown(key: string) {
        return this.keys.has(key);
    }
}