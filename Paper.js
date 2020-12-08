class Paper 
{
    constructor(x, y, width, height)
    {
        var options =
        {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage ("sprites/paper.png");
        World.add(world, this.body);
    }
    
    display () 
    {
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        stroke("black");
        rect(0, 0, this.width, this.height);
        pop();
    }
}