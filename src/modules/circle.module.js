import {Module} from '../core/module';

export class CircleModule extends Module{
    trigger(){
        let click = 0
        const circleButton = document.querySelector('[data-type="circle"]');
        circleButton.addEventListener('click',(event)=>{
            if(click===0){
                this.createCircle()
                let start = Date.now()
                setInterval(()=>{
                    let timePassed = Date.now() - start;
                    if (timePassed >= 6900) {
                        start = Date.now()
                    }
                    this.drawCircle(timePassed);
                },20);
            }
            click+=1
        });
    }
    createCircle(){
            const circle = document.createElement('div');
            circle.className = 'circle';
            document.body.append(circle);

            circle.style.top = `${10}px`;

            circle.style.left = `${10}px`;
        
    }
    drawCircle(timePassed){
        const circle = document.querySelector('.circle');
        circle.style.left = timePassed / 5 + 'px';
    }
}