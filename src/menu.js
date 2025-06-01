
import {Menu} from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from './modules/sounds.module';
import { CircleModule } from './modules/circle.module';
import { RandomFigureModule } from './modules/random-figure'; // импортируем новый модуль

export class ContextMenu extends Menu {
    open(){
        document.addEventListener("contextmenu", this.contextMenu.bind(this));
        this.add();
    }
    close(){
       this.el.classList.remove('open');
    }
    add() {
        const backgroundModule = new BackgroundModule('color','Случайный фон');
        this.el.innerHTML = backgroundModule.toHTML();

        const soundModule = new SoundModule('sound','Случайный звук');
        this.el.innerHTML = this.el.innerHTML+soundModule.toHTML();

        const circleModule = new CircleModule('circle','Бешеный круг');
        this.el.innerHTML = this.el.innerHTML+circleModule.toHTML();
      
        const randomFigureModule = new RandomFigureModule();
        this.el.innerHTML += randomFigureModule.toHTML();
      
        randomFigureModule.trigger();
        soundModule.addSoundHTML();
        backgroundModule.trigger();
        soundModule.trigger();
        circleModule.trigger();
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
