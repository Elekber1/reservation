//paylasimlar
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal(); 
  });
});

//paylasim redakte
    $(document).ready(function(){
  $(".duyme12").click(function(){
    $("#post12").modal();
  });
});

    //gedenlerin siyahsi
    $(document).ready(function(){
  $(".razi12").click(function(){
    $("#razi12").modal();
  });
});
    //getmeyenlerin siyahsi
    $(document).ready(function(){
  $(".razideyil12").click(function(){
    $("#razideyil12").modal();
  });
});


//fealiyyetler redakte
    $(document).ready(function(){
  $(".duyme13").click(function(){
    $("#post13").modal();
  });
});

    //ideya ve shikayet redakte
    $(document).ready(function(){
  $(".duyme14").click(function(){
    $("#post14").modal();
  });
});
//kitabxana
function kit() {
       
       document.getElementById("videoFull").style.display = "none";
       document.getElementById("libraryFull").style.display = "block";
        // body...
    }
      function vid() {
       
       document.getElementById("videoFull").style.display = "block";
       document.getElementById("libraryFull").style.display = "none";
        // body...
    }

    //elanlar

    function e1() {
     
       document.getElementById("mezmun2full").style.display = "none";
       document.getElementById("mezmun3full").style.display = "none";
       document.getElementById("mezmun4full").style.display = "none";
       document.getElementById("mezmun1full").style.display = "block";
        // body...
    }
      function e2() {
      
       document.getElementById("mezmun1full").style.display = "none";
       document.getElementById("mezmun3full").style.display = "none";
       document.getElementById("mezmun4full").style.display = "none";
       document.getElementById("mezmun2full").style.display = "block";
        // body...
    }
     function e3() {
      
       document.getElementById("mezmun1full").style.display = "none";
       document.getElementById("mezmun2full").style.display = "none";
       document.getElementById("mezmun4full").style.display = "none";
       document.getElementById("mezmun3full").style.display = "block";
        // body...
    }
     function e4() {
      
       document.getElementById("mezmun1full").style.display = "none";
       document.getElementById("mezmun3full").style.display = "none";
       document.getElementById("mezmun2full").style.display = "none";
       document.getElementById("mezmun4full").style.display = "block";
        // body...
    }

    //idealar ve wikayetler

    function ide() {
       
       document.getElementById("wikayetlerFull").style.display = "none";
       document.getElementById("idealarFull").style.display = "block";
      
        // body...
    }
      function wik() {
      
       document.getElementById("wikayetlerFull").style.display = "block";
       document.getElementById("idealarFull").style.display = "none";
        // body...
    }

    //rezerv otagi

    $(document).ready(function(){
  $(".myBtn").click(function(){
    $("#myModal").modal();
  });
});

    	$('.js-pscroll').each(function(){
			var ps = new PerfectScrollbar(this);

			$(window).on('resize', function(){
				ps.update();
			})
		});
			

			 flatpickr(".datepicker",
      {});
			 
   const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });
$(document).ready(function(){
  $("#myrezerv").click(function(){
    $("#myModall").modal();
  });
});

