function BoxMuller() {

    this.useLast = false;

    this.y1 = 0;
    this.y2 = 0;

}

BoxMuller.prototype.generate = function() {

    var x1, x2, w;

    if( this.useLast ){
        this.y1 = this.y2;
        this.useLast = false;
    } else {

        do {
            x1 = 2 * Math.random() - 1;
            x2 = 2 * Math.random() - 1;
            w = x1 * x1 + x2 * x2;

        } while ( w >= 1 );

        this.y1 = x1 * w;
        this.y2 = x2 * w;

        this.useLast = true;

    }

    return this.y1;

};

var bm = new BoxMuller();

console.log( bm.generate() );
console.log( bm.generate() );
