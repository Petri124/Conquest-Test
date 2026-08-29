function ps_display(directive, source){
    const poster= document.getElementsByClassName("show_display");
    const content = document.getElementById('content');
    poster[0].style.display= directive;
    poster[1].style.display= directive;
    content.src= source;
}

function get_id(source){
    

}