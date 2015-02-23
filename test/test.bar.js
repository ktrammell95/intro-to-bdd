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

  


});