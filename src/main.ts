import {Game} from "./engine/core/game.ts";
import {Renderer} from "./engine/core/renderer.ts";
import {ExampleScreen} from "./engine/screens/exampleScreen.ts";

console.log("test")

const canvas = document.getElementById("gamecanvas") as HTMLCanvasElement;

const renderer = new Renderer(canvas);

console.log("game created")
const game = new Game(renderer, new ExampleScreen());
game.start()