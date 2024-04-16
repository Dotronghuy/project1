function validator(formSelector){
    var _this = this;

    function getParent(element, selcetor){
        while(element.parentElement){
            if(element.parentElement.matches(selcetor)){
                return element.parentElement;
            }else{
                element = element.parentElement;
            }
        }



    }



    var formRules = {};
// quy ước tạo rules 
//  nếu có lỗi thì return 'error msg'
//  nếu ko có lỗi thì reuturn underfined

    var validatorRules = {
        required: function(value){
            return value ? undefined : ' Vui lòng nhập trường này';
        },
        email: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : ' Vui lòng nhập email';
        },
        min: function(min){
            return function(value){
                return value.length >=min  ? undefined : ` Vui lòng nhập ít nhất ${min} kí tự`;
            }
        },

    }

    var formElenment = document.querySelector(formSelector)
    if(formElenment){
        var inputs = formElenment.querySelectorAll('[name][rules]');
        for(var input of inputs){

            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules){
                var ruleInfor;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue){
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];
                }
                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfor[1]);
                }
                
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                }else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            
            // lắng nghe sự kiện để validator
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        function handleValidate(e){
            var rules = formRules[e.target.name];
            var errorMsg ;
            for( var rule of rules){
                errorMsg = rule(e.target.value);
                if(errorMsg) break;
            }
            // rules.some(function (rule){
            //     errorMsg = rule(e.target.value);
            //     return errorMsg;
            // });
            
            if(errorMsg){
                var formGroup = getParent(e.target, '.form-group');
                if(formGroup){
                    formGroup.classList.add('invalid');
                    var formMsg = formGroup.querySelector('.form-message');
                    if(formMsg){
                        formMsg.innerText = errorMsg;
                    }
                }
            }
            return !errorMsg;
        }
        function handleClearError(e){
            var formGroup = getParent(e.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMsg = formGroup.querySelector('.form-message');

                if(formMsg){
                    formMsg.innerText = '';
                }
            }
        }

    }
    // xử lý hành vi sumbit form
    formElenment.onsubmit = function(e){
        e.preventDefault();
        var inputs = formElenment.querySelectorAll('[name][rules]');
        var isValid = true;

        for( var input of inputs){
            if(!handleValidate({ target: input })){
                isValid = false;
            };
        }
    //    khi không có lỗi thì submitform
    if(isValid){
        if(typeof _this.onSubmit === 'function'){
            var enableInputs = formElenment.querySelectorAll('[name]');
            var formValues = Array.from(enableInputs).reduce(function (values, input ){
                switch(input.type){
                    case 'radio':
                    values[input.name] = formElenmt.querySelector('input[name="' + input.name + '"]:checked').value
                        break;                                
                    case 'checkbox':
                      if(!input.matches(':checked')) {
                        values[input.name] = '';
                        return values;
                      };

                      if(!Array.isArray(values[input.name])){
                        values[input.name] = [];
                        
                      } 
                      values[input.name].push(input.value); 
                        break;
                     case 'file':
                        values[input.name] = input.files;
                      break;
                    default:
                        values[input.name] = input.value
                        break;
                }
                return values;
            },{});
            // gọi lại hàm onsubmit và trả về kèm giá trị của form
            _this.onSubmit(formValues);
        }else{
            formElenment.submit();
        }
    }

    }
    // thực hiện ẩn hiện password
    const showPassWord = document.querySelector('.showpassword');
    const passWord = document.querySelector('#password');

    showPassWord.onclick = function(){
        if(showPassWord.checked){
            passWord.type = 'text';
        }else{
            passWord.type = 'password';
        }
    }
    

}