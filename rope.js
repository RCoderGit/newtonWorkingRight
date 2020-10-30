class rope 
{
    constructor(bodyA,bodyB,offsetX,offsetY)
   // constructor(bodyA,bodyB)
    {

        this.offsetX=offsetX;
this.offsetY=offsetY;
    var options=
    {
        bodyA:bodyA,
        bodyB:bodyB,
       // length:10,
  // stiffness:0.08,
        pointB:{x:this.offsetX,y:this.offsetY}

    }
 

    

    this.ropeObject=Constraint.create(options);
    World.add(world,this.ropeObject);

    }

    display()
    {strokeWeight(4)
        line(this.ropeObject.bodyA.position.x,this.ropeObject.bodyA.position.y,(this.ropeObject.bodyB.position.x)+this.offsetX,(this.ropeObject.bodyB.position.y)+this.offsetY);
   //line(this.ropeObject.bodyA.position.x,this.ropeObject.bodyA.position.y,this.ropeObject.bodyB.position.x,this.ropeObject.bodyB.position.y)
  // console.log("point b"+this.ropeObject.pointB.x);
 // console.log("x offset"+this.offsetX)
    }
}