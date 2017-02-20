function listSquared(m, n) {
    var temp = 0;
    var final = [];

    for(var i = m; i <= n; i++){
      for(var x = 1; x <= i; x++){
        if(i % x === 0) temp += x*x;      //check if number is divisor of i, add to temp if it is
      }
      if(Math.sqrt(temp) % 1 === 0){      // check if square root of temp is a int
        final.push([i, temp])             // add to final array if it is
      }
      temp = 0;                           //reset the temp before each new loop
    }

    return final;
}
