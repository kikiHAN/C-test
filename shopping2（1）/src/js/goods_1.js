
            // 商品管理

!function(window, document, $,undefined){

    var $goodsDlg = $('#goodsDlg'),
        $tbody = $('#tbody');

    //程序入口
    var init = function(){

        bindEvent();

        getTableData();
    };

    var bindEvent = function(){
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onsaveBtnClick);
        $('#delBtn').on('click',ondelBtnClick);
        $('table').on('click','tbody input[type=checkbox]:checked', onChboxsClick);
    };


      //保存商品

    var onsaveBtnClick = function(){
        var url = '../../api/goods_add.php';
        var data = {
            name:$('#name').val(),
            price:$('#price').val(),
            detail:$('#detail').val(),
            amount:$('#amount').val(),
            classify:$('#classify').val(),
            // status:$('input[name=status]:checked').val()
        };

            //表单验证？
        
        //  var index = layer.load(2,{
        //     shade:[0.2,'#ccc']
        // });
        // layer.msg('加载中',{icon:16,time:0,shade:[0.2,'#000']})

         // return;
          
       if(data.name==''){
            // alert('商品不能为空！');
            layer.msg('商品不能为空！',{offset:'t',anim:6});
            return false;
        };

        if(data.price==''){
            // alert('价格不能为空！');
            layer.msg('价格不能为空！',{offset:'t',anim:6});
            return false;
        };

       if(data.classify==''){
            // alert('商品类名不能为空！');
            layer.msg('商品类名不能为空！',{offset:'t',anim:6});
            return false;
       };//???

        // layer.msg('加载中',{icon:16,time:0,shade:[0.2,"#000"]});
                layer.load(2);

          //ajax 表单提交
         
        $.post( url, data, function(response){
            // console.log(response);
            if(response.success){
                $goodsDlg.modal('hide'); 
                $('#gForm').trigger('reset');  //$('#gForm')[0].reset()
                layer.msg('商品添加成功！',{offset:5,shift:5});
                getTableData();
                // layer.open()
            } else{
                // alert('商品添加失败！');
                  layer.msg('保存失败，请重试！',{offset:5,anim:5});
            };
            layer.closeAll('loading');

        },'json');
        // console.log(data);
    };


        //商品列表
        
    var getTableData = function() { //得到商品列表

            var url = '../../api/goods_list.php';

            setTimeout(function(){
                layer.load(0);
            },0);

            // layer.msg('加载中',{icon:16,time:0,shade:[0.2,"#000"]});
                
            $.get(url, function(response) {
                // console.log(response.data)
                if(response.success){
                    renderTable(response.data);
                    layer.closeAll('loading');
                } else{

                }
            },'json')
    };

    var renderTable = function(data) {  // 把商品列表渲染到页面
        var trs = [];

        $.each(data, function(index, obj){
            trs.push(
                '<tr>',
                    '<td><input type="checkbox" /></td>',
                    '<td>',index + 1, '</td>',
                    '<td>', obj.name, '</td>',
                    '<td>￥', obj.price, '</td>',
                    '<td>', obj.detail, '</td>',
                    '<td>', obj.amount, '</td>',
                    '<td>', obj.classify, '</td>',
                '</tr>'
            );
        });

        $tbody.html(trs.join(''));

       // console.log($tbody.find('input[type=checkbox]:checked'));
       // $tbody.find('input[type=checkbox]:checked').on('click',function(){
       //  alert(2)
       // });

    };

    getTableData();
    // console.log(getTableData());

    var onNewBtnClick = function(){
          $goodsDlg.modal();
    };

      //复选框 
    
     // 删除商品

   /* var ondelBtnClick = function() {

        var $checkboxs = $('input[type=checkbox]:checked'),
            // $checkboxs = $tbody.find('input[type=checkbox]:checked'),
            len = $checkboxs.length,
            ids = [],
            url = '../../api/goods_del.php';
            console.log(len)
        if(len == 0){
            layer.msg('没有选中任何项，请重新选择！',{offset:5,anim:5});
            return;
        }

        getTableData();

        console.log($checkboxs)
        console.log(getTableData())

       $checkboxs.each(function(){
            // console.log(this.id)
            ids.push(this.id);
       });

       console.log(ids)

       $.post( url, {ids: ids.join('|')}, function(response){
                // console.log(ids)
                console.log(response)
            if(response.success){
                alert(123);
                getTableData();
            } else {
            layer.msg('删除失败，请重试！',{offset:5,anim:5});
            return;
            }
       },'json');

    };*/


    getTableData();

    $(document).ready(init);

}(window, document, jQuery);
