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

    hasValue: function(list, value) {
      return _.contains(list, value)
    },

  };
  return Foo;

})();
