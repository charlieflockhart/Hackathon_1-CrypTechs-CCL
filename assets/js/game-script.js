//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get theme and difficulty from local storage / Cache
let theme = localStorage.getItem('theme');
let difficulty = localStorage.getItem('difficulty');

//grab theme and difficulty from cache and console log
console.log('Theme:', theme);
console.log('Difficulty:', difficulty);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dictionary Import
import { testDictionary, testDictionary2 ,christmasDictionary, movieDictionary, foodDictionary, technologyDictionary, geographyDictionary } from './dictionary.js';
console.log('test dictionary:', testDictionary);
console.log('test dictionary2:', testDictionary2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Theme

// let theme = 'movies';

// document.getElementById('christmas-dropdown-button').onclick = () => {
//     theme = 'christmas';    
//     window.location.search = '?theme=christmas';
// };

// document.getElementById('movies-dropdown-button').onclick = () => {
//     theme = 'movies';    
//     window.location.search = '?theme=movies';
// };

// document.getElementById('food-dropdown-button').onclick = () => {
//     theme = 'food';    
//     window.location.search = '?theme=food';
// };

// document.getElementById('tech-dropdown-button').onclick = () => {
//     theme = 'tech';    
//     window.location.search = '?theme=tech';
// };

// document.getElementById('geography-dropdown-button').onclick = () => {
//     theme = 'geography';    
//     window.location.search = '?theme=geography';
// };

// if (window.location.search.includes('theme=christmas')) {
//     theme = 'christmas';
// }

// if (window.location.search.includes('theme=movies')) {
//     theme = 'movies';
// }

// if (window.location.search.includes('theme=food')) {
//     theme = 'food';
// }

// if (window.location.search.includes('theme=tech')) {
//     theme = 'tech';
// }

// if (window.location.search.includes('theme=geography')) {
//     theme = 'geography';
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////