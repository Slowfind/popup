$(document).ready(function(){
	
	var popup 				= $('.wrapper'), // модальное окно
		formLogin 			= popup.find('.popup__container-login'), //поиск формы логина
		formRegistration 	= popup.find('.popup__container-registration'), //поиск формы регистрации
		popupHeader 		= $('.popup__menu'), // header popup
		popupLogin 			= popupHeader.children('li').eq(0).children('a'), // Вход
		popupREg 			= popupHeader.children('li').eq(1).children('a'), // Регистрация
		popupOpen 			= $('.navigation'); 

		// Открытие popup

		popupOpen.on('click', function(event){
		$(event.target).is(popupOpen) && popupOpen.children('ul').toggleClass('is-active');
	});
		
		//Открытие формы входа
		
		popupOpen.on('click', '.nav-login', login_select);
		
		//Открытие формы регистрации
		
		popupOpen.on('click', '.nav-reg', reg_select);

		// Закрыть модальное окно

		popup.on('click', function(event){
		if( $(event.target).is(popup)) {
		popup.removeClass('is-visible');
		}	
	
	});
		// Закрыть при помощь "ESC"

		$(document).keyup(function(event){
    	if(event.which=='27'){
    		popup.removeClass('is-visible');
	    }
    });
		// Переход с формы входа на форму регистрации и обратно

		popupHeader.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( popupLogin ) ) ? login_select() : reg_select();
	});

		//Скрыть или показать пароль

		$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Показать' == togglePass.text() ) ? togglePass.text('Скрыть') : togglePass.text('Показать');

	});

		// Функция входа

		function login_select(){
		popupOpen.children('ul').removeClass('is-visible');
		popup.addClass('is-visible');
		formLogin.addClass('is-selected');
		formRegistration.removeClass('is-selected');
		popupLogin.addClass('active');
		popupREg.removeClass('active');
	}
		// Функция регистрации

	function reg_select(){
		popupOpen.children('ul').removeClass('is-visible');
		popup.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formRegistration.addClass('is-selected');
		popupLogin.removeClass('active');
		popupREg.addClass('active');
	}

	//Валидация e-mail
	 
	$('.e-mail').blur(function() {
	if($(this).val() != '') {
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	if(pattern.test($(this).val())){
	$(this).css({'border' : '1px solid #569b44'});
	} else {
	$(this).css({'border' : '1px solid #ff0000'});
	
	$('.error-message').text('Неправильный "E-mail." ');
	}
	} else { 
	$(this).css({'border' : '1px solid #ff0000'});
	$('.error-message').text('Поле "E-mail" не должно быть пустым.');
	}
	});

});	
