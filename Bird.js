class Bird{
    constructor(x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
    }
display(){
    bird= createSprite(this.x,this.y,this.width,this.height);
    bird.addImage(birdImg);

}
}