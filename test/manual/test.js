opentype.load('fonts/Avenir-Black.woff', function(err, font) {
    if (err) {
        alert('Font could not be loaded: ' + err);
    } else {
        console.log(font);
    }
});
