export class Renderer {
    ctx: CanvasRenderingContext2D;

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d")!;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}