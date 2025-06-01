import {Menu} from './core/menu'
import RandomFigure from './modules/random-figure.js';

export class ContextMenu extends Menu {
    constructor(menuElement) {
        super(menuElement);
    }

    add(name, moduleInstance, label) {
        this.registerModule(name, moduleInstance);

        const menuItem = document.createElement('li');
        menuItem.textContent = label || name;
        menuItem.dataset.module = name;

        this.menuElement.appendChild(menuItem);
    }
}

//Создаём экземпляр ContextMenu
const menuElement = document.querySelector('#menu');
const menu = new ContextMenu(menuElement);

const randomFigureModule = new RandomFigure();

menu.add('random-figure', randomFigureModule, 'Случайная фигура');
