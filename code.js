function cambiarColor() {
    document.body.style.backgroundColor=
    'rgb(' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ')';
}