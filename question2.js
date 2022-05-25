function nhpyramid() {
    var total = 6;
    var output = null;
    for (var i = 1; i <= total; i++) {
        for (var j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
        output = '';
    }
}

nhpyramid();
