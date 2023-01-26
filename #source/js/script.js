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

//Табы 

const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItem = document.querySelectorAll('.tabs__item');


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(item => {
                item.classList.remove('active');
            });
            tabsItem.forEach(item => {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        };

    })
}
document.querySelector('.tabs__btn').click();




//Выпадающие меню

document.addEventListener('click', onArrowClick);


function onArrowClick(e) {
    const targetElement = e.target;

    if (targetElement.closest('[data-arrow]')) {
        const subMenuId = targetElement.dataset.arrow;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if (subMenu) {
            targetElement.classList.toggle('active');
            subMenu.classList.toggle('open');
        }
        e.preventDefault();
    }
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
    

}

console.log(123);
