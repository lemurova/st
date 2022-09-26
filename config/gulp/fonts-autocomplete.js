import paths from '../../paths.js';
import gulp from 'gulp';
import fs from 'fs';

import {
  getUniqueItems,
} from '../helpers.js';

import path from 'path';

/**
 * @description The function will return a numeric representation of the font thickness from the text
 * @param weightStyle {String} - font weight, style or weight and style on one string
 * @returns {Object} - object, style and weight
 */
const getFontWeightAndStyle = (weightStyle) => {
  //  Проверяем, есть ли вообще наклонное начертание у шрифта
  const isItalic = weightStyle.includes('Italic');

  // Устанавливаем начертание по умолчанию
  let style = 'normal';

  // Устанавливаем вес по
  let fontWeight = weightStyle;
  let weight;

  if (isItalic) {
    const re = /Italic/gi;
    fontWeight = weightStyle.replace(re, '');
    style = 'italic';
  }

  switch (fontWeight.toLowerCase()) {
    case 'thin':
      weight = 100;
      break;
    case 'extralight':
      weight = 200;
      break;
    case 'light':
      weight = 300;
      break;
    case 'medium':
      weight = 500;
      break;
    case 'semibold':
      weight = 600;
      break;
    case 'bold':
      weight = 700;
      break;
    case 'extrabold':
    case 'heavy':
      weight = 800;
      break;
    case 'black':
      weight = 900;
      break;
    default:
      weight = 400;
  }
  return {weight, style};
};

/**
 * @description Gets all files in a folder. Iterates recursively through all folders within the specified folder
 * @param dir {String} - Path to directory
 * @returns {*[]} - array of filenames
 */
const getAllFonts = (dir) => fs.readdirSync(dir).reduce((files, file) => {
  const name = path.join(dir, file);
  const isDirectory = fs.statSync(name).isDirectory();
  return isDirectory ? [...files, ...getAllFonts(name)] : [...files, file];
}, []);

/**
 * @description Gets the name of a font without permission
 * @param font {String} - Font file name
 * @returns {String} - Font name
 */
const getFontName = (font) => font.split('.')[0];

// Функция для записили в файл стилей подключение каждого шрифта
const writeStyle = (fontsFile, {name, fullName, weight, style}) => {
  fs.appendFile(
    fontsFile,
    `@include font(${name}, ${fullName}, ${weight}, ${style});\r\n`,
    () => {},
  );
};

// Функция для формирования полного объекта шрифта
const getFont = (fontName) => {
  const [name, weightAndStyle] = fontName.split('-');
  const fullName = fontName;
  const {weight, style} = getFontWeightAndStyle(weightAndStyle);
  return {
    fullName,
    weight,
    style,
    name,
  };
};


export default () => {
  // Путь к файлу подключения шрифтов
  let fontsSCSS = `${paths.pathSrc}/scss/fonts.scss`;
  fs.truncate(fontsSCSS, () => {});

  // Получаем список всех шрифтов. Если нет локальных шрифтов, выход из функции
  if (!fs.existsSync(paths.src.fonts)) {
    return gulp.src(`${paths.src.fonts}`);
  }
  const fontsList = getAllFonts(paths.src.fonts);

  // Получаем названия шрифтов без расширения
  const fontsNames = fontsList.map(getFontName);

  // Получаем список уникальных названий шрифтов для подключения в css
  const uniqFontsNames = getUniqueItems(fontsNames);

  // Получаем массив из объектов шрифтов, каждый объект - разный шрифт разной толщины
  const fonts = uniqFontsNames.map(getFont);

  // В цикле проходимся по всем шрифтам и записываем данные в файл css, подключаем шрифты
  fonts.forEach((font) => {
    writeStyle(fontsSCSS, font);
  });

  return gulp.src(paths.src.fonts);
};