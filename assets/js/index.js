console.log('Testing index.js!');

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
}

if (window.location.search.includes('theme=movies')) {
    theme = 'movies';
}

if (window.location.search.includes('theme=food')) {
    theme = 'food';
}

if (window.location.search.includes('theme=tech')) {
    theme = 'tech';
}

if (window.location.search.includes('theme=geography')) {
    theme = 'geography';
}

console.log('Theme:', theme);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Difficulty 

document.getElementById('easy-dropdown-button').onclick = () => {
    updateQueryParam('difficulty', 'easy');
    cacheParams();
};
  
document.getElementById('hard-dropdown-button').onclick = () => {
    updateQueryParam('difficulty', 'hard');
    cacheParams();
};
  
if (window.location.search.includes('difficulty=hard')) {
    difficulty = 'hard';
}
  
if (window.location.search.includes('difficulty=easy')) {
    difficulty = 'easy';
}

console.log('difficulty:', difficulty);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cache Params
localStorage.setItem('theme', theme);
localStorage.setItem('difficulty', difficulty);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////