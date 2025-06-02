document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const currentDropdown = e.target.closest('[data-dropdown]');
    // If the clicked element is not a dropdown button and not inside a dropdown, close all dropdowns
    if (!isDropdownButton && !currentDropdown) {
        document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        return;
    }
    // Toggle the current dropdown
    if (isDropdownButton) {
        currentDropdown.classList.toggle('active');
    }
});