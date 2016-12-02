!function(window, document, $, undefined){

    
    function checkForm(){

            var $username=$('#username'),
                $password=$('#password'),
                $email=$('#email'),
                $mobile=$('#mobile'),
                $loBtn=$('#loBtn');

            var nubhun =/^[a-zA-Z][0-9a-zA-Z]{5,16}$/, //首字母开头字母数字组合6-10
                username = $username.val(),
                Eml = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,//邮箱
                EVl = $email.val(),
                hobbiesFlag = true;

            var mobileRegexEnum = "^[1-9]\\d*|0$",
                mobVal = $mobile.val();

                        //账号验证
                if($.trim(username).length==0){
                    alert('账号不能为空');
                    $username.focus();
                    return false;

                } else if(!nubhun.test(username)){
                    
                    alert('请输入以字母开的6~10位字母数字组合');
                    $username.focus();
                    return false;
                } /**/

                        //密码
                if($.trim($password.val()).length==0){
                    alert('密码不能为空');
                    $password.focus();
                    return false;
                }/**/

                        //邮箱
                if(!Eml.test(EVl)){
                    alert('请输入正确邮箱格式！');
                    $password.focus();
                    return false;
                }

                   // 手机
                
                if($.trim(!mobileRegexEnum.test(mobVal))){
                    alert('请输入正确手机号！');
                    $password.focus();
                    return false;
                }  
        }

    window.checkForm = checkForm;
}(window, document, jQuery)