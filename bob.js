class bob
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':1,
            'isStatic':false,
            'friction':0,
            'density':0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {//this.body.position.x=mouseX;
       // this.body.position.y=mouseY
        var paperpos=this.body.position;
       // push();
        fill("violet");
      //  translate(paperpos.x,paperpos.y);

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
       // pop();
    }
}