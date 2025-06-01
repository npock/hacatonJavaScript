import {Module} from '../core/module'

export class TimerModule extends Module {
    trigger() {
        const $timerContainer = document.querySelector('[data-type="timer"]')
        if ($timerContainer) {
            $timerContainer.addEventListener('click', this.startTimer.bind(this))
        }
    }

    startTimer() {
        let timerDuration = Number(prompt('Установите таймер в минутах:'))
        if (isNaN(timerDuration) || timerDuration <= 0) {
            alert('Введите корректное время.')
            return
        }
        this.createTimer(timerDuration)
    }

    createTimer(timerDuration) {
        const $timerDisplay = document.createElement('div')
        $timerDisplay.setAttribute('data-type', 'timer')
        $timerDisplay.className = 'timer-container'
        document.body.append($timerDisplay)

        let time = timerDuration * 1000

        const timer = setInterval(() => {
            time -= 100
            const minutes = Math.floor(time / 60000)
            const seconds = Math.floor((time % 60000) / 1000)
            const milliseconds = Math.floor((time % 1000) / 100)

            $timerDisplay.textContent = `${minutes}:${String(seconds).padStart(2, '0')}.${milliseconds}`

            if (time < 0) {
                clearInterval(timer)
                $timerDisplay.textContent = 'Время истекло!'
                setTimeout(() => {
                    $timerDisplay.remove()
                }, 2000)
            }
        }, 1000)
    }
}
