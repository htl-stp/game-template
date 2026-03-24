import {Game} from "./engine/core/game.ts";
import {createGamePage} from "./engine/bootstrap.ts";
import {Screen} from "./engine/screens/screen.ts";
import type {Renderer} from "./engine/core/renderer.ts";

class TestGame extends Game {
    constructor() {
        super();

        this.screen = new class extends Screen {
            render(renderer: Renderer): void {
                renderer.drawRect(0, 0, 100 ,100, "#ff0000")
            }
        }
    }
}

createGamePage(TestGame)