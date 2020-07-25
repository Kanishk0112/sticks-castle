class Roof{
    constructor(x1,y1,x2,y2,x3,y3) {
        var options = {
            isStatic:true
          
        }
        this.body = Bodies.polygon(490,310,510,280,530,310,options);
       
       
        World.add(world, this.body);
      }
      display(){
          
          fill(252, 128, 27);
          triangle(490,310,510,280,530,310);
      }
      
}
