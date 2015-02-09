function chebyshevDistance( vector1, vector2 ) {

    if( vector1.length != vector2.length ) {
        throw new Error('Vectors not of equal length')
    }

    var result = 0;
    var distance;

    for( var i = 0; i < vector1.length; i++) {

        distance = Math.abs( vector1[i] - vector2[i] );

        result = Math.max(result, distance);

    }

    return result;

}

console.log( chebyshevDistance([0.4,0.5,1], [0, 0.8,1]) );


