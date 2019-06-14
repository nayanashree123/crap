var RollCount='0';
var myPoint='';
var roll1,roll2;
RollPoint='';
function craps(){
 roll1 = Math.ceil(Math.random() * 6);
 roll2 = Math.ceil(Math.random() * 6);
if(RollCount=='0'){
myPoint = roll1+roll2;
RollPoint=myPoint;

document.getElementById('myP').innerHTML=myPoint;
RollCount++;
checkRoll();

}else{
RollPoint = roll1+roll2;
RollCount++;
checkRoll();
}
}

function checkRoll(){
document.getElementById('myP1').innerHTML=roll1;
document.getElementById('myP2').innerHTML=roll2;
document.getElementById('CP').innerHTML=RollPoint;
if(RollCount>'1' && myPoint==RollPoint){alert("you won!");RollCount='0';myPoint='';}
if(RollCount>'1' && (RollPoint=='7' || RollPoint=='11')){alert("you lose....");RollCount='0';myPoint='';}
if(myPoint=='7' || myPoint=='11'){alert("you won!");RollCount='0';myPoint='';}
if(myPoint=='2' || myPoint=='3' || myPoint=='12'){alert('you lose....');RollCount='0';myPoint='';}


}