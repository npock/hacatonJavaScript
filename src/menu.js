import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    open(){
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.locationOfMenu(this.el,event)
            this.el.classList.add('open');
            const item = document.querySelector('.menu-item');
            if(!item){
                this.listAdd();
            }
        });
    }
    close(){
        this.el.classList.remove('open');
    }
    add() {
    
    }
    locationOfMenu(thisEl,event){
        const x = event.clientX;
        const y = event.clientY;
        thisEl.style.left = `${x}px`;
        thisEl.style.top = `${y}px`;
    }
    listAdd(){
        const listItem1 = document.createElement('li');
        listItem1.textContent = 'Аналитика кликов';
        listItem1.className = 'menu-item';

        const listItem2 = document.createElement('li');
        listItem2.textContent = 'Случайная фигура';
        listItem2.className = 'menu-item';

        const listItem3 = document.createElement('li');
        listItem3.textContent = 'Таймер отсчета ';
        listItem3.className = 'menu-item';

        const listItem4 = document.createElement('li');
        listItem4.textContent = 'Случайный звук';
        listItem4.className = 'menu-item';

        const listItem5 = document.createElement('li');
        listItem5.textContent = 'Случайный фон';
        listItem5.className = 'menu-item';

        const listItem6 = document.createElement('li');
        listItem6.textContent = 'Кастомное сообщение';
        listItem6.className = 'menu-item';

        this.el.append(listItem1,listItem2,listItem3,listItem4,listItem5,listItem6);
    }
}
const contextmenu = new ContextMenu('.menu')
console.log(contextmenu)
contextmenu.open()