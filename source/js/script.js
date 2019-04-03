'use strict';

(function () {

  var tariff = document.querySelector('.tariff');
  var body = document.querySelector('body');

  var setPadding = function (element) {
    var width = body.clientWidth - 320;
    element.style.paddingTop = 25 + (60 / 880) * width + 'px';
  };

  setPadding(tariff);
  window.addEventListener('resize', function(evt) {
    setPadding(tariff);
  });

})();
