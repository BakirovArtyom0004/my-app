import React from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

// Логику игры выносим из компонента
export default function useGame(images) { //images - массив объектов все фотографии
    // Для вычисления текущего состояния игры сохраним список отгаданных карточек.
    const [fishedItems, setFinishedItems] = React.useState ([]);
    //счетчик шагов игры - счетчик игры 
    const [stepsCount] = React.useState(0);

    // Функция сравнения двух карточек 
    const checkItems = (firstItem, secondItem) => {
        // Чтобы сравнить карточки, нам нужно получить полные объекты данных. 
        // Найдём объекты по их идентификаторам из параметров функции. 
        const firstImage = images.find(({id}) => id === firstItem); 
        const secondImage = images.find(({id}) => id === secondItem);
        //Сравним карточки по адресу изображения. 
        if (firstImage.url === secondImage.url) { 
            // Если изображения совпадают, обновляем список отгаданных карточек. 
            // Для обновления списка создаём новый массив из копии текущего. 
            // Добавляем оба идентификатора в новый массив.
            setFinishedItems((Items) => [...Items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
    };
    // Функция сброса игры - очищение массива отгаданных карточек и счетчика игру
    const handleReset = () => {
        setFinishedItems([]);
        setStepsCount(0);
    };

    // Игра заканчивается, когда все карточки отгаданы, 
    // Ччтобы понять понять, что все карточки отгаданы, сравниваем длину массива карточек и списка отгаданных. 
    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

    //Логика игры скрыта в функции, а приложению мы сделаем доступным часть парметров. 
    return {
        finishedItems, //  Законченный элемент какого либо раздела страницы
        handleReset, // Сброс или ресет сообщения
        stepsCount, // Количество шагов для соверешения действия
        checkItems, // Элемент который может проверить правильность ответов и алгоритмов
        isWin // Победа, этот элемент работает в случае победы пользователя
    };
};