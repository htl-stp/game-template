import type {Renderer} from "../core/renderer.ts";

export abstract class Screen {
    render(renderer: Renderer) {}
    update(delta: number) {}
}