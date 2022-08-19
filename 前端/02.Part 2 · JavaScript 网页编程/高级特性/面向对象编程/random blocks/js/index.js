var stage = document.getElementById("stage");
var stageWidth = stage.offsetWidth;
var stageHeight = stage.offsetHeight;

var arr = [];
function creatBlock(num) {
    for (let index = 0; index < num; index++) {
        let block = new Block(stage);
        block.backgroundColor = Tools.getRandomColor();
        block.x = block.getRandomIntInclusive(stageWidth);
        block.y = block.getRandomIntInclusive(stageHeight);
        block.render();
        arr.push(block);
    }
}

creatBlock(100);
setInterval(function () {
    for (let index = 0; index < arr.length; index++) {
        arr[index].positionRandom();
        arr[index].colornRandom();
    }
}, 100);