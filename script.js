const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

// popup effect image in menus.html

let previewMenue = document.querySelector('.menu-preview');
let previewBox = previewMenue.querySelectorAll('.preview');

document.querySelectorAll('.menu-container .menu').forEach(product =>{
  product.onclick = () =>{
    previewMenue.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    previewMenue.style.display = 'none';
  };
});

// second breakfast menu

let previewMenu2 = document.querySelector('.menu-preview2');
let previewBox2 = previewMenu2.querySelectorAll('.preview2');

document.querySelectorAll('.menu-container2 .menu2').forEach(product =>{
  product.onclick = () =>{
    previewMenu2.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox2.forEach(preview2 =>{
      let target = preview2.getAttribute('data-target');
      if(name == target){
        preview2.classList.add('active');
      }
    });
  };
});

previewBox2.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    previewMenu2.style.display = 'none';
  };
});

// third dessert menus 

let previewMenu3 = document.querySelector('.menu-preview3');
let previewBox3 = previewMenu3.querySelectorAll('.preview3');

document.querySelectorAll('.menu-container3 .menu3').forEach(product =>{
  product.onclick = () =>{
    previewMenu3.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox3.forEach(preview3 =>{
      let target = preview3.getAttribute('data-target');
      if(name == target){
        preview3.classList.add('active');
      }
    });
  };
});

previewBox3.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    previewMenu3.style.display = 'none';
  };
});

// fourth drinks menus


let previewMenu4 = document.querySelector('.menu-preview4');
let previewBox4 = previewMenu4.querySelectorAll('.preview4');

document.querySelectorAll('.menu-container4 .menu4').forEach(product =>{
  product.onclick = () =>{
    previewMenu4.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox4.forEach(preview4 =>{
      let target = preview4.getAttribute('data-target');
      if(name == target){
        preview4.classList.add('active');
      }
    });
  };
});

previewBox4.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    previewMenu4.style.display = 'none';
  };
});

// 5th beans menus

let previewMenu5 = document.querySelector('.menu-preview5');
let previewBox5 = previewMenu5.querySelectorAll('.preview5');

document.querySelectorAll('.menu-container5 .menu5').forEach(product =>{
  product.onclick = () =>{
    previewMenu5.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox5.forEach(preview5 =>{
      let target = preview5.getAttribute('data-target');
      if(name == target){
        preview5.classList.add('active');
      }
    });
  };
});

previewBox5.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    previewMenu5.style.display = 'none';
  };
});