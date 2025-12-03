import { renderCourses } from "./render/printCourses.js";
import { renderCategories } from "./render/printCategories.js";
import { initSearch, filter } from "./render/search.js";

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCourses();
    initSearch();
    filter();
});