function menuScroll() {
	var posiciones = [];
	var largo=0;
	var altura_del_header = $('.header').outerHeight(true);
	$( ".caja" ).each(function( index, value ) {
		if($(this).attr("id")==1){
			var alto = $('#'+$(this).attr("id")+' .menu').position().top;
		}else{
			var alto = $('#'+$(this).attr("id")+' .menu').position().top-altura_del_header;	
		}
		if($(this).attr("id")){
			var casaca = {
					id : $(this).attr("id"),
					pos0: alto,
					pos1: $('#'+$(this).attr("id")+' .wrapper').position().top,
					height1: $('#'+$(this).attr("id")+' .wrapper').height(),
					alto_fin:80,
					alto_menos:100
				};	
			posiciones[index+1]={casaca};
		}
	});

	posicionarMenu();
	$(window).scroll(function() {    
	    posicionarMenu();
	});
	function posicionarMenu() {	
		var i=0;
		$( ".caja" ).each(function( index, value ) {		
		  	var id = $(this).attr("id");
			if ($(window).scrollTop() >= posiciones[id].casaca.pos0){ 
				$('#'+posiciones[id].casaca.id+' .menu').addClass('fixed');
				//console.log("Medida de menú: ",($(window).scrollTop()-posiciones[id].casaca.pos0)/10);
				var medidaMenu = ($(window).scrollTop()-posiciones[id].casaca.pos0)/10;
				if(medidaMenu<=posiciones[id].casaca.alto_fin){
					if( $('#'+posiciones[id].casaca.id+' .menu').height()>posiciones[id].casaca.alto_fin){
						$('#'+posiciones[id].casaca.id+' .menu').height($('#'+posiciones[id].casaca.id+' .menu').height()-medidaMenu);
						$('#'+id+' .wrapper').css('margin-top', '0');
					}else{
						//$('#'+posiciones[id].casaca.id+' .menu').height(80);
					}
				}
			}
			if((parseInt(id)+1) < posiciones.length){
				var id2 = parseInt(id)+1;
			}else{
				var id2 = id;
			}
			if ($('#'+id+' .menu').offset().top > posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id)) && id!=id2){
				if(parseInt($('#'+id+' .menu').height())>=0) {
					var valto = $('#'+id+' .menu').height()-3;
					//var id3=id-1;					
					$('#'+id+' .menu').height(valto);
					console.log(" H-ID -> ",id,
								", H-ID2 -> ",id2,
								", H-Alto menu: ",$('#'+id+' .menu').height(),
								", H-Scrool -> ",$(window).scrollTop(),
								", H-Alto posiciones-alto_menos",posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2)),
								", H-valto -> ",valto,
								", H-offset -> ",$('#'+id+' .menu').offset().top);					
				}
			}else if($('#'+id2+' .menu').offset().top > posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2)) && id==id2){
				if($(window).scrollTop() >= posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2))){
					var id3=id-1;
					var valto = $('#'+id3+' .menu').height()-3;	
					if(valto>=0){				
						$('#'+id3+' .menu').height(valto);
					}else{
						$('#'+posiciones[id2].casaca.id+' .menu').addClass('fixed');
						$('#'+id2+' .menu').height($('#'+id2+' .menu').height()-3);
					}					
				}
			}
			
			if($('#'+id2+' .menu').offset().top < posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2)) && id==id2){
				if($(window).scrollTop() >= posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2))){
					var id3=id-1;
					var valto = $('#'+id3+' .menu').height()+3;	
					if(valto>=0){				
						$('#'+id3+' .menu').height(valto);
					}else{
						$('#'+posiciones[id2].casaca.id+' .menu').addClass('fixed');
						$('#'+id2+' .menu').height($('#'+id2+' .menu').height()+3);
					}					
				}
				/*console.log(" H-ID -> ",id,
								", H-ID2 -> ",id2,
								", H-Alto menu: ",$('#'+id+' .menu').height(),
								", H-Scrool -> ",$(window).scrollTop(),
								", H-Alto posiciones-alto_menos",posiciones[id2].casaca.pos0-((posiciones[id2].casaca.alto_menos*id2)),
								", H-valto -> ",valto,
								", H-offset -> ",$('#'+id+' .menu').offset().top);*/
			}
			/*if ($(window).scrollTop() >= posiciones[id2].casaca.pos0-((100*id))){
				if(parseInt($('#'+id+' .menu').height())>=0) {
					var valto = $('#'+id+' .menu').height()-3;					
					$('#'+id+' .menu').height(valto);					
					console.log(" ID -> ",id,
								", ID2 -> ",id2,
								", Alto menu: ",$('#'+id+' .menu').height(),
								", Scrool -> ",$(window).scrollTop(),
								", Alto posiciones-100*(100*id)",posiciones[id2].casaca.pos0-((100*id)),
								", valto -> ",valto,
								", position -> ",$('#'+id+' .menu').offset().top);
				}
			}*/
			/*if($(window).scrollTop() <= posiciones[id].casaca.pos0){
				console.log("Menor index -> ",index,", ID -> "+id,"ID2 -> "+id2," -> ",posiciones.length);
				if($('#'+posiciones[id].casaca.id+' .menu').hasClass('fixed')===true){
					var mediaMenu = ($('#'+posiciones[id].casaca.id+' .menu').height()+($(window).scrollTop()));
					if($('#'+posiciones[id].casaca.id+' .menu').height()<180){
						$('#'+posiciones[id].casaca.id+' .menu').addClass('fixed');
						$('#'+posiciones[id].casaca.id+' .menu').height(mediaMenu);
						//$('#'+id+' .wrapper').css('margin-top', '0');
					}else{
						$('#'+posiciones[id].casaca.id+' .menu').height(180);
						$('#'+posiciones[id].casaca.id+' .menu').removeClass('fixed');
						$('#'+posiciones[( parseInt(id)-1)].casaca.id+' .menu').addClass('fixed');	
					}
			    }
			}*/
		});
	}
}