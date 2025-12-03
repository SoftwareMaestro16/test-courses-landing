import { courses } from "../constants/courses.js";
import { renderCoursesFiltered } from "./renderCoursesFiltered.js";

let currentCategory = "all";

export function setCategory(category) {
    currentCategory = category;
    filter();
}

export function initSearch() {
    const input = document.querySelector(".search-container__input-block__field");
    input.addEventListener("input", filter);
}

export function filter() {
    const value = document
        .querySelector(".search-container__input-block__field")
        .value.toLowerCase();

    let filtered = courses;

    if (currentCategory !== "all") {
        filtered = filtered.filter(c => 
            c.type.toLowerCase() === currentCategory
        );
    }

    if (value.trim() !== "") {
        filtered = filtered.filter(c =>
            c.title.toLowerCase().includes(value)
        );
    }

    renderCoursesFiltered(filtered);
}
