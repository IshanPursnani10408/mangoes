class stone {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x ;
        this.y=y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.stoneImage = loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var stonePos = this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.stoneImage, 0,0,60,60)
        pop()
    }
}
