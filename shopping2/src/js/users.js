var app = angular.module('userAPP', []);

app.controller('usersController', function($scope, $http) {

    // var params = {
    //     data:$scope.users,
    //     query:$scope.searchTxt,
    //     size:$scope.size,
    //     page:$scope.page
    // };
    $scope.size = 2;
    $scope.page = 0;
    $scope.showttotal = 0;
    $scope.searchTxt = '',
    $scope.baseNum = 0;
    //请求
    var getUsers = function() {
        var url = '../../api/user_list.php';

        setTimeout(layer.load(2),0);
                     
        $http({url, method :'get', params:{
            data:$scope.users,
            query:$scope.searchTxt,
            size:$scope.size,
            page:$scope.page
        }}).success(function(response){
            if(response.success){
                $scope.users = response.data;
                $scope.total = response.total;
                $scope.showttotal = Math.ceil($scope.total / $scope.size);
                $scope.pageArr = _.range($scope.showttotal);
                // $scope.baseNum = $scope.page*$scope.size;//用户序列
                // console.log($scope.showttotal)
            } else {
                $scope.users = response.data;
                layer.msg('没有配配数据',{offset:5,anim:8});
            }

                layer.closeAll('loading');
        });
    };
        getUsers();

        //搜索
    $scope.searchBtnClick = function(response) {
            // layer.load(2);
            getUsers();
        // layer.closeAll('loading');
    };

        //分页
    $scope.onJmPage = function (){
        $scope.page = this.Clickpage;
        getUsers();
        // console.log(this)
        // console.log($scope.page)
    };
         //上页
    $scope.prevPage = function() {
        $scope.page = --$scope.page;
        getUsers();
    };
        //下页
    $scope.nextPage = function() {
        $scope.page = ++$scope.page;
        getUsers();
    };

    $scope.fristPage = function() {
        $scope.page = 0;
        getUsers();
    };
    $scope.lastPage = function() {
        $scope.page = $scope.showttotal;
        getUsers();
    };



    $scope.onCkboxClick = function($event) {
        var status =$event.target.checked;   //$($event.target)jquery对象
        console.log(status)
    };
});




