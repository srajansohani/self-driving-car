
class Car {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.controls = new Controls();
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.angle = 0;
    }
    update(){
        if(this.controls.forward){
            this.speed = this.speed + this.acceleration
        }
        if(this.controls.reverse){
            this.speed = this.speed - this.acceleration
        }
        if(this.controls.left){
            this.angle = this.angle + 0.02; 
        }
        if(this.controls.right){
            this.angle = this.angle - 0.02;
        }
        if(this.speed > this.maxSpeed ){
            this.speed = this.maxSpeed
        }
        this.y = this.y - Math.cos(this.angle)*this.speed;
        this.x = this.x - Math.sin(this.angle)*this.speed;
        if(this.speed <  -1 * this.maxSpeed){
            this.speed = -1 * this.maxSpeed
        }
        

    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(- this.width/2, - this.height/2,this.width,this.height);
        ctx.fill()
    }
}