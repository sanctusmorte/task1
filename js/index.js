$(document).ready(function(){
	$('.button_call').on('click', function(){
		$('.modal').show().css('opacity', '1');	
	});

	$('.item_logo_button').on('click', function(){
		$('.modal').show().css('opacity', '1');	
	});	

	$('.phone_icon').on('click', function(){
		$('.modal').show().css('opacity', '1');	
	});	

	$('.button_close').on('click', function(){
		$('.modal').hide().css('opacity', '0');	
	});

	$('.icon_close').on('click', function(){
		$('.modal').hide().css('opacity', '0');	
	});

	$('.custom-toggler').click(function(){
		$('.top_menu_container').show();
	});

	$('.contacts_icon').click(function(){
		$('.contancts_container').show();
	});

	$('.custom-toggler_2').click(function(){
		$('.bottom_menu_container').show();
	});	

	$('.bottom_menu_title').click(function(){
		$('.linolium_container').show();
		$('.bottom_menu_title a').css('color', 'rgb(255, 102, 51)');
		$('.bottom_menu_title').css('border-bottom', '1px solid rgb(255, 102, 51)');
		$('.bottom_menu_title a').css('font-weight', 'bold');
	});	


	$('.bottom_menu_title_2').click(function(){
		$('.laminat_container').show();
		$('.bottom_menu_title_2 a').css('color', 'rgb(255, 102, 51)');
		$('.bottom_menu_title_2').css('border-bottom', '1px solid rgb(255, 102, 51)');
		$('.bottom_menu_title_2 a').css('font-weight', 'bold');
	});		

	$('#extra_lin').click(function(){
		$('.linoleum_extra_menu').show();
	});	

	$('#extra_lam').click(function(){
		$('.laminat_extra_menu').show();
	});	


	$(document).mouseup(function (e) {
        var container = $(".linoleum_extra_menu");
        if (container.has(e.target).length === 0){
			container.hide();
        }	
    });    	

	$(document).mouseup(function (e) {
        var container = $(".laminat_extra_menu");
        if (container.has(e.target).length === 0){
			container.hide();
        }	
    });        


	$(document).mouseup(function (e) {
        var container = $(".linolium_container");
        if (container.has(e.target).length === 0){
			container.hide();
			$('.bottom_menu_title a').css('color', 'black');
			$('.bottom_menu_title').css('border-bottom', '1px solid black');
			$('.bottom_menu_title a').css('font-weight', 'normal');
        }	
    });

	$(document).mouseup(function (e) {
        var container = $(".laminat_container");
        if (container.has(e.target).length === 0){
			container.hide();
			$('.bottom_menu_title_2 a').css('color', 'black');
			$('.bottom_menu_title_2').css('border-bottom', '1px solid black');
			$('.bottom_menu_title_2 a').css('font-weight', 'normal');
        }	
    });

	$(document).mouseup(function (e) {
        var container = $(".top_menu_container");
        if (container.has(e.target).length === 0){
			container.hide();
        }	
    });

	$(document).mouseup(function (e) {
        var container = $(".contancts_container");
        if (container.has(e.target).length === 0){
			container.hide();
        }	
    });    

	$(document).mouseup(function (e) {
        var container = $(".bottom_menu_container");
        if (container.has(e.target).length === 0){
			container.hide();
        }	
    });      

    $('.carousel').carousel({
  		interval: 20000
	});

});