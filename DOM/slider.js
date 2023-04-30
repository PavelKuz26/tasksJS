//  Слайдер

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const itemsList = document.querySelector('#items');
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll('.item');

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (items.length - preShowItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

rightBtn.addEventListener('click', e =>{
    e.preventDefault()

    if(currentRight < maxRight){
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
});


leftBtn.addEventListener('click', e =>{
    e.preventDefault()

    if(currentRight > minRight){
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
});


// nextBtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentNext = parseInt(computedStyles.right)

//     if(currentNext < 500){
//         items.style.right = `${currentNext + 100}px`;
//     }
// });

// prevBtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentNext = parseInt(computedStyles.right)

//     if(currentNext > 0){
//         items.style.right = `${currentNext - 100}px`;
//     }
// });