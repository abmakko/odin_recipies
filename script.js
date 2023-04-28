const img_1 = document.getElementById('glazed_chicken');
const button_1 = document.getElementById('b-one');

const default_img = document.getElementById('default_image');

const button_2 = document.getElementById('b-two');
const img_2 = document.getElementById('rice_chicken');

const button_3 = document.getElementById('b-three');
const img_3 = document.getElementById('pork');

const left_arrow = document.getElementById("left-arrow")
const right_arrow = document.getElementById("right-button")

var scrolling = document.querySelector("#scroller");

button_1.addEventListener('mouseover', function handleMouseOver(){
    img_1.style.display = 'block';
    default_img.style.display = 'none';    
    img_2.style.display = 'none';
    img_3.style.display = 'none';
});

button_1.addEventListener('mouseout', function handleMouseOut(){
    default_img.style.display = 'block';
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    img_3.style.display = 'none';
});

button_2.addEventListener('mouseover', function handleMouseOver(){
    img_2.style.display = 'block';
    default_img.style.display = 'none';
    img_1.style.display = 'none';    
    img_3.style.display = 'none';
});    

button_2.addEventListener('mouseout', function handleMouseOut(){
    default_img.style.display = 'block';
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    img_3.style.display = 'none';
});

button_3.addEventListener('mouseover', function handleMouseOut(){
    img_3.style.display = 'block';
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    default_img.style.display = 'none';    
});

button_3.addEventListener('mouseout', function handleMouseOut(){
    default_img.style.display = 'block';
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    img_3.style.display = 'none';
});

left_arrow.addEventListener('click', function handleClick(){
    scrolling.scrollBy(-150,0);
    
})

right_arrow.addEventListener('click', function handleClick(){
    scrolling.scrollBy(150,0);
    
})

