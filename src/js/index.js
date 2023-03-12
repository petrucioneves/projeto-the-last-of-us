const carouselButtons = document.querySelectorAll('.button');
const carouselImgs = document.querySelectorAll('.img');
carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const buttonSelect = document.querySelector('.select');
        buttonSelect.classList.remove('select');
        button.classList.add('select');
        const imgActive = document.querySelector('.active');
        imgActive.classList.remove('active');
        carouselImgs[index].classList.add('active');
    })
})




















// let buttonSelect = document.getElementById('button1');
// let imgSelect = document.getElementById('img1');

// function carousel(buttonId, imgId){
//     const button = document.getElementById(buttonId);
//     const img = document.getElementById(imgId);    
//     delClass(buttonSelect, 'select');
//     buttonSelect = button;
//     delClass(imgSelect, 'active');
//     imgSelect = img;
//     addClass(button, 'select');
//     addClass(img, 'active');

// }
// function delClass(button, classe) {
//     var classes = button.className.split(' ');
//     var getIndex = classes.indexOf(classe);
  
//     if (getIndex > -1) {
//       classes.splice(getIndex, 1);
//     }
//     button.className = classes.join(' ');
// }
// function addClass(button, classe) {
//     var classes = button.className.split(' ');
//     var getIndex = classes.indexOf(classe);
  
//     if (getIndex === -1) {
//       classes.push(classe);
//       button.className = classes.join(' ');
//     }
//   }