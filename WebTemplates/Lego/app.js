new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

new Swiper("#slider2", {
  freeMode: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    snapOnRelease: false
  },
});

new Swiper("#slider3", {
  freeMode: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  scrollbar: {
    el: ".swiper-scrollbar-3",
    hide: false,
    draggable: true,
    snapOnRelease: false
  },
});

new Swiper("#slider4", {
  freeMode: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  scrollbar: {
    el: ".swiper-scrollbar-4",
    hide: false,
    draggable: true,
    snapOnRelease: false
  },
});

new Swiper("#slider5", {
  freeMode: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  scrollbar: {
    el: ".swiper-scrollbar-5",
    hide: false,
    draggable: true,
    snapOnRelease: false
  },
});

let inpSeach = false;

function openSearch(){
    if(!inpSeach){
      document.getElementById('btnSearch').classList.add('d-none');
      document.getElementById('inpSearch').classList.remove('d-none');
      document.getElementById('box-shadow').innerHTML = '<div style="z-index:0 !important" onclick="openSearch()" class="modal-backdrop fade show"></div>';
      inpSeach = true;
    }else{
      document.getElementById('btnSearch').classList.remove('d-none');
      document.getElementById('inpSearch').classList.add('d-none');
      document.getElementById('box-shadow').innerHTML = '';
      inpSeach = false;
    }
}

let inpSeachRS = false;

function openSearchRS(){
  if(!inpSeachRS){
    document.getElementById('btnSearchRS').classList.add('d-none');
    document.getElementById('inpSearchRS').classList.remove('d-none');
    document.getElementById('box-shadow').innerHTML = '<div style="z-index:0 !important" onclick="openSearch()" class="modal-backdrop fade show"></div>';
    inpSeachRS = true;
  }else{
    document.getElementById('btnSearchRS').classList.remove('d-none');
    document.getElementById('inpSearchRS').classList.add('d-none');
    document.getElementById('box-shadow').innerHTML = '';
    inpSeachRS = false;
  }
}

function closeTopbar(){
  let element = document.getElementById('topbar');

  if(!element.classList.contains('d-none')){
    element.classList.add('d-none');
  }
}

function animateBars(){
    let bar_1 = document.querySelector('.icon-bar-1');
    let bar_2 = document.querySelector('.icon-bar-2');
    let bar_3 = document.querySelector('.icon-bar-3');

    bar_1.classList.toggle('icon-bar-1-active');
    bar_2.classList.toggle('icon-bar-2-active');
    bar_3.classList.toggle('icon-bar-3-active');
}

window.addEventListener('resize',()=>{

  let element = document.getElementById('topbar');

  if(element.classList.contains('d-none')){
    if(window.innerWidth >= 992){
      element.classList.remove('d-none');
    }
  }
});

