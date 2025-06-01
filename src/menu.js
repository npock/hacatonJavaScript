import RandomFigure from './modules/random-figure';

// Контекстное меню
document.addEventListener('DOMContentLoaded', function() {
    const contextMenuItem = document.createElement('a');
    contextMenuItem.href = '#';
    contextMenuItem.textContent = 'Случайная фигура';

    // Обработчик клика на пункт меню
    contextMenuItem.addEventListener('click', event => {
        event.preventDefault(); // отменяем стандартное поведение перехода по ссылке
        const randomFigure = new RandomFigure();
        randomFigure.trigger(); // вызываем триггер для показа случайной фигуры
    });

    // Вставляем пункт меню в DOM
    document.body.appendChild(contextMenuItem);
});