class Box{
    constructor(x,y,w,h,a){
        var options = {
            restitution : 0.5,
            density: 0.5,
            friction :1,
        }
        this.body = Bodies.rectangle(x,y,w,h,a,options);
        this.height = h;
        this.width = w
        World.add(myWorld , this.body)
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        strokeWeight(5);
        stroke("brown");
        fill ("#B5651D");
        angleMode(RADIANS);
        rotate(angle);
        rect(0,0,this.width, this.height)
        pop()    
    }
}