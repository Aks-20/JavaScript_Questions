function invertedTrianglePattern(rows) {
    for (let i = rows; i >= 1; i--) {
      let stars = "";
      for (let j = 1; j <= i; j++) {
        stars += "* ";
      }
      console.log(stars);
    }
  }
  
  invertedTrianglePattern(5);
  