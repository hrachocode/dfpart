import $ from 'jquery';

$('.popup-reminder-close').click(function () {
  $('.popup-reminder').toggle(0);
});

$(".all_select").click(function (element) {
  if (!$(".all_select").is(":checked"))
    $("table input").prop("checked", false);
  else
    $("table input").prop("checked", true);
});

$(document).ready(function () {
  $("#drop_1 .option").click(function () {
	var val = $(this).attr("data-value"),
      $drop = $("#drop_1"),
      prevActive = $("#drop_1 .option.active").attr("data-value"),
      options = $("#drop_1 .option").length;
    $drop.find(".option.active").addClass("mini-hack");
    $drop.removeClass("withBG");
    $(this).css("top");
    $(".mini-hack").removeClass("mini-hack");
    triggerAnimation();
    if (val !== "placeholder") {    
      if($(this).hasClass("active")){
	      if($('#results-export > #drop_1').hasClass("visible")){
		     $(this).removeClass("active");
	      }	      
      } else {
	      $(this).addClass("active");
      }
      
      
      
    } else {
	    
	    if ($('#results-export > #drop_1').hasClass("visible")) {
	    	$('#results-export > #drop_1').removeClass("opacity");
			$('#results-export > #drop_1').removeClass("visible");
		} else {
			$('#results-export > #drop_1').addClass("opacity");
			$('#results-export > #drop_1').addClass("visible");
		}
    }
  });
  
  $("#drop_2 .option").click(function () {

	var val = $(this).attr("data-value"),
      $drop = $("#drop_2"),
      prevActive = $("#drop_2 .option.active").attr("data-value"),
      options = $("#drop_2 .option").length;
    $drop.find(".option.active").addClass("mini-hack");
    $drop.removeClass("withBG");
    $(this).css("top");
    $(".mini-hack").removeClass("mini-hack");
    triggerAnimation();
    if (val !== "placeholder") {    
      if($(this).hasClass("active")){
	      if($('#results-export--expert > #drop_2').hasClass("visible")){
		     $(this).removeClass("active");
	      }	      
      } else {
	      $(this).addClass("active");
      }
    } else {
	    
	    if ($('#results-export--expert > #drop_2').hasClass("visible")) {
	    	$('#results-export--expert > #drop_2').removeClass("opacity");
			$('#results-export--expert > #drop_2').removeClass("visible");
		} else {
			$('#results-export--expert > #drop_2').addClass("opacity");
			$('#results-export--expert > #drop_2').addClass("visible");
		}
    }
  });
  
  
  
/*
  $(".drop .option").click(function () {
    var val = $(this).attr("data-value"),
      $drop = $(".drop"),
      prevActive = $(".drop .option.active").attr("data-value"),
      options = $(".drop .option").length;
    $drop.find(".option.active").addClass("mini-hack");
    $drop.toggleClass("visible");
    $drop.removeClass("withBG");
    $(this).css("top");
    $drop.toggleClass("opacity");
    $(".mini-hack").removeClass("mini-hack");
    if ($drop.hasClass("visible")) {
      setTimeout(function () {
        $drop.addClass("withBG");
      }, 400 + options * 100);
    }
    triggerAnimation();
    if (val !== "placeholder" || prevActive === "placeholder") {
      $(".drop .option").removeClass("active");
      $(this).addClass("active");
    };
  });
*/

  function triggerAnimation() {
    var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
    $(".drop").css("width", "24em");
    setTimeout(function () {
      $(".drop").css("width", finalWidth + "em");
    }, 400);
  }
});


$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function (e) {
  e.preventDefault();
  var $this = $(this),
    tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
    others = $this.closest('li').siblings().children('a'),
    target = $this.attr('href');
  others.removeClass('active');
  $this.addClass('active');
  $(tabgroup).children('div').hide();
  $(target).show();

});


$('.file-input').change(function () {
  var curElement = $(this).parent().parent().find('.image');
  var reader = new FileReader();

  reader.onload = function (e) {
    // get loaded data and render thumbnail.
    curElement.attr('src', e.target.result);
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});


function selectFilter($obj) {

  let $sel = '';
  $sel = $($obj).attr('data-src');

  if($($obj).hasClass("active")) {
    $('.'+$sel).prop('checked', false);
    $($obj).removeClass("active");
  } else {
    $('.'+$sel).prop('checked', true);
    $($obj).addClass("active");
  }
  
  //alert($sel);
}

function checkFilter($obj, $param) {
	if($($obj).prop('checked')){
		
		let $f = 0;
		
		$('.'+$param).each(function(indx){
			if(!$(this).prop('checked')){
				$f++;
			}
		});
		
		if(!$f) $('#sel_'+$param).addClass("active");
		
	} else {
		$('#sel_'+$param).removeClass("active");
	}
}