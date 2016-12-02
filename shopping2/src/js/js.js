
            // 商品管理

!function(window, document, $,undefined){

    //程序入口
    var init = function(){

        bindEvent();
    };

    var bindEvent = function(){
        $('#goodsDlg').on('click',onNewBtnClick);
    };

    var onNewBtnClick = function(){
        $('#goodsDlg').modal('show')
    };




    $(document).ready(init);

}(window, document, jQuery)
