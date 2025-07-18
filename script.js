document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(function(collapsible) {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling; // Get the content div immediately after the collapsible header

            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.maxHeight = null; // Reset max-height
            } else {
                content.classList.add('show');
                // Set max-height to scrollHeight to ensure it expands fully, then reset to 'auto' for dynamic content
                content.style.maxHeight = content.scrollHeight + "px";
                content.addEventListener('transitionend', function handler() {
                    if (content.classList.contains('show')) {
                        content.style.maxHeight = 'fit-content'; // Or 'auto'
                    }
                    content.removeEventListener('transitionend', handler);
                });
            }
        });
    });
});
