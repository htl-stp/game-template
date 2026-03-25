import {Entity} from "../../engine/entity/entity.ts";
import type {Renderer} from "../../engine/core/renderer.ts";

class Mauss extends Entity{
    private active = false;
    constructor() {
        const size = 20
        super(size,size,size,size)
    }
    render(r:Renderer){
        r.drawRect(this.x,this.y,this.w,this.h,"#a00f05")
    }
    hit(){
        this.active = false;
    }
    peek(){
        this.active = true;
    }
}
class Hammer extends Entity{
    speed = 20
    constructor() {
        const size = 30
        super(size,size,size,size)
    }
    render(r:Renderer){
        r.drawRect(this.x,this.y,this.w,this.h,"#101af1")
    }


}