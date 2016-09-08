$(function(){$('.collapse').collapse();
$('.carousel').carousel();});
var doc=document;
function showboxshadow(){
	var navbar=doc.getElementById('re-nav');
	window.addEventListener("scroll",function(){
		var boxOntop = document.documentElement.scrollTop || document.body.scrollTop;
  if (boxOntop == 0) {
      navbar.style.boxShadow = "none";
  } else {
      navbar.style.cssText = "-moz-box-shadow:0px 2px 10px #888888;box-shadow:0px 2px 10px #888888";
  };
	});
}
function lanTrans(){
	var English=doc.getElementById('English');
	var Chinese=doc.getElementById("Chinese");
	var tra=doc.getElementById("languagetransfer");
	Chinese.style.display="none";
		function trans(){
		

		if(English.style.display=="none")
		{
			English.style.display="block";
			Chinese.style.display="none";
			
		}
		else
		{
			Chinese.style.display="block";
			English.style.display="none";
			
		}
	}
	tra.addEventListener("click",trans);
}
function toTop(){
	    var timer=null;
	    var clientHeight=document.documentElement.clientHeight;
		var obtn=document.getElementById('re-btn');
		var isTop=true;
		window.addEventListener("scroll",function(){
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(osTop>=100)
				{
					obtn.style.display="block";
				}
				else{
					obtn.style.display="none";
				}
			if(!isTop){
				clearInterval(timer);
			}
			isTop=false;
		});
		obtn.onclick=function () {
        
		    timer=setInterval(function(){
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			var variables=Math.floor(-osTop/8);
			document.documentElement.scrollTop=document.body.scrollTop+=variables;
			isTop=true;
			if(osTop==0){
		  		clearInterval(timer);
		  	}
		  	
		   },20);
  }
}
function showMore(){
   var doc=document;
   var i;
   var imgss=doc.querySelectorAll(".re-pub-content img");
   var showbutton=doc.querySelector(".re-pub-content button");
   var detail=doc.querySelector(".re-detail");
   showbutton.addEventListener("click",function(){detail.style.display="block";showbutton.style.display="none"});
   	
}
showboxshadow();
