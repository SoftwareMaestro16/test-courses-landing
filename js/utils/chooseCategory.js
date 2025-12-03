document.addEventListener('DOMContentLoaded', function() {
    const navGroups = document.querySelectorAll('.search-container__nav__group');
    
    navGroups.forEach(group => {
        group.addEventListener('click', function() {
            navGroups.forEach(g => g.classList.remove('search-container__nav__group--active'));
            
            this.classList.add('search-container__nav__group--active');
        });
    });
    
    if (navGroups.length > 0) {
        navGroups[0].classList.add('search-container__nav__group--active');
    }
});