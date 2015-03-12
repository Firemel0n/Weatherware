var main = function(){

  $(function(){
    $("#site").cycle({
        fx : "scrollHorz",
        next : ".next a",
        prev : ".prev a",
        startingSlide : 1,
        timeout : 0
    });
  });

   /* Scroll "Forecast" and
  "What to Wear" simultaneously. */
  $('.main-content').synchronizeScroll(); 
};

jQuery.fn.synchronizeScroll = function() {
  var elements = this;
  if (elements.length <= 1) return;

  elements.scroll(
  function() {
    var left = $(this).scrollLeft();
    elements.each(function() {
        if ($(this).scrollLeft() != left) $(this).scrollLeft(left);
    });
  });
};

$(document).ready(main);

$(document).ready(function(){
          var button = $("button");
      $('button').click(function(){
        button.text(button.data("text-swap"));
      });

     $("input:checkbox").on('click', function(){
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });
});

$('#make_url').click(function(e) {
    e.preventDefault();
    var url = $('#linha').val();
    open(url, '_self');
});

$(".forecast").click(function(){
        woopra.track("forecast_click");
});
