app = {
	validate:function(){
        var name = $('#input_name').val();
        var phoneNumber = $('#input_phone').val();
        var email = $('#input_mail').val();
        var wishes = $('#comment').text();

        var errors = false;

        if (!app.validateNotEmpty(name)) {
            $('#input_name').addClass('formElError').attr('placeholder', 'Укажите ваше имя');
            errors = true;
        } else if ($('#input_name').hasClass('formElError')) {
            $('#input_name').removeClass('formElError')
        }

        if (!app.validatePhoneNumber(phoneNumber)) {
            $('#input_phone').addClass('formElError').attr('placeholder', 'Укажите ваш телефон');
            errors = true;
        } else if ($('#input_phone').hasClass('formElError')) {
            $('#input_phone').removeClass('formElError')
        }

        if (!app.validateEmail(email)) {
            $('#input_mail').addClass('formElError').attr('placeholder', 'Укажите ваш E-mail');
            errors = true;
        } else if ($('#input_mail').hasClass('formElError')) {
            $('#input_mail').removeClass('formElError')
        }

        if (!errors) {

            var msg = $('form').serialize();

            $.ajax({
                url: "mail.php",
                type: "POST",
                data: msg,
                success: function (data){
                    $('#footer_middle form').hide();
                    $('#st-successfulSend').show();
                    console.log(msg);
                },
                error: function (xhr,str)
                {
                    alert("Произошла неизвестная ошибка. Повторите попытку позже или свяжитесь с администратором.");
                }
            });
        }
    },

    validateNotEmpty: function(text) {
        return text.length
    },

    validatePhoneNumber: function(phoneNumber) {

        var re = /^[\d+| |\(|\)|\-|\+]+$/g;

        if (re.test(phoneNumber) && phoneNumber.length > 7) {
            return true;
        } else {
            return false;
        }
    },

    validateEmail: function(email) {

        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    },	
};