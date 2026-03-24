import type {Game} from "./core/game.ts";
import {Renderer} from "./core/renderer.ts";
import {Input} from "./core/input.ts";

export function createGamePage(GameClass: new () => Game) {
    console.log("test")

    const canvas = document.getElementById("gamecanvas") as HTMLCanvasElement;

    canvas.width = 240
    canvas.height = 180

    const renderer = new Renderer(canvas);
    const input = new Input();

    const game = new GameClass();

    game.init(renderer, input)

    game.start()

    window.addEventListener("keydown", (e) => {
        if (e.key === "R") {
            game.reset();
        }
    })
}