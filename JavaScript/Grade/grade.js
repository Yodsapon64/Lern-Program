let score = prompt("กรุณากรอกคะแนนของท่าน")
if (score<50){
            document.getElementById("result").innerHTML = "F"
}
else if (score<55){
            document.getElementById("result").innerHTML = "D"
}
else if (score<60){
            document.getElementById("result").innerHTML = "D+"
}
else if (score<65){
            document.getElementById("result").innerHTML = "C"
}
else if (score<70){
            document.getElementById("result").innerHTML = "C+"
}
else if (score<75){
            document.getElementById("result").innerHTML = "B"
}
else if (score<80){
            document.getElementById("result").innerHTML = "B+"
}
else {
            document.getElementById("result").innerHTML = "A"
}