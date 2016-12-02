php include "inc/head.html"; ?>
<?php include "inc/nav.php"; ?>

<!-- 主体 -->
    <div ng-app="classifyApp" ng-controller="classifyController"  class="container">
        <div class="col-lg-6 col-sm-8 p-0 ">
          <ul class="nav nav-pills mb-20" role="tablist">
            <li class="bg-pin"><a ng-click="onNewBtnClick();" href="javascript:;">新增类别</a></li>
            <li class="bg-pin"><a id="delBtn" href="javascript:;">修改类别</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-lg-offset-3  col-sm-4 ">
            <div class="input-group">
              <input ng-model="searchTxt" id="searInp" type="text" class="form-control">
              <span class="input-group-btn">
                <button ng-click= "searchBtnClick();" id="searchBtn" class="btn btn-default" type="button">搜索</button>
              </span>
            </div>
        </div>
        <!-- 表格 -->
        <table class="table table-bordered table-striped table-hover">
            <tr>
              <th class="wt-30"><input type="checkbox"></th>
              <th class="wt-50">序号</th>
              <th>类别名称</th>
              <th class="wt-100 txt-cen">操作</th>
            </tr>
            <tr ng-repeat="list in lists">
                <td><input type="checkbox"></td>
                <td>{{$index + 1}}</td>
                <td>{{list.name}}</td>
                <td style = "text-align:center;" ><button ng-click = "delClasBtnClick();" class="btn btn-danger btn-xs " type = "button">删除</button></td>
            </tr>
        </table>

    <ul id="page" class="pagination pull-right"> 
        <li ng-click="frist();"><a href="javascript:;">首页</a></li>
        <li class="prev actv"><a href="javascript:;">&laquo;</a></li>
        <li ng-click="onJmPage();" ng-repeat="Clickpage in pageArr" ng-class="{'active':page == Clickpage}">
            <a href="javascript:;">{{$index+1}}</a>
        </li>
        <!-- ng-class="{active}:page == Cpage" -->
        <li class="next actv"><a href="javascript:;">&raquo;</a></li>
        <li ng-click="last();"><a href="javascript:;">尾页</a></li>
    </ul> <!-- -->


          <!-- //弹出框 -->
    <div id="classifyDlg" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span ng-click="restClasBtn();" class="sr-only">Close</span></button>
            <h4 class="modal-title">新增类别</h4>
          </div>
          <div class="modal-body">
            <form id="resForm" class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">类别名称</label>
                <div class="col-sm-6">
                  <input ng-model="Namclassify" type="text" class="form-control" placeholder="请输入类别名称">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button ng-click="restClasBtn();" type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button ng-click="saveClasBtn();" type="button" class="btn btn-primary">保存</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>  

</div>
<!-- 主体 -->





<!-- <script src="../../js/lib/angular/angular.min.js"></script> -->
<script src="../js/classify.js"></script>

<?php include "inc/foot.html"; ?>
