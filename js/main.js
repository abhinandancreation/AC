 jQuery(document).ready(function(){
     
    "use strict";
     $('#slider-carousel').carouFredSel({
         responsive:true,
         width:'100%',
         circular:true,
         scroll:{
                 items:1,
                 duration:500,
         },
         auto:true,
         items:
         {
             visible:{
                   min:1,
                   max:1
             },
             height:"variable"
         },
         pagination:{
             container:".sliderpager",
             pageAnchorBuilder:false
         }
    });
});        

	$(window).scroll(function(){
		   var top = $(window).scrollTop();
			if(top>=60){
			  $("header").addClass('secondary'); 
			}
			else 
				if($("header").hasClass('secondary')){
					$("header").removeClass('secondary');  
				};
    $('a').smoothScroll();
    $('#menu').slicknav({
      label:''
    });
});

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Your Response Has Been Submitted!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
