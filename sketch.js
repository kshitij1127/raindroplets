var dorplet1,droplet2,droplet3,droplet4,droplet5,droplet6,droplet7,droplet8,droplet9,droplet10,droplet11,
droplet12,droplet13,droplet14,droplet15,droplet16,droplet17,droplet18,droplet19,droplet20
var invisibleGround;
function setup(){
createCanvas (1200,400)
droplet1 = createSprite(200,50,30,30)
droplet2 = createSprite(200,80,30,30)
droplet3 = createSprite(200,110,30,30)
droplet4 = createSprite(200,140,30,30)
droplet5 = createSprite(200,170,30,30)
droplet6 = createSprite(200,200,30,30)
droplet7 = createSprite(200,230,30,30)
droplet8 = createSprite(200,260,30,30)
droplet9 = createSprite(200,290,30,30)
droplet10 = createSprite(200,320,30,30)
droplet11 = createSprite(230,170,30,30)
droplet12 = createSprite(240,140,30,30)
droplet13 = createSprite(250,110,30,30)
droplet14 = createSprite(260,80,30,30)
droplet15 = createSprite(270,50,30,30)
droplet16 = createSprite(255,200,30,30)
droplet17 = createSprite(270,230,30,30)
droplet18 = createSprite(280,260,30,30)
droplet19 = createSprite(290,290,30,30)
droplet20 = createSprite(300,320,30,30)
invisibleGround = createSprite(600,380,1200,20)
}

function draw(){
 background("white") 
 invisibleGround.visible = false;
droplet1.velocityY = 5
droplet2.velocityY = 5
droplet3.velocityY = 5
droplet4.velocityY = 5
droplet5.velocityY = 5
droplet6.velocityY = 5
droplet7.velocityY = 5
droplet8.velocityY = 5
droplet9.velocityY = 5
droplet10.velocityY= 5
droplet11.velocityY= 5
droplet12.velocityY= 5
droplet13.velocityY= 5
droplet14.velocityY= 5
droplet15.velocityY= 5
droplet16.velocityY= 5
droplet17.velocityY= 5
droplet18.velocityY= 5
droplet19.velocityY= 5
droplet20.velocityY= 5

droplet1.collide(invisibleGround)
droplet2.collide(invisibleGround)
droplet3.collide(invisibleGround)
droplet4.collide(invisibleGround)
droplet5.collide(invisibleGround)
droplet6.collide(invisibleGround)
droplet7.collide(invisibleGround)
droplet8.collide(invisibleGround)
droplet9.collide(invisibleGround)
droplet10.collide(invisibleGround)
droplet11.collide(invisibleGround)
droplet12.collide(invisibleGround)
droplet13.collide(invisibleGround)
droplet14.collide(invisibleGround)
droplet15.collide(invisibleGround)
droplet16.collide(invisibleGround)
droplet17.collide(invisibleGround)
droplet18.collide(invisibleGround)
droplet19.collide(invisibleGround)
droplet20.collide(invisibleGround)

droplet1.shapeColor = "blue"
droplet2.shapeColor = "blue"
droplet3.shapeColor = "blue"
droplet4.shapeColor = "blue"
droplet5.shapeColor = "blue"
droplet6.shapeColor = "blue"
droplet7.shapeColor = "blue"
droplet8.shapeColor = "blue"
droplet9.shapeColor = "blue"
droplet10.shapeColor = "blue"
droplet11.shapeColor = "green"
droplet12.shapeColor = "orange"
droplet13.shapeColor = "red"
droplet14.shapeColor = "yellow"
droplet15.shapeColor = "pink"
droplet16.shapeColor = "brown"
droplet17.shapeColor = "violet"
droplet18.shapeColor = "indigo"
droplet19.shapeColor = "black"
droplet20.shapeColor = "turquoise"

drawSprites()
}