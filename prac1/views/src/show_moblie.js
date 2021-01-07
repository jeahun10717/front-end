let value_mobile = true;

function show_mobile(value_mobile){
    let divTag_content1 = document.getElementById("content1");
    let divTag_content2 = document.getElementById("content2");
    let divTag_content3 = document.getElementById("content3");
    if(value_mobile==true){// value_mobile 가 true 면 2번 보여줌, 초기값은 2번
        divTag_content1.style.display = "inline-block"
        divTag_content2.style.display = "none"
        divTag_content3.style.display = "none"
    }else{// 여기는 3번 보여짐
        divTag_content1.style.display = "inline-block"
        divTag_content2.style.display = "none"
        divTag_content3.style.display = "none"
    }
}
