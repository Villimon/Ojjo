//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
//Проверяем если наш бугер есть, то
if (iconMenu) {
    //Наше меню, которое мы помещаем в константу 
    const menuBody = document.querySelector('.menu__body');
    //Будет получать событие клика
    iconMenu.addEventListener('click', function (event) {
        //И получать класс актив
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}


//Выпадающие меню
document.addEventListener('click', onArrowClick);


function onArrowClick(e) {
    const targetElement = e.target;
    //Выпадающее меню в футере
    if (targetElement.closest('[data-arrow]')) {
        const subMenuId = targetElement.dataset.arrow;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if (subMenu) {
            targetElement.classList.toggle('active');
            subMenu.classList.toggle('open');

        }
        e.preventDefault();
    }
    //Показ текста
    if (targetElement.closest('.information-catalog__btn')) {
        const ellipsis = document.querySelector('.information-catalog__ellipsis');
        const text = document.querySelector('.information-catalog__more');
        if (text) {
            ellipsis.classList.toggle('information-catalog__ellipsis-active');
            text.classList.toggle('information-catalog__more-active');
        }
    }



}





