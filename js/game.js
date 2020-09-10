class Game{
    constructor(){

    }

    getState(){
        var gamestateref = database.ref("gamestate");
        gamestateref.on("value",function(data){
           gameState = data.val();
        })
    }
    
    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    start(){
        if(gameState ==0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1, car2, car3, car4];
    }

    /*async start(){
        if(gameState ==0){
            player = new Player();
            var playercountref = await database.ref('playercount').once("value");

            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();
            }

            form = new Form();
            form.display();
            //playercountref.once("value")
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1, car2, car3, car4];

    }*/

    play(){
        form.myHide();

        //Game text
        textSize(30);
        text("Game has started",120,100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            //var displayPosition = 130;
            var carIndex = 0;
            var carX = 0;
            var carY;

            //console.log(allPlayers);
            for(var plr in allPlayers){
                carIndex = carIndex + 1;
                carX = carX + 200;
                carY = displayHeight - allPlayers[plr].distance;

                cars[carIndex-1].x = carX;
                cars[carIndex-1].y = carY;

                if(carIndex == player.index){
                    cars[carIndex-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex-1].y;
                }
    

                //displayPosition = displayPosition + 20;
                
                /*if(plr == "player" + player.index){
                    fill("red");
                    //text(plr,160,displayPosition);
                }

                else{
                    fill("black");
                }

                textSize(15);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,
                displayPosition)*/
            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance= player.distance + 50;

            player.update();
        }

        drawSprites();

    }

    
}