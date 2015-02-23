window.Foo = (function() {

  function Foo() {

  }

  Foo.prototype = {
    plusOne: function(num) {
      return num += 1;
    },
    sortArray: function(array) {
      return _.sortBy(array)
    }, 


  };
  return Foo;

})();
