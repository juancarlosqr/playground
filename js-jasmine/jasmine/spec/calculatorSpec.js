describe('Calculator library', function () {

    describe('definitions', function () {
        it("add definition", function () {
            expect(Calculator.add).toBeDefined();
        });
        it("sub definition", function () {
            expect(Calculator.sub).toBeDefined();
        });
        it("mult definition", function () {
            expect(Calculator.mult).toBeDefined();
        });
        it("div definition", function () {
            expect(Calculator.div).toBeDefined();
        });
    });

    describe('operations', function () {
        it("adds numbers", function () {
            expect(Calculator.add(12, 5)).toEqual(17);
        });

        it("subs numbers", function () {
            expect(Calculator.sub(8, 5)).toEqual(3);
        });

        it("mult numbers", function () {
            expect(Calculator.mult(9, 6)).toEqual(54);
        });

        it("numIsNatural positive values", function () {
            expect(Calculator.numIsNatural(11)).toBeTruthy();
        });

        it("numIsNatural zeros values", function () {
            expect(Calculator.numIsNatural(0)).toBeFalsy();
        });

        it("numIsNatural negative values", function () {
            expect(Calculator.numIsNatural(-2)).toBeFalsy();
        });

        it("divs exact numbers", function () {
            expect(Calculator.div(16, 4)).toEqual(4);
        });

        it("divs decimal numbers", function () {
            expect( Calculator.div(16, 7) ).toEqual(2.29);
        });

        // pending
        it("divs by zeros not allowed", function () {
            // expect( Calculator.div(1, 0) ).toThrowError( "divisions by zero not allowed" );
            expect( Calculator.div(1, 0) ).toEqual( -1 );
        });

        it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
            expect(Calculator.foo).toThrowError("foo bar baz");
            expect(Calculator.foo).toThrowError(/bar/);
            expect(Calculator.foo).toThrowError(Error);
            expect(Calculator.foo).toThrowError(Error, "foo bar baz");
        });
    });
});