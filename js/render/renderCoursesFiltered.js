import { getCategoryColor } from "../utils/getColor.js";

export function renderCoursesFiltered(filtered) {
    const container = document.querySelector(".courses-container");

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-courses">No courses found</p>`;
        return;
    }

    container.innerHTML = filtered.map(c => `
        <div class="courses-container__block">
            <img src="${c.image}" alt="${c.title}" />
            <div class="courses-container__block--down">
                <div class="courses-container__block__type-banner" 
                     style="background-color:${getCategoryColor(c.type)}">
                    <h3 class="courses-container__block__type-banner__text">${c.type}</h3>
                </div>
                <h3>${c.title}</h3>
                <div class="courses-container__block--down__by">
                    <p class="courses-container__block--down__by__price">${c.price}</p>
                    <span class="courses-container__block--down__by__author-separator">|</span>
                    <p class="courses-container__block--down__by__author-name">${c.author}</p>
                </div>
            </div>
        </div>
    `).join("");
}
