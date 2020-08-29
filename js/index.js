const item = document.querySelector('.item');
console.log(item)
const iconCross = document.querySelector('.icon-cross');
console.log(iconCross)
const imgFull = document.querySelector('.item-background'); //constante para el contenedor de la imagen ampliada//
console.log(imgFull);
const programacionBasica = document.querySelector('#programacionBasica'); //constante para los contenedores de certificados sin ampliar//
const desarrolloWeb = document.querySelector('#desarrolloWeb');
const responsiveDesign = document.querySelector('#responsiveDesign');
console.log(programacionBasica)




item.addEventListener('click', hideShow)
iconCross.addEventListener('click', hideShow)

function hideShow(){
    if(imgFull.classList.contains('is-active')){
        imgFull.classList.remove('is-active')
    }else{
        imgFull.classList.add('is-active')
    }
}