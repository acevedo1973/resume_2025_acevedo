// Script to show a welcome message
window.addEventListener("load", () => {
    alert("Welcome to Shaye Angelo Acevedo's Resume!");
});

// Example: Hover effect if additional interactivity is desired
const skillsListItems = document.querySelectorAll('.skills-list li');
skillsListItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#f5f5f5'; // Light gray for a subtle hover effect
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'transparent';
    });
});
