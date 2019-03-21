describe('Testing', function () {

  describe('to disable this tests', function () { 
      xit("can be declared with 'xit'", function () {
        expect(true).toBe(false);
      });
      
      it("can be declared with 'it' but without a function");

      it("calling 'pending' in the spec body", function () {
          pending('this is why it is pending');
      });
  });

  // spies
  describe("jasmine spies", function () {
    var foo, bar = null;

    beforeEach(function () {
      foo = {
        theName: null,
        setBar: function (value) {
          bar = value;
        },
        init: function (name) {
          this.setName(name);
        },
        setName: function (name) {
          this.theName = name;
        },
        getName: function () {
          return this.theName;
        }
      };

      spyOn(foo, 'setBar');

      foo.setBar(123);
      foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function () {
      expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function () {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function () {
      expect(bar).toBeNull();
    });
  });

  describe("when a spy is configured to throw an error message", function() {
    var foo, bar;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };

      spyOn(foo, "setBar").and.throwError("wrong");
    });

    it("should throw the error message", function() {
      expect( function () {
        foo.setBar(123)
      } ).toThrowError("wrong");
    });

    // this doesnt work
    // it("throws the value", function() {
    //   expect( foo.setBar(123) ).toThrowError("quux");
    // });
  });

  // TODO: implement
  xdescribe('runs this', function () {

      beforeEach(function () {
          setFixtures(sandbox({id: 'homer'}));
          $elem = $('#homer');
      });

      it('should load json', function () {
        // var data = loadFixtures('simple.json');
        expect( $elem ).toBeInDOM();
      });
  });
});