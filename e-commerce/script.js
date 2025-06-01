 document.addEventListener('DOMContentLoaded', function() {
            const checkboxes = document.querySelectorAll('.custom-checkbox');
            
            checkboxes.forEach(checkbox => {
                const label = checkbox.nextElementSibling;
                
                label.addEventListener('click', function(e) {
                    e.preventDefault();
                    checkbox.checked = !checkbox.checked;
                });
            });
        });

         document.addEventListener('DOMContentLoaded', function() {
            const wishlistButtons = document.querySelectorAll('.product-card .ri-heart-line');
            
            wishlistButtons.forEach(button => {
                button.addEventListener('click', function() {
                    if (this.classList.contains('ri-heart-line')) {
                        this.classList.remove('ri-heart-line');
                        this.classList.add('ri-heart-fill');
                        this.classList.add('text-primary');
                    } else {
                        this.classList.remove('ri-heart-fill');
                        this.classList.remove('text-primary');
                        this.classList.add('ri-heart-line');
                    }
                });
            });
        });