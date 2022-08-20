var stage = document.getElementById("stage");

var arr = [];
function creatBlock(num) {
    for (let index = 0; index < num; index++) {
        let block = new Block(stage, { backgroundColor: Tools.getRandomColor() });
        block.render();
        block.positionRandom();
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