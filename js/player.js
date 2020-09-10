class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    getCount(){
        var getplayercount = database.ref("playercount");
        getplayercount.on("value", function(data){
            playerCount= data.val();
        });
    }

    updateCount(nplaycount){
        database.ref('/').update({
            playercount: nplaycount
        });
    }

    update(){

        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
        
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data) => {
            allPlayers = data.val();
        }  )
        
    }

}