// src/modules/random-figure.js
import { Module } from '../core/module';
import { random } from '../utils';

export class RandomFigureModule extends Module {
    trigger() {
        const button = document.querySelector('[data-type="random-figure"]');
        if (button) {
            button.addEventListener('click', this.createRandomFigure.bind(this));
        }
    }

    createRandomFigure() {
        const container = document.body;
        const figureDiv = document.createElement('div');
        figureDiv.className = 'random-figure';
        figureDiv.style.position = 'absolute';
        figureDiv.style.left = `${random(0, window.innerWidth)}px`;
        figureDiv.style.top = `${random(0, window.innerHeight)}px`;
        figureDiv.style.width = `${random(50, 150)}px`;
        figureDiv.style.height = `${random(50, 150)}px`;
        figureDiv.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
        figureDiv.style.borderRadius = '50%';
        container.appendChild(figureDiv);
    }

    toHTML() {
        return '<button data-type="random-figure" class="btn btn-random-figure">Случайная фигура</button>';
    }
}