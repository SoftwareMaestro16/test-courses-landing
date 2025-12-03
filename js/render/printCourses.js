import { categories } from "../constants/categories.js";
import { setCategory } from "./search.js";
import { filter } from "./search.js";

export function renderCourses() {
    const navContainer = document.querySelector('.search-container__nav');
    
    navContainer.innerHTML = categories.map((category, index) => `
        <div class="search-container__nav__group ${index === 0 ? 'search-container__nav__group--active' : ''}"
             data-category="${category.title.toLowerCase()}">
            <span>${category.title}</span>
            <sup>${category.count}</sup>
        </div>
    `).join('');
    
    navContainer.querySelectorAll('.search-container__nav__group').forEach(group => {
        group.addEventListener('click', function() {
            navContainer.querySelectorAll('.search-container__nav__group')
                .forEach(g => g.classList.remove('search-container__nav__group--active'));
            
            this.classList.add('search-container__nav__group--active');
            
            const category = this.dataset.category;

            setCategory(category); 
            filter();
        });
    });
}
