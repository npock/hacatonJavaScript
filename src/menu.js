// src/context-menu.js
import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from './modules/sounds.module';
import { CircleModule } from './modules/circle.module';
import { RandomFigureModule } from './modules/random-figure'; // импортируем новый модуль

export class ContextMenu extends Menu {
    open() {
        this.add();
    }

    close() {
        this.el.classList.remove('open');
    }

    add() {
        document.addEventListener("contextmenu", this.contextMenu.bind(this));

        // Новый модуль случайной фигуры
        const randomFigureModule = new RandomFigureModule();
        this.el.innerHTML += randomFigureModule.toHTML();
        randomFigureModule.trigger();
    }

    contextMenu(event) {
        event.preventDefault();
        this.locationOfMenu(this.el, event);
        this.el.classList.add('open');
    }

    locationOfMenu(thisEl, event) {
        const x = event.clientX;
        const y = event.clientY;
        thisEl.style.left = `${x}px`;
        thisEl.style.top = `${y}px`;
    }
}

const contextmenu = new ContextMenu('.menu');
contextmenu.open();