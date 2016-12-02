
            // 商品管理

!function(window, document, $,undefined){

    "user strict";

    var $goodsDlg = $('#goodsDlg'),
        $tbody = $('#tbody'),
        $delbtn =$('#delBtn'),
        $searInp = $('#searInp'),
        cache = {},
        cacheClassify,
        params = { //参数
            query:'',
            size: 3 ,
            page: 0
        };
        // $input = $tbody.find('input[type=checbox]');
    // $checkbox.css({backgroundColor:'red'});

    // console.log($input);


    //程序入口
    var init = function(){

        bindEvent();

        getTableData();
    };

    var bindEvent = function(){
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onsaveBtnClick);
        $delbtn.on('click',ondelBtnClick);
        $('#updateBtn').on('click',onUpdaBtnClick);
        $('#searchBtn').on('click',onsearchBtnClick);
        $('#page').on('click','li[data-page]',onUpDatePage);
        $('#close').add($('#def')).on('click',onrestClick);
        $('thead input').on('click',onTheadchecked);
        $('tbody').on('click','input[type=checkbox]',onTbodychec);
        // $tbody.on('click',$input, onChboxsClick);
    };

      //保存商品

    var onsaveBtnClick = function(){
        var url = '../../api/goods_add.php';
        // var id = ('#ghid').val(id);
        var data = {
            id:$('#ghid').val(),
            name:$('#name').val(),
            price:$('#price').val(),
            detail:$('#detail').val(),
            amount:$('#amount').val(),
            classify:$('#classify').val(),
            // status:$('input[name=status]:checked').val()
        };
        var num = /^(\d*\.)?\d+$/;
       
        /*if(data.id == ''){
            url = '../../api/goods_add.php';
        } else {
            data.id = $('#ghid').val();
            url = '../../api/goods_update.php';
            // layer.msg('商品修改成功！',{offset:5,shift:5});
        };*/

        // console.log(data.id)
        // return;
        // layer.msg('加载中',{icon:16,time:0,shade:[0.2,'#000']})

       //表单验证
          
       if($.trim(data.name)==''){
            layer.msg('商品不能为空！',{offset:'t',anim:6});
            return false;
        };

        if($.trim(data.price)==''){
            layer.msg('价格不能为空！',{offset:'t',anim:6});
            return false;
        } else if(!num.test(data.price)){
            layer.msg('请输入数字！',{offset:'t',anim:6});
            return false;
        };
            

       if(data.classify==''){
            layer.msg('商品类名不能为空！',{offset:'t',anim:6});
            return false;
       };//???

        layer.load(2);

          //ajax 表单提交
          //
        // console.log(data.id)
        // return;
         
        $.post(url, data, function(response){
            // console.log(response);
            if(response.success){
                $goodsDlg.modal('hide'); 
                getTableData();
                $('#gForm').trigger('reset');  //$('#gForm')[0].reset()
                // if(data.id==''){
                //     layer.msg('商品添加成功！',{offset:5,shift:5});
                //     getTableData();
                // } else {
                //     layer.msg('商品修改成功！',{offset:5,shift:5});
                //     getTableData();
                // };
                layer.msg('商品添加成功！',{offset:5,shift:5});
                // layer.open()
            } else{
                  layer.msg('保存失败，请重试！',{offset:5,anim:5});
            };
            layer.closeAll('loading');

        },'json');

        // console.log(data);
    };

        //重置
      var onrestClick = function() {
        $('#gForm').trigger('reset');
      };
    
    // console.log(getTableData());

        //新增出模态框
    var onNewBtnClick = function(){

        $('#gForm').trigger('reset');
        $goodsDlg.find('#daltit').html('新增商品').end()
        .find('#ghid').val(0);
        layer.msg('网络慢，请稍后',{offset:5,anim:5,time:300})
        layer.load(1);
        getClassify(function(){
            // alert(2)
            $goodsDlg.modal();
            layer.closeAll('loading');
        });
        // alert(3)
    };

       //商品列表

    var getTableData = function() { //得到商品列表

            var url = '../../api/goods_list.php';

            setTimeout(function(){
                layer.load(0);
            },0);

            // layer.msg('加载中',{icon:16,time:0,shade:[0.2,"#000"]});
            $.get(url, params, function(response) {
                // console.log(response.data)
                if(response.success){
                    renderTable(response.data);
                    addPage(response.total);
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
                    '<td><input id="',obj.id, '"type="checkbox" /></td>',
                    '<td>',index + 1, '</td>',
                    '<td title="',obj.name,'">', obj.name, '</td>',
                    '<td>&yen', obj.price.toFixed(2), '</td>',
                    '<td title="', obj.detail, '">', obj.detail, '</td>',
                    '<td>', obj.amount, '</td>',
                    '<td>', obj.classify, '</td>',
                '</tr>'
            );
            cache[obj.id] = obj;
        });


        $tbody.html(trs.join(''));
        $tbody.find('td').addClass('overfTXT');
        // console.log($tbody.find('td'))//数组 
        // cache[obj.id] = obj;//??????
    };
    // getTableData();

      //复选框 
      
    var onTheadchecked = function(){
         // $('thead input[type=checkbox]:checked')
         // var CHlen = $tbody.find('input[type=checkbox]:checked').length;

        if(this.checked){ //this指向绑定的事件
            $tbody.find('input[type=checkbox]').prop('checked',true);
        } else{
            $tbody.find('input[type=checkbox]').prop('checked',false);
        }

    };

    var onTbodychec = function(){
        var len = $tbody.find('input[type=checkbox]').length,
            CHlen = $tbody.find('input[type=checkbox]:checked').length;

        if(len == CHlen){
            $('thead input').prop('checked',true);
        } else {
            $('thead input').prop('checked',false);
        }
    };

     // 删除商品

    var ondelBtnClick = function() {

        var //$checkboxs = $checked.filter('checked'),
            // $checkboxs =$tbody.find('input[type=checkbox]:checked'),
            $checkboxs =$('input[type=checkbox]:checked'),
            len = $checkboxs.length,
            ids = [],
            url = '../../api/goods_del.php';
            // console.log($tbody)
        if(len == 0){
            layer.msg('没有选中任何项，请重新选择！',{offset:5,anim:5});
            return;
        }

        // console.log($checkboxs)
      
       layer.confirm('确定要删除该商品吗？', {
            btn: ['确定', '取消'] //按钮
        },function(index){

            layer.close(index);

            $checkboxs.each(function(){
                // console.log(this.id)
                ids.push(this.id);
            });
                    // console.log(ids)

            layer.load(0);
            $.post( url, {ids: ids.join('|')}, function(response){
                     // console.log(response)
                if(response.success){
                    getTableData();
                    layer.msg('删除成功！',{offset:5,anim:8});
                } else {
                layer.msg('删除失败，请重试！',{offset:5,anim:5});
                return;
                }
            },'json');

        });
    }; 
       /**/

       //修改商品//判断复选框选择一个，其他选中的去掉选择

    var onUpdaBtnClick = function(){
        var $checkb = $tbody.find('input[type=checkbox]:checked'),
            len = $checkb.length,
            id,obj;
            // obj = cache[id];
            if(len != 1){
                layer.msg('请选择修改一个商品',{offset:5,anim:5});
                return false;
            };

            id = $checkb[0].id;
            obj = cache[id];
            // console.log(id)
            // console.log(obj)
            
            $('#name').val(obj.name);
            $('#price').val(obj.price.toFixed(2));
            $('#detail').val(obj.detail);
            $('#amount').val(obj.amount);
            $('#classify').val(obj.classify);

            $goodsDlg.find('#ghid').val(id);
            $goodsDlg.find('#daltit').text('修改商品').end().modal();
    };

       //请求商品类别
    var getClassify = function(callback) {
        var url = '../../api/classify_list.php';

        if(cacheClassify){
             getOptions(response.data);
             callback();
             return;
        };

        $.get(url, function(response) {
            if(response.success){
                // layer.load(2);
                getOptions(response.data);
                cacheClassify = response.data;
                callback();
                // alert(1)
            } else {
                layer.msg('请重试！',{offset:5,anim:5})
                // layer.load(2);
            }
        },'json')

        // layer.closeAll('loading');
    };

        //渲染类别到页面
    var getOptions = function(data) {
        var optsArr = ['<option value="0">请选择</option>'];
        $.each(data, function(index, obj){
            optsArr.push('<option>',obj.name,'</option>');
        })
       $('#classify').html(optsArr.join(''));
    };



        //搜索???输入没有对应时？？
        
    var onsearchBtnClick = function(){
        var searInp = $searInp.val();
        params.query = searInp;
        getTableData();
        // alert(params.query)
    };
        //回车事件
    $searInp.on('keydown',function(e){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {
            params.query = $(this).val();
            getTableData();
            // console.log(e)
            // console.log(params.query)
        };   
    });

        //分页点击跳转
    var onUpDatePage = function(){

       var $this = $(this),
            onPage = $this.attr('data-page');

            params.page = onPage;
            getTableData();
            // console.log(params.page)
            console.log(onPage)

    };

         //点击上下页
    $('#page').on('click','li.actv',function(){
        var $this = $(this);
        var onPage = $this.siblings('li').attr('data-page');
        console.log($this)
        // if($this.hasClass('prev')){
        //     params.page = onPage*1-1;
        //     getTableData();
        // } else {

        // }
           console.log(onPage) 

    });

        //渲染分页到页面
    var addPage = function(total){
        var pageArr = [], i, showPag ;
            
            showPag = Math.ceil(total / params.size);
            // console.log(showPag)
            // console.log(total)
            pageArr = ['<li><a href="javascript:;">首页</a></li>','<li class="prev actv"><a href="javascript:;">&laquo;</a></li>',];

            for (i=0; i<showPag; i++){
                if(params.page == i){
                    pageArr.push('<li data-page ="',i,'" class="active"><a href="javascript:;">',i+1,'</a></li>');
                } else {
                    pageArr.push('<li data-page ="',i,'"><a href="javascript:;">',i+1,'</a></li>');
                }
            }; 

            pageArr.push('<li class="next actv"><a href="javascript:;">&raquo;</a></li>','<li><a href="javascript:;">尾页</a></li>');

            $('#page').html(pageArr.join(''));
        };


    $(document).ready(init);

}(window, document, jQuery);
