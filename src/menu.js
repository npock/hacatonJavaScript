import {Menu} from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from './modules/sounds.module';

export class ContextMenu extends Menu {
    open(){
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.locationOfMenu(this.el,event);
            this.add()
            this.el.classList.add('open');
        });
    }
    close(){
       this.el.classList.remove('open');
    }
    add() {
        const backgroundModule = new BackgroundModule('color','Случайный фон');
        this.el.innerHTML = backgroundModule.toHTML();

        const soundModule = new SoundModule('sound','Случайный звук');
        this.el.innerHTML = this.el.innerHTML+soundModule.toHTML();
        backgroundModule.trigger();
        soundModule.addSoundHTML();
        soundModule.trigger();
    }
    locationOfMenu(thisEl,event){
        const x = event.clientX;
        const y = event.clientY;
        thisEl.style.left = `${x}px`;
        thisEl.style.top = `${y}px`;
    }
}
const contextmenu = new ContextMenu('.menu')
contextmenu.open()