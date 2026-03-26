export class Signal<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    get() {
        return this.value;
    }

    set(value: T) {
        this.value = value;
    }

    update(c: (value: T) => T) {
        this.value = c(this.value)
    }
}

export function signal<T>(value: T) {
    return new Signal<T>(value);
}