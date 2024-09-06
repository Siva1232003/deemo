const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.color="white";
toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});