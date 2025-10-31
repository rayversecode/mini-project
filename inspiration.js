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


    const saveBtns = document.querySelectorAll('.save-btn');
    saveBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            btn.classList.toggle('saved');
        });
    });


    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(fBtn => fBtn.classList.remove('active'));
            btn.classList.add('active');
            
        });
    });

    

    const cards = document.querySelectorAll('.inspiration-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked!');
            
        });
    });
});
