let sidebar = document.getElementById('js-menu');

let sidebarToggle = document.getElementById('js-sidebar-toggle');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});