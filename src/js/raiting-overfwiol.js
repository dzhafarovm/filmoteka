const progressDone = document.querySelectorAll('.progress-done');
 
progressDone.forEach(progress => {
    progress.style.width = progress.getAttribute('data-done') * '10' + '%';
});
