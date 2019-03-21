var Calculator = (function () {
    return {
        add: function (numA, numB) {
            return numA + numB;
        },
        sub: function(numA, numB) {
            // throw new Error('not yet implemented');
            return numA - numB;
        },
        mult: function(numA, numB) {
            return numA * numB;
        },
        div: function(numA, numB) {
            if ( !this.numIsNatural(numB) )
                return -1;
                // throw new Error("divisions by zero not allowed");
            return parseFloat( (numA / numB).toFixed(2) );
        },
        numIsNatural: function(num) {
            return ( num > 0 ) ? true : false;
        },
        foo: function() {
            throw new Error("foo bar baz");
        }
    };
})();