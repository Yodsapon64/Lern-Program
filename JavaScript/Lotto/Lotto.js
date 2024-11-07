let lottoNum = prompt("กรุณากรอกเลขหวยของท่านที่ต้องการจะซื้อ")
document.getElementById("myresult").innerHTML = lottoNum
document.getElementById("result").innerHTML = Math.floor(Math.random()*100)
