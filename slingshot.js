class Slingshot{
   constructor(pointA,pointB){
    var options={
     pointA : pointA,
     pointB : pointB,
     stiffness : 0.04,
     length:10
    }
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
   } 
   fly(){
       this.sling.pointA=null;
   }
   display(){
       if(this.sling.pointA){
         var a=this.sling.pointA.position;
         var b= this.pointB;

         line(a.x,a.y,b.x,b.y)
       }
   }
}