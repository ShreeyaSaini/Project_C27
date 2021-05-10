class Bob {
    constructor(x,y,r) {

        var options ={
            isStatic: false,
            restitution: 1,
            density: 0.5
        }
        
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display() {
       var pos = this.body.position;
       
       push();
       translate(pos.x, pos.y);
       strokeWeight(3);
       stroke("white");
       ellipseMode(RADIUS)
       ellipse(0, 0,this.r,this.r);
       pop();
    }
}