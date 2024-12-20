//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Default First Load Of Page

let defaultTheme = 'christmas';
let defaultDifficulty = 'easy';
console.log("Default Theme", defaultTheme);
console.log("Default Difficulty", defaultDifficulty);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grab Last Game Cache Variables and set them to the current theme and difficulty
let theme = "";
let difficulty = "";

if (theme === "") {
    theme = defaultTheme;
    console.log('Theme:', theme);
}

if (difficulty === "") {
    difficulty = defaultDifficulty;
    console.log('Difficulty:', difficulty);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Updates the query parameter in the URL
function updateQueryParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Theme

document.getElementById('christmas-dropdown-button').onclick = () => {
    updateQueryParam('theme', 'christmas');
};

document.getElementById('movies-dropdown-button').onclick = () => {
    updateQueryParam('theme', 'movies');
};

document.getElementById('food-dropdown-button').onclick = () => {
    updateQueryParam('theme', 'food');
};

document.getElementById('tech-dropdown-button').onclick = () => {
    updateQueryParam('theme', 'tech');
};

document.getElementById('geography-dropdown-button').onclick = () => {
    updateQueryParam('theme', 'geography');
};

if (window.location.search.includes('theme=christmas')) {
    theme = 'christmas';
    let themeUppercase = theme.toUpperCase();
    document.getElementById('themesDropdown').innerText = themeUppercase;
}

if (window.location.search.includes('theme=movies')) {
    theme = 'movies';
    let themeUppercase = theme.toUpperCase();
    document.getElementById('themesDropdown').innerText = themeUppercase;
}

if (window.location.search.includes('theme=food')) {
    theme = 'food';
    let themeUppercase = theme.toUpperCase();
    document.getElementById('themesDropdown').innerText = themeUppercase;
}

if (window.location.search.includes('theme=tech')) {
    theme = 'tech';
    let themeUppercase = theme.toUpperCase();
    document.getElementById('themesDropdown').innerText = themeUppercase;
}

if (window.location.search.includes('theme=geography')) {
    theme = 'geography';
    let themeUppercase = theme.toUpperCase();
    document.getElementById('themesDropdown').innerText = themeUppercase;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Difficulty 

document.getElementById('easy-dropdown-button').onclick = () => {
    updateQueryParam('difficulty', 'easy');
};
  
document.getElementById('hard-dropdown-button').onclick = () => {
    updateQueryParam('difficulty', 'hard');
};
  
if (window.location.search.includes('difficulty=hard')) {
    difficulty = 'hard';
    let difficultyUppercase = difficulty.toUpperCase();
    document.getElementById('difficultyDropdown').innerText = difficultyUppercase;
}
  
if (window.location.search.includes('difficulty=easy')) {
    difficulty = 'easy';
    let difficultyUppercase = difficulty.toUpperCase();
    document.getElementById('difficultyDropdown').innerText = difficultyUppercase;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cache Params
localStorage.setItem('theme', theme);
console.log("Theme Cache", theme);
localStorage.setItem('difficulty', difficulty);
console.log("Difficulty Cache", difficulty);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
