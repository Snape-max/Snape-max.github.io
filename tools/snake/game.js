var MapHeight = 600;
var MapWidth = 900;
var pen = document.getElementById("canvas").getContext('2d');
var world = document.getElementById("snake").getContext('2d');
var SnakeLength = 5;
var Position = [[10,10],[10,11],[10,12],[10,13],[10,14]];
var Panel = document.getElementById("panel");
var ISPHONE;

var os = function() {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

if(os.isAndroid || os.isPhone) {
    ISPHONE = 1;
} else {
    ISPHONE = 0;
}

var GameConfig = {
    StartFlag: 0,
    Stopflag: 0,

    SnakeDirection: 3,  // 0 x+， 1 x-， 2 y+， 3 y-
    SnakeSpeed: 1,

}

var FoodConfig = {
    IsEaten: 0,
    IsSummon: 0,
    Foodxy: [],
}


// 初始化地图
function MapCreate(){
    var canvas =  document.getElementById("canvas");
    canvas.height = MapHeight + 8;
    canvas.width = MapWidth + 8;
    canvas.style.margin = "auto";
    canvas.style.left = 0;
    canvas.style.right = 0;
    canvas.style.top = 0;
    canvas.style.bottom = 0;
    canvas.style.position = "absolute";
    canvas.Zindex = -1;
    var c2 = document.getElementById("snake")
    c2.height = MapHeight;
    c2.width = MapWidth;
    c2.style.margin = "auto";
    c2.style.left = 0;
    c2.style.right = 0;
    c2.style.top = 0;
    c2.style.bottom = 0;
    c2.style.position = "absolute";
    c2.Zindex = 1;


    var Pstyle = Panel.style;
    Pstyle.height = 450;
    Pstyle.width = 300;
    Pstyle.margin = "auto";
    Pstyle.left = 0;
    Pstyle.right = 0;
    Pstyle.top = 0;
    Pstyle.bottom = 0;
    Pstyle.textAlign = "center";
    Pstyle.position = "absolute"


    pen.moveTo(0,0);
    pen.lineTo(0,608);
    pen.lineTo(908,608);
    pen.lineTo(908,0);
    pen.lineTo(0,0);
    pen.closePath();
    pen.strokeStyle = "black";
    pen.lineWidth = 8;
    pen.stroke();

    if(ISPHONE){
        canvas.style.bottom = "50%";
        c2.style.bottom = "50%"
        Pstyle.bottom = "50%"
        var Control = document.getElementById("control");
        var Cstyle = Control.style;
        Cstyle.height = MapHeight;
        Cstyle.width = MapWidth;
        Cstyle.top = "50%"
        Cstyle.left = 0;
        Cstyle.right = 0;
        Cstyle.bottom = 0;
        Cstyle.margin = "auto";
        Cstyle.position = "absolute"
        Cstyle.display = "block";
    }

}



// 绘制贪吃龙
function DrawSnake(){
    for(let i=0;i<SnakeLength;i++){
        world.fillStyle = "red";
        world.fillRect(20*Position[i][0],20*Position[i][1],20,20);
    }

    world.fillStyle = "black";
    world.fillRect(20*Position[0][0]+3,20*Position[0][1]+5,5,5);
    world.fillRect(20*Position[0][0]+12,20*Position[0][1]+5,5,5);

    world.fillStyle = "coral"
    world.fillRect(20*Position[0][0]+3,20*Position[0][1]-5,5,5);
    world.fillRect(20*Position[0][0]+12,20*Position[0][1]-5,5,5);

}

// 清除蛇
function ClearSnake(){
    world.clearRect(0,0,MapWidth, MapHeight);
}





// 游戏运行
function initGame(){
    MapCreate();
    DrawSnake();
}

function RegEvent(){
    document.onkeydown=function(e){    //对整个页面监听 
        // 按键消抖 
        var TimeOutId;
        if (TimeOutId) {
            clearTimeout(TimeOutId);
        }else {
            TimeOutId = setTimeout(() => {
                var keyNum=window.event ? e.keyCode :e.which;       //获取被按下的键值  
                // Space: Game Start and Stop
                if(keyNum==32){  
                    GameConfig.StartFlag = (GameConfig.StartFlag==0);

                
                } 

                if( GameConfig.StartFlag){

                    if (keyNum== 87){
                        // w
                        if ((GameConfig.SnakeDirection == 0) || (GameConfig.SnakeDirection == 1)){
                            GameConfig.SnakeDirection = 3;
                        }
                    }
                    else if(keyNum == 65){
                        // a
                        if ((GameConfig.SnakeDirection == 2) || (GameConfig.SnakeDirection == 3)){
                            GameConfig.SnakeDirection = 1;
                        }
                    }
                    else if(keyNum == 83){
                        //s
                        if ((GameConfig.SnakeDirection == 0) || (GameConfig.SnakeDirection == 1)){
                            GameConfig.SnakeDirection = 2;
                        }
                    }
                    else if(keyNum == 68){
                        //d
                        if ((GameConfig.SnakeDirection == 2) || (GameConfig.SnakeDirection == 3)){
                            GameConfig.SnakeDirection = 0;
                        }
                    }
                    
                }
            }, "1");
        }
        
        
    }
}


// 判断元素在数组中
function InPosition(arr, subArr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === subArr.length && arr[i].every((value, index) => value === subArr[index])) {
            return i;
        }
    }
    return -1;
}


