/**
 * @param count
 *          The number of sets, these will be the rows in the matrix
 * @param high
 *          The high value for the outputs
 * @param low
 *          The low value for the outputs
 * @constructor
 */
function Equilateral( count, high, low ) {

    /**
     * The minimum number of fields to use equilateral encoding
     */
    var MIN_EQ = 3;

    var self = this;

    this.logMatrix = function( matrix ) {
        for( var i = 0; i < matrix.length; i++ ) {

            for( var j = 0; j < matrix[i].length; j++ ) {
                process.stdout.write( ''+matrix[i][j] );

                if( j < matrix[i].length -1 ){
                    process.stdout.write( ", " );
                }

            }
            process.stdout.write( "\n" );

        }
    };

    /**
     *
     * @param n
     *          The number of rows * columns - 1
     */
    var generateEmptyMatrix = function( n ) {

        var emptyMatrix = new Array( n );


        for( var i = 0; i < emptyMatrix.length; i++ ) {
            emptyMatrix[i] = new Array( n - 1 );
        }

        return emptyMatrix;

    }

    /**
     *
     * @param n
     *          The number of sets to generate for
     * @param high
     *          The high end of the range of values to generate
     * @param low
     *          The low end of the range of values to generate
     * @return One row for each set, the columns are the activations for that set
     *
     */
    var generateEquilateralMatrix = function( n, high, low ) {

        var r, f;

        var result = generateEmptyMatrix( n );

        /**
         * If we had a 2 row matrix
         */
        result[0][0] = -1;
        result[1][0] = 1;

        for( var k = 2; k < n; k++ ) {

            r = k;

            f = Math.sqrt(r * r - 1) / r;

            for( var i = 0; i < k; i++ ) {
                for( var j = 0; j < k; j++ ) {
                    result[i][j] *= f;
                }
            }

            r = -1.0 / r;
            for (var i = 0; i < k; i++) {
                result[i][k - 1] = r;
            }
            for (var i = 0; i < k - 1; i++) {
                result[k][i] = 0;
            }
            result[k][k - 1] = 1;

            for (var row = 0; row < result.length; row++) {
                for (var col = 0; col < result[0].length; col++) {
                    var min = -1;
                    var max = 1;
                    result[row][col] = ((result[row][col] - min) / (max - min)) * (high - low) + low;
                }
            }

        }

        self.logMatrix( result );

    };

    this.matrix = generateEquilateralMatrix(count, high, low);


}

var test = new Equilateral(7, -1, 1);
