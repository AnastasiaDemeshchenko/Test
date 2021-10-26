
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['eng']);

$(function(){
	$("#datepicker").datepicker();
});

$(function(){
	$("#datepicker2").datepicker();
});


//list/grid

(function($) {
    $('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
    $('.list_photo').removeClass('list').addClass('grid');
    $('.grid_btn').addClass('grid_btn_active');
    $('.list_btn').removeClass('list_btn_active');
    }
    else if($(this).hasClass('list')) {
    $('.list_photo').removeClass('grid').addClass('list');
    $('.grid_btn').removeClass('grid_btn_active');
    $('.list_btn').addClass('list_btn_active');
    }
    });
    })(jQuery);
