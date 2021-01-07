
let value = true
function showChangeView(value){
    let divTag_content2 = document.getElementById("content2");
    let divTag_content3 = document.getElementById("content3");
    if(value==true){// value 가 true 면 2번 보여줌, 초기값은 2번
        divTag_content2.style.display = "inline-block"
        divTag_content3.style.display = "none"
    }else{
        divTag_content2.style.display = "none"
        divTag_content3.style.display = "inline-block"
    }
}