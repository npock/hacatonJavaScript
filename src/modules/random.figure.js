// src/modules/random-figure.js
class RandomFigure {
    trigger() {
        console.log("Создаем случайную фигуру");

        // Генерация случайных координат и размеров
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const width = Math.floor(Math.random() * 100 + 50);
        const height = Math.floor(Math.random() * 100 + 50);
        const color = '#' + Math.floor(Math.random()*16777215).toString(16); // случайный hex-код цвета

        // Создаем элемент div для отображения фигуры
        const figure = document.createElement('div');
        figure.style.position = 'absolute';
        figure.style.left = `${x}px`;
        figure.style.top = `${y}px`;
        figure.style.width = `${width}px`;
        figure.style.height = `${height}px`;
        figure.style.backgroundColor = color;
        figure.style.borderRadius = '50%'; // делаем фигуру круглой

        // добавляем элемент на страницу
        document.body.appendChild(figure);
    }
}

export default RandomFigure;