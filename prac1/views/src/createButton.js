if(window.matchMedia("(max-width : 480px)").matches == true){
    var jbBtn = document.createElement( 'button' );
    var jbBtnText = document.createTextNode( 'Click' );
    jbBtn.appendChild( jbBtnText );
    document.body.appendChild( jbBtn );
}else{
    var header = document.querySelector("button");	//제거하고자 하는 엘리먼트
    header.parentNode.removeChild(header);  
}

//이 파일은 일단 무시