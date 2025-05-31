import {Menu} from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from './modules/sounds.module';

export class ContextMenu extends Menu {
    open(){
        this.add();
    }
    close(){
       this.el.classList.remove('open');
    }
    add() {
        document.addEventListener("contextmenu", this.contextMenu.bind(this));
        const backgroundModule = new BackgroundModule('color','Случайный фон');
        this.el.innerHTML = backgroundModule.toHTML();

        const soundModule = new SoundModule('sound','Случайный звук');
        this.el.innerHTML = this.el.innerHTML+soundModule.toHTML();
        soundModule.addSoundHTML();
        backgroundModule.trigger();
        soundModule.trigger();
    }
    contextMenu(event){
        event.preventDefault();
        this.locationOfMenu(this.el,event);
        this.el.classList.add('open');
    }
    locationOfMenu(thisEl,event){
        const x = event.clientX;
        const y = event.clientY;
        thisEl.style.left = `${x}px`;
        thisEl.style.top = `${y}px`;
    }
}
const contextmenu = new ContextMenu('.menu')
//contextmenu.addCircle()
contextmenu.open()