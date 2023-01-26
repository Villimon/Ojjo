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
    //Выпадающее меню на странице каталога
    if (targetElement.closest('[data-btn],[data-arrowbtn]')) {
        const menuId = targetElement.dataset.btn || targetElement.dataset.arrowbtn;
        const menu = document.querySelector(`[data-menu="${menuId}"]`);
        if (menu) {
            const activeLink = document.querySelector('.block-catalog__btn-active');
            const activeBlock = document.querySelector('.block-catalog__submenu-open');
            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('block-catalog__btn-active');
                activeBlock.classList.remove('block-catalog__submenu-open');
            }
            targetElement.classList.toggle('block-catalog__btn-active');
            menu.classList.toggle('block-catalog__submenu-open');

        }
        e.preventDefault();
    };
    if (!targetElement.closest('[data-btn],[data-arrowbtn]')) {
        const activeLink = document.querySelector('.block-catalog__btn-active');
        const activeBlock = document.querySelector('.block-catalog__submenu-open');
        if (activeLink) {
            activeLink.classList.remove('block-catalog__btn-active');
            activeBlock.classList.remove('block-catalog__submenu-open');
        }
    };
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







//Табы
const linkBtn = document.querySelectorAll('.block-catalog__link');
const itemCatalog = document.querySelectorAll('.item-block-catalog');


linkBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let itemId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(itemId);
        if (!currentBtn.classList.contains('block-catalog__link-active')) {
            linkBtn.forEach(item => {
                item.classList.remove('block-catalog__link-active');
            });
            itemCatalog.forEach(item => {
                item.classList.remove('item-block-catalog-active');
            });
            currentBtn.classList.add('block-catalog__link-active');
            currentTab.classList.add('item-block-catalog-active');
            currentTab.classList.remove('item-block-catalog-downloadable');
        };
    })
}
document.querySelector('.block-catalog__link').click();


//При нажатие  на кнопку догружает контент
//Минусы:показывает сразу все,а не догружает постепенно при повторном нажатии
//В целом можно рассмотреть 2 вариант
//1. Как сейчас: нажал на кнопку показало,нажал еще раз свернуло
//2. Показывать весь контент при нажатие на кнопку и удалять ее после этого
const catalogBtn = document.querySelector('.catalog__btn');
const currentCatalog = document.querySelectorAll('.item-block-catalog-downloadable');
catalogBtn.addEventListener('click', function () {
    currentCatalog.forEach(item => {
        item.classList.toggle('item-block-catalog-downloadable');
        item.classList.toggle('item-block-catalog-downloaded')
    });
})

//1.Нужно сделать чтобы при нажатие на "Показать еще" добавлялся контент
//2.Нужно сделать сортировку товара по цене


/* 

//Функция сортировки товара по цене, которая не работает 

const sort = document.querySelector('#sort-asc');

sort.addEventListener('click', mySort);

function mySort() {
        let price = document.querySelectorAll('.item-block-catalog__btn');
        // const priceAttribute = price.getAttribute('data-sort');
        arr = [];
        for (let i = 0; i < price.length; i++) {
            // price.getAttribute('data-sort').sort((a, b => b - a));
            if (price[i].closest('[data-sort]')) {
                const priceId = price[i].getAttribute('data-sort')
                arr.push(priceId);
                // console.log(priceId);
    
            }
    
        }
        arr.sort((a, b) => a - b);
        console.log(arr);
 
const price = document.querySelectorAll('.block-catalog__submenu');
const priceAttribute = price.getAttribute('data-sort');

for (let i = 0; i < price.children.length; i++) {
    // console.log(price[i]);
    for (let j = 0; j < price.childrenlength; j++) {
        if (+price.children[i].getAttribute('data-sort') > +price.children[j].getAttribute('data-sort')) {
            replacedNode = price.replaceChild(price.children[j], price.children[i]);
            inserAfter(replacedNode, price.children[i]);
        };
    }
}

}

function inserAfter(elem, refElem) {
    return refElem.parentNode.inserBefore(elem, refElem.nextSibling);
} */