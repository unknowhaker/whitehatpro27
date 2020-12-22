class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var possA=this.chain.bodyA.position;
        var possB=this.chain.bodyB.position;
        push();
        strokeWeight(3);
        line (possA.x,possA.y,possB.x+offsetX,possB.y+offsetY);
        pop();
    }
}
