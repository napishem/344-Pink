

(function() {
var plus = document.querySelectorAll(".plus");
  var minus = document.querySelectorAll(".minus");

  for(var i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var numb = this.parentNode.querySelector(".counter-input");

      var val =  (parseInt(numb.value) + 1);

      if (isNaN(val)) {
        val = 0;
      }

      numb.value =  val;

    })
  };

  for(var i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var numb = this.parentNode.querySelector(".counter-input");
      var val = (parseInt(numb.value) - 1);

      if (val < 0 || isNaN(val)) {
      val = 0;
      }

      if (numb === this.parentNode.querySelector(".children-count")) {
        if (val < 1 || isNaN(val)) {
        val = 1;
      }
}

      numb.value =  val;

    })
  };
})();
