document.getElementById("question-box").style.display = "none";
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("question-box").style.display = "block";
    document.getElementById("title-screen").style.display = "none";
})
var bg=[
    "url(a.jpg)",
    "url(b.jpg)",
    "url(c.jpg)",
    "url(d.jpg)",
]
var num=[ 25, 50, 75, 100]

var i=0;
var count = 1;
document.getElementById("progress-number").innerHTML = count + "/4";
var x = 1;
document.getElementById("body-box").style.transition = "all 2s";
document.getElementById("next").addEventListener("click",function(){
    if (count >= 4) {
        count = 1;
    } else {
    count++;
    }
    if(i==3){
        i=0;
    }
    else{i++;}
    document.getElementById("progression").style.width =  num[i] + "%";
    console.log(num[x]);
    document.getElementById("body-box").style.background = bg[i] + " center fixed";
    document.getElementById("body-box").style.backgroundSize = "cover";
    document.getElementById("progress-number").innerHTML = count + "/4";
    console.log(count);
})
document.getElementById("previous").addEventListener("click",function(){
    if (count <= 1) {
        count = 4;
    } else {
        count--;
    }         
    if(i==0){
        i=3;
    }

    else{i--;}
    console.log(count);
    document.getElementById("progression").style.width =  num[i] + "%";
    document.getElementById("body-box").style.background = bg[i] + " center fixed";
    document.getElementById("body-box").style.backgroundSize = "cover";
    document.getElementById("progress-number").innerHTML = count + "/4";
    if (i === 4) {
        count = 4;
    }
})