$(document).ready(function() {
    var $shirtBoxes = $('#shirtboxes');
    var $shirtPreview = $('.shirtPreview');
    var $menu = $('.menu1');
    var $header = $('i');


    $('#cart').hide();
    location.hash = '#home';

    function routePiece(n) {
        return location.hash.split("/")[n];
    }
    $("img").click(function() {
	//logic that makes all shirt boxes disappear
	//then makes the one that got clicked reappear
})

    function renderAlbum(album) {
        $shirtBoxes.html('');
        $menu.text(shirt.call).show();
        $header.hide();
        $shirtPreview.children('li').addClass('shirtAlone');
        $shirtPreview.find('#cart').hide();
        ///putting this in to get an album together for the one shirt
        ///without a cart.
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
        ///populating the shirt info
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
            $('h1').on('click');
        } else if (routePiece(2) === 'src') {
          ///telling the site to look for which shirt when name
           ///of shirt is clicked on
        }
    });


});
