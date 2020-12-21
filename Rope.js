class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB{x:this.offsetX, y:this.offsetY};
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var possA=this.chain.bodyA.position;
        var possB=this.chain.bodyB.position;
        push();
        strokeWeight(3);
        line (possA.x,possA.y,possB.x,possB.y);
        pop();
    }
}