function FoodSummon(){

    var AllXY = [];
    for(let i=0;i<45;i++){
        for (let k=0;k<30;k++){
            if(InPosition(Position,[i,k]) == -1){
                AllXY.push([i,k]);
            }
        }
    }
    var XYindex = Math.floor(Math.random()*AllXY.length);
    var x = AllXY[XYindex][0];
    var y = AllXY[XYindex][1]; 

    FoodConfig.Foodxy = [x, y];


}

function DrawFood(){
    // draw food
    world.fillStyle = "orange";
    world.fillRect(20*FoodConfig.Foodxy[0]+2,20*FoodConfig.Foodxy[1]+4,16,16);

    world.fillStyle = "green";
    world.fillRect(20*FoodConfig.Foodxy[0]+8,20*FoodConfig.Foodxy[1]+1,5,5);
    world.fillRect(20*FoodConfig.Foodxy[0]+12,20*FoodConfig.Foodxy[1],3,3);
}


// 游戏主循环
function GameLoop(){


    if (GameConfig.StartFlag){
        Panel.style.display = "none"
        Panel.innerHTML = "";
        ClearSnake();
        let NextStepX = Position[0][0], NextStepY = Position[0][1];
        switch (GameConfig.SnakeDirection) {
            case 0:
                NextStepX += GameConfig.SnakeSpeed;
                break;
            case 1:
                NextStepX -= GameConfig.SnakeSpeed;
                break;
    
            case 2:
                NextStepY += GameConfig.SnakeSpeed;
                break;
            
            case 3:
                NextStepY -= GameConfig.SnakeSpeed;
                break;
            default:
                break;
        }

        if(InPosition(Position, [NextStepX, NextStepY]) != -1){
            GameConfig.Stopflag = 1;
        }
        if (GameConfig.Stopflag == 0){
            if (FoodConfig.IsEaten == 0){
                for(let i = SnakeLength-1; i >= 1;i--){
                    Position[i][0] = Position[i-1][0];
                    Position[i][1] = Position[i-1][1];
                }
                Position[0][0] = NextStepX;
                Position[0][1] = NextStepY;
            } else {
                Position.unshift([NextStepX,NextStepY]);
                SnakeLength += 1;
            }
        } 

        // 边界判断
        Position[0][0] = Position[0][0] % 45;
        Position[0][1] = Position[0][1] % 30;

        if(Position[0][0] < 0) Position[0][0] = 45 + Position[0][0];
        if(Position[0][1] < 0) Position[0][1] = 30 + Position[0][1];

        
    } else {
        Panel.style.display = "block";
        Panel.innerHTML = "<P>SPACE 开始/暂停游戏</P><p>WASD 控制方向</p>"
    }

    if(GameConfig.Stopflag == 1){

        Panel.style.display = "block";
        Panel.innerHTML = "<h1>NO GAME OVER</h1><p>SCORE: "+(SnakeLength-5)+"</p><button onclick='location.reload();'>重新开始</button>";

    }

    if(FoodConfig.IsSummon == 0){
        FoodSummon();
        FoodConfig.IsSummon = 1;
        FoodConfig.IsEaten = 0;
    }

    if(FoodConfig.IsEaten == 0){
        DrawFood();
    } else {
        FoodConfig.IsSummon = 0;
    }

    if(InPosition(Position,FoodConfig.Foodxy) != -1){
        FoodConfig.IsEaten = 1;
    }

    DrawSnake();




}



function GameRun(){
    initGame();
    RegEvent();
    var Timer = window.setInterval(GameLoop, 250);
    console.log(ISPHONE);
}

GameRun();