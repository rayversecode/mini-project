document.addEventListener('DOMContentLoaded', () => {


    lucide.createIcons();



    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('#sidebar-toggle');

    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 

            sidebar.classList.toggle('collapsed');
            

            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('toggled');
            }
        });




        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('toggled')) {
                if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
                    sidebar.classList.remove('toggled');
                }
            }
        });
    }




    const filterBtns = document.querySelectorAll('.filter-btn');
    const gridItems = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(fBtn => fBtn.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;



            gridItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });




    const uploadBtn = document.querySelector('.btn-upload');
    const shareBtn = document.querySelector('.btn-share');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            alert('Upload new item... (functionality to be added)');

        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            alert('Sharing portfolio link... (functionality to be added)');

        });
    }

});
