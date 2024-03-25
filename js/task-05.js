document.getElementById('name-input').addEventListener('input', function() {
    let name = this.value.trim();

    if (name === '') {
        name = 'Anonymous';
    }

    document.getElementById('name-output').textContent = name;
});