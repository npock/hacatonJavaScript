import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';

export class ContextMenu extends Menu {
    open() {
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.locationOfMenu(this.el, event);
            this.add()
            this.el.classList.add('open');
        });
    }
    close() {
        this.el.classList.remove('open');
    }
    add() {
        const backgroundModule = new BackgroundModule('color', 'Случайный фон');
        const clicksModule = new ClicksModule('clickCounter', 'Считать клики за 3 секунды');
        this.el.innerHTML = backgroundModule.toHTML() + clicksModule.toHTML();
        backgroundModule.trigger();
        clicksModule.trigger();
    }

    locationOfMenu(thisEl, event) {
        const x = event.clientX;
        const y = event.clientY;
        thisEl.style.left = `${x}px`;
        thisEl.style.top = `${y}px`;
    }
}
const contextmenu = new ContextMenu('.menu')
contextmenu.open()