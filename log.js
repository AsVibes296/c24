class Log
{
    constructor(x,y,width,height,angle){
        var options1={
            restitution:0.3,
            friction:2,
            density:0.5

         
           }
           this.body=Bodies.rectangle(x,y,width,height,options1)
           this.width=width
           this.height=height
           Matter .Body.setAngle(this.body,angle)
           World.add (myWorld,this.body)
         
         
         
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate (angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("yellow")
        fill ("turqoise")
        rect(0,0,this.width,this.height)
        pop ()
    }
}