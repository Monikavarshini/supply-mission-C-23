class rectangle{
    constructor(x,y,width,height,color){
    var options={
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)

    this.width=width;
    this.height=height;
    this.color=color;
    
    }

    display(){
   var pos=this.body.position;
   var angle=this.body.angle;
    fill(this.color)
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER)
    
    rect(0, 0, this.width, this.height);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();

}
}