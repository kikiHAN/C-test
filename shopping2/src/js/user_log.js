var app = angular.module('userlog',[]);

app.controller('userlogController',function($scope,$http) {

    var $classifyDlg = $('#classifyDlg'),
        $userLog = $('#userLog');


        //注册框弹框
    $scope.regBtn = function() {
        $classifyDlg.modal('show');
    };/**/

        //登录框
    $scope.logBtn = function() {
        $userLog.modal('show');
    };

        //注册
    $scope.saveUserBtn = function() {
        //???????判断用angular？？？？
        var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
                return $.param(data);
            }
        }, 
        url = '../api/user_reg.php',
        data = {
            username:$scope.username,
            realname:$scope.realname,
            password:$scope.password,
            email:$scope.email,
            mobile:$scope.mobile
        };
    //     //angular 验证
            //  用户名   
    // if($scope.userLogForm.username.$invalid){
    //     if($scope.userLogForm.username.$error.minlength){
    //         alert('长度必须大于5');
    //     }
    //     if($scope.userLogForm.username.$error.maxlength) {
    //         alert('长度必须小于15');
    //     }
    //     if($scope.userLogForm.username.$error.required){
    //         alert('用户名不能为空')
    //     }
    //     // alert('用户名填写不正确');
    //     return;
    // }
        console.log($scope.userLogForm)

            //真实姓名
    /*if($scope.userLogForm.realname.$error.required){
        alert('真实姓名不能为空');
        return;
    }
    if($scope.userLogForm.realname.$error.pattern){
        alert('真实姓名必须为汉字');
        return;
    }*/
            //邮箱
    if($scope.userLogForm.email.$error.required){
        alert('邮箱账号不能为空');
        return;
    }
    if($scope.userLogForm.email.$error.pattern){
        alert('邮箱账号填写不正确');
        return;
    }
        //手机号
    if($scope.userLogForm.mobile.$error.required){
        alert('手机账号不能为空');
        return;
    }
    if($scope.userLogForm.mobile.$error.pattern){
        alert('手机账号填写不正确');
        return;
    }

// alert('ok');
// return;
        $http.post(url, data, postCfg).success(function(response) {
            if(response.success){
                // console.log(data)
                $('#classifyDlg').modal('hide');
            };
        });
    };
  
            //登录
    $scope.userLogBtn = function() {
        var url = '../api/user_login.php';
                
            //表单验证
        
    // console.log($scope.userForm)
    console.log($scope.userForm.username)

    if($scope.userForm.username.$invalid){
        if($scope.userForm.username.$error.minlength){
            alert('长度必须大于5');
        }
        if($scope.userForm.username.$error.maxlength) {
            alert('长度必须小于15');
        }
        if($scope.userForm.username.$error.required){
            alert('用户名不能为空')
        }
        // alert('用户名填写不正确');
        return;
    }

    // if($scope.userForm.$invalid){
    //     alert('用户名填写不正确');
    //     return;
    // }
        layer.load(2);
        $http({url, method :'get',params:{username:$scope.username,password:$scope.password}}).success(function(response) {
            if(response.success){
                $userLog.modal('hide');
                var dataArr = response.data;
                // console.log(dataArr[0].type)//1/9
                if(dataArr[0].type==1){
                    location.href = 'main.html';
                } else {
                    location.href = 'admin/users.php';
                }
            } else {

            }
        });

    };


    
    });