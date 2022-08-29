class SlingShot{
    constructor(b1,p2){
        var options = {
            bodyA : b1,
            pointB : p2,
            length : 20,
            stiffness : 0.05
        }
        this.body = Constraint.create(options);
        this.pointB = p2;
        World.add(myWorld,this.body);
    }
    display(){

     if(this.body.bodyA){   
        var p1 = this.body.bodyA.position;
        var p2 = this.pointB;
        push();
        strokeWeight(5);
        stroke("olive")  
        line(p1.x,p1.y,p2.x,p2.y);
        pop();
        }
    }
}
