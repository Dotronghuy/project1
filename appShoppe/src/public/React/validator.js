function validator(options) {

    function validate(inputElement, rule) {
        var errorElement = inputElement.closest('.input-info_wrrapper-user').querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.classList.add('invalid')
        } else {
            errorElement.innerText = '';
            errorElement.classList.remove('invalid')
        }
    }

    const formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                inputElement.oninput = function () {
                    validate(inputElement, rule);
                }
            }

        })

    }


}
// rule
validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return value.trim() ? undefined : 'Vui lòng nhập email ';
        }
    }
}
validator.isPasswordValid = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= 6 ? undefined : 'Mật khẩu tối thiểu có 6 ký tự';
        }
    }
};
validator.isEmailValid = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(value) ? undefined : 'Vui lòng nhập địa chỉ email hợp lệ';
        }
    };
};