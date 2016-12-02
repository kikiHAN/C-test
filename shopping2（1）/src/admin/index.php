
<?php include "inc/head.html"; ?>
<?php include "inc/nav.php"; ?>
    

<!-- 页面主体 -->

<!--  -->
  <div class="container">
    <div class="col-lg-6 col-sm-8 ">
      <ul class="nav nav-pills" role="tablist">
        <li class="active"><a id="newBtn"  href="javascript:;">新增商品</a></li>
        <li><a href="javascript:;">修改商品</a></li>
        <li><a id="delBtn" href="javascript:;">删除商品</a></li>
      </ul>
    </div>
    <div class="col-lg-3 col-lg-offset-3  col-sm-4 ">
        <div class="input-group">
          <input type="text" class="form-control">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
          </span>
        </div>
    </div>
  </div>
  <!-- </div> -->
  <div class="container">
    <table class="table table-bordered table-striped table-hover mt-20 mb-20">
      <thead>
        <tr>
          <th class="wt-30"><input type="checkbox"></th>
          <th class="wt-50">序号</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>介绍</th>
          <th>库存</th>
          <th>类别</th>
        </tr>
      </thead>
      <tbody id = "tbody">
        <!-- <tr>
          <td><input type="checkbox"></td>
          <td>1</td>
          <td>iphon7</td>
          <td>5000</td>
          <td>苹果7</td>
          <td>100</td>
          <td>电子产品</td>
        </tr> -->
      </tbody>
    </table>

    <!-- 分页 -->
    <nav>
      <ul class="pagination pull-right"> 
        <li class="disabled"><a href="javascript:;">&laquo;</a></li>
        <li class="active"><a href="javascript:;">1</a></li>
        <li><a href="javascript:;">2</a></li>
        <li><a href="javascript:;">3</a></li>
        <li><a href="javascript:;">4</a></li>
        <li><a href="javascript:;">5</a></li>
        <li><a href="javascript:;">&raquo;</a></li>
      </ul>
    </nav>
  </div>

  <!-- 弹出框 -->

  <div class="modal fade" id="goodsDlg" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title" id="myModalLabel">新增商品</h4>
        </div>
        <div class="modal-body">
            <form id ="gForm" class="form-horizontal">
              <div class="form-group">
                <label for="title" class="col-sm-2 control-label">商品名</label>
                <div class="col-sm-4">
                  <input id="name" type="email" class="form-control"  placeholder="请输入商品名">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">价格</label>
                <div class="col-sm-4">
                  <input id="price" type="text" class="form-control"  placeholder="请输入价格">
                </div>
              </div>
              <div class="form-group">
                   <label class="col-sm-2 control-label">商品介绍</label>
                  <div class="col-sm-8">
                   <textarea  id="detail" class="form-control" rows="4"></textarea>
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-sm-2 control-label">库存</label>
                  <div class="col-sm-4">
                    <input id="amount" type="text" class="form-control"  placeholder="库存">
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-sm-2 control-label">类别</label>
                  <div class="col-sm-3">
                    <select name="" id="classify" class="form-control">
                      <option id="ch1" value="电子产品">电子产品</option>
                      <option id="ch2" value="食品">食品</option>
                      <option id="ch3" value="生活用品">生活用品</option>
                      <option id="ch4" value="图书">图书</option>
                      <option id="ch5" value="服装">服装</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="" class="col-sm-2 control-label">状态</label>
                  <div class="col-sm-3">
                      <lable class="radio-inline">
                        <input type="radio" name="status" id="inlineRadio1" value="1" checked>上架
                      </lable>
                      <lable class="radio-inline">
                        <input type="radio" name="status" id="inlineRadio2" value="0">下架
                      </lable>
                  </div>
                </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" >取消</button>
          <button id="saveBtn" type="button" class="btn btn-primary">保存</button>
        </div>
      </div>
    </div>
  </div>


    <!-- js -->
    <script src="../js/goods.js"></script>

<?php include "inc/foot.html"; ?>

 