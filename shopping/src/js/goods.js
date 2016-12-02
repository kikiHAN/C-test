
            // 商品管理

!function(window, document, $,undefined){

    var $goodsDlg = $('#goodsDlg');

    //程序入口
    var init = function(){

        bindEvent();
    };

    var bindEvent = function(){
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onsaveBtnClick);
    };

    var onsaveBtnClick = function(){
        var url = '../../../api/shopping_goods_add.php';
        var date ={
            title:$('#title').val(),
            price:$('#price').val(),
            details:$('#details').val(),
            amount:$('#amount').val(),
            classify:$('#classify').val(),
            status:$('input[name=status]:checked').val()
        };

            //表单验证？
        
        //  var index = layer.load(2,{
        //     shade:[0.2,'#ccc']
        // });
        // 

         // return;
          
       if(date.title==''){
            alert('商品不能为空！');
            // layer.msg('12');
            return false;
        };

        if(date.price==''){
            alert('价格不能为空！');
            return false;
        };

       if(date.classify==''){
            alert('商品类名不能为空！');
            return false;
       };//???

        layer.msg('加载中',{icon:16,time:0,shade:[0.2,"#000"]});


        $.get(url,date, function(response){
            if(response.success){
                $goodsDlg.modal('hide'); 
                $('#gForm').trigger('reset');  
                  layer.msg('商品添加成功！',{offset:5,shift:5});
                // alert('商品添加成功！');
                // layer.open()
            } else{
                alert('商品添加失败！');
            };
        },'json');

       


        // console.log(date);
    };


    var onNewBtnClick = function(){
          $goodsDlg.modal();
    };

      //复选框 
    





    $(document).ready(init);

}(window, document, jQuery);
