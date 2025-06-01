import {Module} from '../core/module';
import {random} from '../utils';

export class SoundModule extends Module{
    trigger(){
        const $soundButton = document.querySelector('[data-type="sound"]');
        if($soundButton){
            $soundButton.addEventListener('click',this.playSound.bind(this));
        };
    }
    playSound(){
        const sounds = document.querySelectorAll('.sound');
        sounds[random(0,2)].play();
    }
    addSoundHTML(){
        const sound1 = document.createElement('audio');
        sound1.className = 'sound';
        sound1.src = `../../sounds/Sound_24376.mp3`

        const sound2 = document.createElement('audio');
        sound2.className = 'sound';
        sound2.src = `../../sounds/Sound_24382.mp3`;

        const sound3 = document.createElement('audio');
        sound3.className = 'sound';
        sound3.src = `../../sounds/Sound_24394.mp3`;

        document.body.append(sound1,sound2,sound3);
    }
}