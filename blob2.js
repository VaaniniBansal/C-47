class Blob2{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction: 0.6,
            density: 1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height;
        this.image=loadImage("images/purple blob.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }


}
