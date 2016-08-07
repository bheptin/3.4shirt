$(document).ready(function() {
    var $shirtBoxes = $('#shirtboxes');
    var $shirtPreview = $('.shirtPreview');
    var $menu = $('.menu1');
    var $header = $('i');


    $('#cart').hide();
    location.hash = '#home';

    function renderAlbum(album) {
        $shirtBoxes.html('');
        $menu.text(shirt.call).show();
        $header.hide();
        $shirtPreview.children('li').addClass('shirtAlone');
        $shirtPreview.find('#cart').hide();
    };

    data.forEach(function(shirt) {
        var shirt = $(
            `<div id="shirtboxes">
            <ul class="shirtPreview">
            </ul>
          </div>
          <div id="blue">
              <header><i class="fa fa-repeat" aria-hidden="true"></i></header>
              <img class="photo" src="${shirt.src}" alt="${shirt.call}">
              <ul class="menu1">
                  <li><i class="fa fa-exchange" aria-hidden="true"></i></li>
                  <li><i class="fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><a>XL</a>
                      <ul id="sizechart1">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                      </ul>
                  </li>
                  <li><a style="color:#81bce6">&#9608;</a>
                      <ul id="colorbox1">
                          <li>#81bce6</li>
                          <li>#e5b178</li>
                          <li>#7abe93</li>
                          <li>#e577aa</li>
                      </ul>
                  </li>
                  <li><i class="fa fa-shopping-cart" aria-hidden="true"></i></li>

              </ul>

              <div id="text1">
                  <h1>${shirt.name}</h1>
                  <h2><b>${shirt.price}</b></h2>
                  </div>
            </div>
        </div>`
        );
        $shirtBoxes.append(shirt);
    });

    function $shirtPreview() {
        var shirt = data[Number - 1];
        $('button').hide();
        $shirtPreview.show();
    }
    $(window).on('hashchange', function() {
        var index = routePiece(1);
        if (routePiece(2) !== 'image' && location.hash !== '#home') {
            shirtPreview(index);
            $('.shirtPreview li').on('click');
        } else if (routePiece(2) === 'src') {

        }
    });

    function routePiece(n) {
        return location.hash.split("/")[n];
    }

});
