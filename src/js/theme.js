const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

function themeChange() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}

themeChange();

moonIcon.addEventListener('click', () => {
    localStorage.theme = 'light';
    themeChange();
});

sunIcon.addEventListener('click', () => {
    localStorage.theme = 'dark';
    themeChange();
});