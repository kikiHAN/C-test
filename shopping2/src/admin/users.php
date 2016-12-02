<?php include "inc/head.html"; ?>
<!-- nav -->
<?php include "inc/nav.php"; ?>
<!-- nav -->


<div ng-app="userAPP"  ng-controller="usersController" class="container">
    <div class="col-lg-6 col-sm-8 p-0">
      <ul class="nav nav-pills mb-20" role="tablist">
        <li class="bg-pin"><a id="newBtn"  href="javascript:;">用户列表</a></li>
        <!-- <li class="bg-pin"><a id="updateBtn" href="javascript:;">修改商品</a></li> -->
        <!-- <li class="bg-pin"><a id="delBtn" href="javascript:;">删除商品</a></li> -->
      </ul>
    </div>
    <div class="col-lg-3 col-lg-offset-3  col-sm-4 ">
        <div class="input-group">
          <input ng-model="searchTxt" id="searInp" type="text" class="form-control">
          <span class="input-group-btn">
            <button ng-click="searchBtnClick();" class="btn btn-default" type="button">搜索</button>
          </span>
        </div>
    </div>
    <table class="table table-bordered table-striped table-hover mt-20 mb-20">
        <tr>
          <th class="wt-30"><input type="checkbox"></th>
          <th class="wt-50">序号</th>
          <th>用户名</th>
          <th>邮箱</th>
          <th>手机号</th>
        </tr>
        <tr ng-repeat="user in users">
          <td><input type="checkbox" ng-click="onCkboxClick($event)"></td>
          <td>{{($index + 1)+page*size}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>{{user.mobile}}</td>
        </tr>
    </table>
    <!-- 分页 -->
    <nav>
      <ul id="page" class="pagination pull-right">
        <li ng-click="fristPage();"><a href="javascript:;">首页</a></li>
        <li ng-click="prevPage();" class="prev actv"><a href="javascript:;">&laquo;</a></li>
        <li ng-click="onJmPage();" ng-repeat="Clickpage in pageArr" ng-class="{'active':page == Clickpage}">
            <a href="javascript:;">{{$index+1}}</a>
        </li>
        <!-- ng-class="{active}:page == Cpage" -->
        <li ng-click="nextPage();" class="next actv"><a href="javascript:;">&raquo;</a></li>
        <li ng-click="lastPage();"><a href="javascript:;">尾页</a></li> 
      </ul>
    </nav>
    <!-- 分页 -->
</div>
  <!-- </div> -->
 
<script src="../js/users.js"></script>
<?php include "inc/foot.html"; ?>
