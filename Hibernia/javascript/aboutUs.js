function confirm_reset(){
  return confirm("Please confirm you want to reset the page");
}

$(document).ready(function() {
  $('.nameError').hide();
  $('.emailError').hide();
  
  $('#Send').click(function(){
    var name = $('#name').val();
    var email = $('#email').val();
	
    if(name == ""){
		$('.nameError').show();
      return false;
    } else {
		$('.nameError').hide();
	}
	
    if(email == ''){
      $('.emailError').show();
      return false;
    }
    if(IsEmail(email)==false){
      $('.emailError').show();
      return false;
    } else {
		$('.emailError').hide();
	}
    $.post("", $("#myform").serialize(),  function(response) {
      $('#myform').fadeOut('slow',function(){
      $('#correct').html(response);
      $('#correct').fadeIn('slow');
   });
 });
return false;
});
});
function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!regex.test(email)) {
return false;
}else{
return true;
}
}

