class Ball{
    constructor(x,y,r,a){
        var options = {
            restitution : 0.5,
            density: 0.5,
            friction :1,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        
        World.add(myWorld , this.body)
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle;
        push();
        ellipseMode(CENTER);
        translate(pos.x,pos.y)
        fill("green")

        angleMode(RADIANS);
        rotate(angle);
        ellipse(0,0,this.radius)
        pop()    
    }
}