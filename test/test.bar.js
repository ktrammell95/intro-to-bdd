describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("takes a number and multiplies it by itself ", function() {
      expect( bar.squared(4) ).eq(16);
    });

  });

  describe("cubed", function() {

      it("takes a number and multiplies it by itself 3 times ", function() {
        expect( bar.cubed(2) ).eq(8);
      });

  });

  describe("exponentOf", function() {

      it("multiplies number to itself by number of times for exponent", function() {
      var exponentOf2 = bar.exponentOf(2);
      expect( exponentOf2(4) ).eq(16);
    });

  });

  describe("reverseString", function() {

    it("takes a string and reverses the letters", function() {
        expect( bar.reverseString("thank you") ).eq("uoy knaht");

      });
 });

  describe("cipher", function() {

    it("takes a string and returns characters", function() {
        expect( bar.cipher("Katherine") ).eq("¯ÅØÌÉÖÍÒÉ");

      });
 });

  describe("decipher", function() {

    it("takes a string of characters and returns a string you can read", function() {
        expect( bar.decipher("¯ÅØÌÉÖÍÒÉ") ).eq("Katherine");

      });
 });


});

