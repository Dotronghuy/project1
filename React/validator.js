function validator(options){

    function validate(inputElement, rule){
        var errorElement = inputElement.closest('.input-info_wrrapper-user').querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value);
                
        if(errorMessage){
           errorElement.innerText = errorMessage;
           errorElement.classList.add('invalid')
       }else{
           errorElement.innerText = '';
           errorElement.classList.remove('invalid')
       }
    }

    const formElement = document.querySelector(options.form);
    
    if (formElement){
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }
                inputElement.oninput = function(){
                    var errorElement = inputElement.closest('.input-info_wrrapper-user').querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    errorElement.classList.remove('invalid')
                }
            }

        })

    }


}
// rule
validator.isRequired = function(selector){
    return {
        selector : selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng điền vào mục này';
        }
    }
}
