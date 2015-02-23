describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("takes a number and multiplies it by itself ", function() {
      expect( typeof bar.squared ).eq("function");
    });

  });

  describe("cubed", function() {

      it("takes a number and multiplies it by itself 3 times ", function() {
        expect( typeof bar.cubed ).eq("function");
      });

    });


});