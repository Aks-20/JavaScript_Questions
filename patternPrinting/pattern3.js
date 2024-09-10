function rightAlignedTrianglePattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '* '.repeat(i));
    }
}

rightAlignedTrianglePattern(5);

rightAlignedTrianglePattern(6);
