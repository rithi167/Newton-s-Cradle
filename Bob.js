class Bob{
    constructor(x,y,r) 
    {
        var options=
        {
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y =y;
        this.r =r;
        //this.image = loadImage("bob.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
      
    }
    


    display()
	{
			
			var bobpos=this.body.position;		

			push()
            translate(bobpos.x, bobpos.y);
            rectMode(CENTER);
			//elipseMode(CENTER);
			//strokeWeight(4);
			fill(255,0,255);
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}
;
}
