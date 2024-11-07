let lottoNum = prompt("กรุณากรอกเลขหวยของท่านที่ต้องการจะซื้อ")
let randomNum = Math.floor(Math.random()*100)
document.getElementById("myresult").innerHTML = lottoNum
document.getElementById("random").innerHTML = randomNum
if(myresult == randomNum){

}