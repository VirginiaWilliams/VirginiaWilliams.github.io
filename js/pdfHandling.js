const generateButton = document.querySelector('#generate-button');

generateButton.addEventListener('click', async function() {
    // Remove junk

    var inputs = document.querySelectorAll('input');
    inputs.forEach(i => {
        i.style.border = '0 none';
    });

    var disappearMe = document.querySelectorAll('.disappear');
    disappearMe.forEach(d => {
        d.style.display = 'none';
    });

    window.alert('test');

    window.print();

    inputs.forEach(i => {
        i.style.border = '';
    });

    disappearMe.forEach(d => {
        d.style.display = '';
    });
});