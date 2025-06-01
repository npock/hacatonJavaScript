import { Module } from "../core/module";

export class RandomFigure extends Module {
    trigger() {
        console.log("Создаем случайную фигуру");

        // Генерируем случайные координаты и размеры
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const width = Math.floor(Math.random() * 100 + 50); // Минимум 50px ширина
        const height = Math.floor(Math.random() * 100 + 50); // Минимум 50px высота
        const color = '#' + Math.floor(Math.random()*16777215).toString(16); // Случайный HEX-код цвета

        // Создание элемента div для отображения фигуры
        const figure = document.createElement('div');
        figure.style.position = 'absolute';
        figure.style.left = `${x}px`;
        figure.style.top = `${y}px`;
        figure.style.width = `${width}px`;
        figure.style.height = `${height}px`;
        figure.style.backgroundColor = color;
        figure.style.borderRadius = '50%'; // Сделаем круглую фигуру

        // Добавляем элемент на страницу
        document.body.appendChild(figure);
    }
}