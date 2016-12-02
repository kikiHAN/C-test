var app = angular.module('userlog',[]);

app.controller('userlogController',function($scope,$http) {

    var $classifyDlg = $('#classifyDlg');


        //注册框
    $scope.regBtn = function() {
        $classifyDlg.find('#modTitl').text('用户注册').end()
        .find('#SavBtn').text('注册').end()
        .find('#logFrom #realname').add('#logFrom #email').add('#logFrom #mobile').removeClass('ds-no');;
        $classifyDlg.modal('show');
    };/**/

        //登录框
    $scope.logBtn = function() {
        //?????angular??????
        $classifyDlg.find('#modTitl').text('用户登录').end()
        .find('#SavBtn').text('登录').end()
        .find('#logFrom #realname').add('#logFrom #email').add('#logFrom #mobile').addClass('ds-no');
        $classifyDlg.modal('show');
    };

    // console.log($classifyDlg.find('#logFrom #SavBtn').text()=='注册');
    // return;

    if(!$classifyDlg.find('#logFrom #SavBtn').text('登录')){
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

            $http.post(url, data, postCfg).success(function(response) {
                if(response.success){
                    // console.log(data)
                    $('#classifyDlg').modal('hide');
                };
            });
        }
    } else {
         $scope.saveUserBtn = function() {
            var url = '../api/user_login.php',
                data = {
                    username:$scope.username,
                    realname:$scope.realname,
                };
            $http({url, method :'get', params:{data:data}}).success(function(response) {
                if(response.success){

                }
            });

        }


    };


    
    });