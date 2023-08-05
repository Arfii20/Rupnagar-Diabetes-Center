document.getElementById('read-more-link').addEventListener('click', function(event) {
    event.preventDefault();
    var expandableText = document.getElementById('expandable-text');
    expandableText.classList.toggle('text-truncate');
});
