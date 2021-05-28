class Paper{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options = {
        isStatic : false,
		'density':1.2,
		'friction': 0,
		'restitution':0.3
	  };
		this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);

	}
display()
	{
			var posPaper=this.Body.position;

			push()
			translate(posPaper.x, posPaper.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}