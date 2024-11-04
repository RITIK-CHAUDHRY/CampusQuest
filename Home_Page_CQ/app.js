function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const dashboardBtn = document.querySelector('.dashboard-btn');
    dashboardBtn.addEventListener('click', toggleSidebar);

const loginMenuItem = document.querySelector('.login-menu-item');
loginMenuItem.addEventListener('click', () => {
    window.location = './login_pages';
   });
});

