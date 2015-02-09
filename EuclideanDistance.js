function euclideanDistance( vector1, vector2 ) {


    if( vector1.length != vector2.length ) {
        throw new Error('Vectors not of equal length')
    }

    var sum = 0;
    var distance;
    for( var i = 0; i < vector1.length; i++) {
        distance = vector1[i] - vector2[i];

        sum += distance * distance;

    }

    return Math.sqrt( sum );

}

console.log( euclideanDistance([0,0.5,1], [0, 0.3,1]) );