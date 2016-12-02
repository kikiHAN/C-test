var app = angular.module('classifyApp', []);

app.controller('classifyController', function($scope,$http){

    var $clasDlg = $('#classifyDlg');
    $scope.page = 0;
    $scope.size = 3;
    $scope.totalPage = 0;

        //新增类别
    $scope.onNewBtnClick = function(){
        $('#resForm').trigger('reset'); //dom $('#resForm')[0].reset()
        $clasDlg.modal('show');

    };
        //保存类别
    $scope.saveClasBtn = function() {
       // console.log($scope.Namclassify) 
       // 表单验证？？？
       
        var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
                return $.param(data);
            }
        }; 
        layer.load(2);
       $http.post('../../api/classify_add.php',
            {name:$scope.Namclassify},
            postCfg).success(function(response){
                if(response.success){
                    layer.msg(
                        '添加成功！',
                        {shade:0.3, anim:8,time:500}
                    ); 
                    $clasDlg.modal('hide');
                    getClasList();
                } else {
                    layer.msg(
                        '添加失败！',
                        {shade:0.3, anim:8}
                    ); 
                }
                    layer.closeAll('loading');
            });
    };


        //重置
    $scope.restClasBtn = function() {
        $('#resForm').trigger('reset');;
    };

        // 删除
    $scope.delClasBtnClick = function() {
        var id,url = '../../api/classify_del.php';

        if(!confirm('去定要删除该项吗？')){
            return;
        };

        id = this.list.id;
        layer.load(2);
        console.log(this)
        $http({ url, method:'get',params:{id:id}}).success(function(response){
            if(response.success){
                getClasList();
                layer.msg('删除成功！',{offset:5,anim:8});
            }
        });
        layer.closeAll('loading');
    };

        //搜索
    $scope.searchBtnClick = function(response) {
       // console.log($scope.lists.name) 
       console.log(response) 
            // layer.load(2);
            getClasList();
        // layer.closeAll('loading');
    };

        //分页
    $scope.onJmPage = function (){
        $scope.page = this.Clickpage;
        getClasList();
        // console.log(this)
    };

        //判断点击上下页
    
    $('#page').find('li.actv').on('click',function(){
        var $this = $(this);
           // console.log($scope.page)//点击得到当前点击页
         // console.log( $scope.totalPage)//5
        if($this.hasClass('prev')){

            if($scope.page == 0){
                $this.attr('disabled','disabled');
                return;
            }
            $scope.page = --$scope.page;
            getClasList();
            // console.log($scope.page)
        } else {
            $scope.page = ++$scope.page;//得到页数

            if($scope.page == $scope.totalPage){//判断页数与最后一页是否相等
                $this.attr('disabled','disabled');
                return;
            } 
            getClasList();
        }
            // console.log(this)
    });


       //首尾页判断
    $scope.frist = function($event){
        $scope.page = 0;
        getClasList();
        // console.log(event.target)
        // console.log($scope.page)
    };

    $scope.last = function($event){
       $scope.page = $scope.totalPage-1
        getClasList();

        // console.log(event.target);
        console.log(this)
        // console.log($scope.page)//4
        // console.log($scope.totalPage)//5
    };

        //得到类别列表
    var getClasList = function(){

        var url = '../../api/classify_list.php';
        layer.load(4);
        $http({url, method:'get',params:{query:$scope.searchTxt, size:$scope.size, page:$scope.page}}).success(function(response){
            if(response.success){
                // layer.closeAll('loading');
                $scope.lists = response.data;
                $scope.total = response.total;
                // console.log($scope.total)
                $scope.totalPage = Math.ceil($scope.total / $scope.size);
                $scope.pageArr = _.range($scope.totalPage);
                // console.log( $scope.totalPage)
            } else {
                $scope.lists = response.data;
                layer.msg('没有配配数据',{offset:5,anim:8});
            };
                layer.closeAll('loading');
        });
    };
    getClasList();

});
