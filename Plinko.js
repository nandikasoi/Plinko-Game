class Plinko {
    constructor(x,y,r) {
        var options = {
            restitution: 0.4

        }
        this.r = r;
        
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        
    }
}
