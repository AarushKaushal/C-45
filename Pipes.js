class Pipes {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
}
display(){
    if(frameCount%60===0){
    fill("green");
    rect(this.x,this.y,this.width,this.height);
    pipe1 = createSprite(1800,700,40,500);
    pipe2 = createSprite(1800,0,40,300);
    pipe1.velocityX=-4;
    pipe2.velocityX=-4;
    }
}
}