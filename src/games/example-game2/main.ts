import {createGamePage} from "../../engine/bootstrap.ts";
import {Game} from "../../engine/core/game.ts";
import type {Renderer} from "../../engine/core/renderer.ts";
import {Screen} from "../../engine/screens/screen.ts";
import type {Input} from "../../engine/core/input.ts";

class ExampleGame1 extends Game {
    async init(r: Renderer, i: Input) {
        super.init(r, i)

        await r.loadImage("https://http.cat/images/102.jpg")
    }

    constructor() {
        super();

        this.screen = new class extends Screen {
            update() {}
            render(r: Renderer) {
                r.drawRect(0, 0, r.width, r.height, "#00ff00")
                r.drawImage(r.getFromCache("https://http.cat/images/102.jpg")!, 0, 0, 100, 100)
            }
        }
    }
}

createGamePage(ExampleGame1)