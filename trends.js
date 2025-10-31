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
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(fBtn => fBtn.classList.remove('active'));
            btn.classList.add('active');
            
        });
    });

   

    const ctx = document.getElementById('trendingColorsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Digital Lavender', 'Sundial', 'Verdigris', 'Crimson', 'Azure'],
                datasets: [{
                    label: '% Popularity Increase',
                    data: [45, 30, 25, 15, 10],
                    backgroundColor: [
                        '#B5A8D1', 
                        '#e4dccaff', 
                        '#a2c5c5ff', 
                        '#da8193ff', 
                        '#478fd7ff'  
                    ],
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', 
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
