const grid = document.querySelector(".grid");
var chosenImg = [];
var chosenImgId = [];
var ans = 0;
const imgArr = [
{
    name: "crash",
    src: "./images/crash.png"
},
{
    name: "kick",
    src: "./images/kick.png"
},
{
    name: "snare",
    src: "./images/snare.png"
},
{
    name: "tom1",
    src: "./images/tom1.png"
},
{
    name: "tom2",
    src: "./images/tom2.png"
},
{
    name: "crash",
    src: "./images/crash.png"
},
{
    name: "kick",
    src: "./images/kick.png"
},
{
    name: "snare",
    src: "./images/snare.png"
},
{
    name: "tom1",
    src: "./images/tom1.png"
},
{
    name: "tom2",
    src: "./images/tom2.png"
}];

imgArr.sort(() => Math.random() - 0.5);



function createGrid(){
    for(let i=0;i<imgArr.length;i++){
        const cell = document.createElement("img");
        cell.setAttribute('src','./images/cover.jpg');
        cell.setAttribute('id',i);
        cell.style.width = "60px";
        cell.style.height = "60px";
        cell.addEventListener("click",flipImg);
        grid.appendChild(cell);
    }
}




function flipImg(){
    const id = this.getAttribute('id');
    this.setAttribute('src',imgArr[id].src);
    chosenImg.push(imgArr[id].name);
    chosenImgId.push(id);
    if(chosenImg.length === 2){
        setTimeout(function(){
            if(chosenImgId[0] === chosenImgId[1]){
                alert("Select different images !!");
                const cell = document.querySelectorAll("img");
                cell[chosenImgId[0]].setAttribute('src','./images/cover.jpg');
                cell[chosenImgId[1]].setAttribute('src','./images/cover.jpg');
            }else if(chosenImg[0] === chosenImg[1]){
                ans++;
                const cell = document.querySelectorAll("img");
                
                console.log(cell[chosenImgId[0]]);
                
                cell[chosenImgId[0]].setAttribute('src','./images/white.png');
                cell[chosenImgId[1]].setAttribute('src','./images/white.png');
                cell[chosenImgId[0]].removeEventListener("click",flipImg);
                cell[chosenImgId[1]].removeEventListener("click",flipImg);
                chosenImg = [];
                chosenImgId = [];
                
            }else{
                const cell = document.querySelectorAll("img");
                console.log(cell[chosenImgId[0]]);
                cell[chosenImgId[0]].setAttribute('src','./images/cover.jpg');
                cell[chosenImgId[1]].setAttribute('src','./images/cover.jpg');
                alert("wrong images!!");
                chosenImg = [];
                chosenImgId = [];
            }
            
            document.querySelector(".score").innerHTML = ans;
            if(ans === imgArr.length/2){
                
                document.querySelector(".score").innerHTML = "Congrats, you have won";
            }
        },100);
    }
    
}

createGrid();