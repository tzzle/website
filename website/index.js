function appear() {
    document.getElementById('disappear').style.display = 'block';
    document.getElementById('remove').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}

function disappear() {
    document.getElementById('disappear').style.display = 'none';
    document.getElementById('remove').style.display = 'flex';
    document.getElementById('content').style.display = 'block';
}
