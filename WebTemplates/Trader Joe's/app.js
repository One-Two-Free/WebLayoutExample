
function openMenu(){
    var element = document.getElementById('MenuBar');

    if(element.classList.contains('d-none')){ //show
        element.classList.remove('d-none');
        document.getElementById('closeImg').classList.remove('d-none');
        document.getElementById('showImg').classList.add('d-none');
    }else{ //hide
        element.classList.add('d-none');
        document.getElementById('closeImg').classList.add('d-none'); //4 x
        document.getElementById('showImg').classList.remove('d-none'); //3 ---
    }
}