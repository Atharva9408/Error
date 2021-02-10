class Cloud{
    constructor(x,y){
        var OP={
            isStatic:false,
            density:1.2,
            friction:0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,OP)
        this.image=loadImage("Images/cloud.png")
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position;
        imageMode(CENTER)
        image(this.image,p.x,p.y,90,100);
    }
}