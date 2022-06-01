// 초기 변수 선언
let picWidth = 1440;
let moveNum = 0;
const totalNum = 3;

// 이미지 위치 세팅
for(var i=0; i<totalNum; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text" + moveNum).classList.add("active");

// 동적으로 점 인디케이터 생성
let dotList = document.createElement("ul");     // Ul 태그 자바스크립트로 만들기
dotList.setAttribute("id", "dotList");          // Ul 태그에 id 값 주기
document.getElementById("section1").appendChild(dotList);   // HTML 안에 원하는 위치에 UL태그 넣기


for(var i = 0; i<totalNum; i++) {                      // li를 여러개 만들어야하므로 for 반복문 사용
    var li = document.createElement("li");      // li 태그 자바스크립트로 만들기
    li.setAttribute("id", "li" + i);            // li 태그에 id 값 추가       
    document.getElementById("dotList").appendChild(li);     // 원하는 곳에 li 위치시키기
    // document.getElementById("li" + i).innerText
    document.getElementById("li" + i).onclick = function() {
        // console.log(this.id);
        // console.log(this.id.substr(2,1));
        aniFunction();
        moveNum = this.id.substr(2,1);
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active");

// 좌우 버튼 생성 prev_btn , next_btn

// prev_btn
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "prev";
document.getElementById("ImgSet").appendChild(prev_btn);

// next_btn
let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "next";
document.getElementById("ImgSet").appendChild(next_btn);


// 이미지 움직이는 함수 선언
var aniFunction = function() {
    document.getElementById("text" + moveNum).classList.add("activeOut");
    document.getElementById("text" + moveNum).classList.remove("active");
}
var moveFunction = function() {
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.add("active");
    document.getElementById("text" + moveNum).classList.remove("activeOut");

    for(var i = 0; i<totalNum; i++) {
        document.getElementById("li" + moveNum).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

// 좌우 버튼 제어
document.getElementById("prev_btn").onclick = function(){
    aniFunction();
    if(moveNum > 0){
        moveNum--;
    }
    moveFunction();
}

document.getElementById("next_btn").onclick = function(){
    aniFunction();
    if(moveNum < 2){
        moveNum++;
    }
    moveFunction();
}

