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

    

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.component-list');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    


    const previewBtns = document.querySelectorAll('.preview-btn');
    previewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            previewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
        });
    });

    


    const draggableItems = document.querySelectorAll('.component-item');
    const canvasArea = document.getElementById('canvas-area');
    const dropList = document.getElementById('dropped-items-list');
    const placeholder = document.querySelector('.silhouette-placeholder');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.name);
            e.dataTransfer.setData('type', item.dataset.type);
            setTimeout(() => item.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });
    });

    
    canvasArea.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        canvasArea.classList.add('drag-over');
    });

    canvasArea.addEventListener('dragleave', () => {
        canvasArea.classList.remove('drag-over');
    });

    canvasArea.addEventListener('drop', (e) => {
        e.preventDefault();
        canvasArea.classList.remove('drag-over');

        const itemName = e.dataTransfer.getData('text/plain');
        const itemType = e.dataTransfer.getData('type');

        if (itemName) {
            
            if (placeholder) {
                placeholder.style.display = 'none';
            }

            

            const droppedItemEl = document.createElement('div');
            droppedItemEl.classList.add('dropped-item');
            droppedItemEl.textContent = `${itemType}: ${itemName}`;
            dropList.appendChild(droppedItemEl);
        }
    });
});
