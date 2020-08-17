function isTouching (shapeOne, shapeTwo) {
    var holder;
    var holds;
  
    holder = shapeTwo.width/2 + shapeOne.width/2;
    holds = shapeTwo.height/2 + shapeOne.height/2;
  
    if (holder > shapeOne.x - shapeTwo.x && holder > shapeTwo.x - shapeOne.x &&
      holds > shapeOne.y - shapeTwo.y && holds > shapeTwo.y - shapeOne.y) {
      return true;
    } else {
      return false;
    }
  }
  
  function bounceOff (shapeOne, shapeTwo) {
    var holder = shapeTwo.width/2 + shapeOne.width/2;
    var holds = shapeTwo.height/2 + shapeOne.height/2;
  
    if (holder > shapeOne.x - shapeTwo.x && holder > shapeTwo.x - shapeOne.x) {
      shapeOne.velocityX = shapeOne.velocityX * (-1);
      shapeTwo.velocityX = shapeTwo.velocityX * (-1);
     }
   
     if (holds > shapeOne.y - shapeTwo.y && holds > shapeTwo.y - shapeOne.y) {
       shapeOne.velocityY = shapeOne.velocityY * (-1);
       shapeTwo.velocityY = shapeTwo.velocityY * (-1);
     } 
  }

  function collide (shapeOne, shapeTwo) {
    var holder = shapeTwo.width/2 + shapeOne.width/2;
    var holds = shapeTwo.height/2 + shapeOne.height/2;
  
    if (holder > shapeOne.x - shapeTwo.x && holder > shapeTwo.x - shapeOne.x) {
      if (shapeOne.velocityX >= shapeTwo.velocityX){  
        shapeOne.velocityX = shapeOne.velocityX - shapeTwo.velocityX;
      } else {
        shapeOne.velocityX = shapeTwo.velocityX - shapeOne.velocityX;
      }
      
     }
   
     if (holds > shapeOne.y - shapeTwo.y && holds > shapeTwo.y - shapeOne.y) {
       if (shapeOne.velocityY >= shapeTwo.velocityY){  
        shapeOne.velocityY = shapeOne.velocityY - shapeTwo.velocityY;
       } else {
        shapeOne.velocityY = shapeTwo.velocityY - shapeOne.velocityY;   
       }
     } 
  }