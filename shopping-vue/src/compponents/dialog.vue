<template>
	<div class="modal fade" id="goodsDlg" >
			    <div class="modal-dialog">
			      <div class="modal-content">
			        <div class="modal-header">
			          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span id="close" class="sr-only">Close</span></button>
			          <h4 class="modal-title" id="daltit">新增商品</h4>
			        </div>
			        <div class="modal-body">
			            <form id ="gForm" class="form-horizontal">
			            <input id="ghid" type="hidden" value="0">
			              <div class="form-group">
			                <label for="title" class="col-sm-2 control-label">商品名</label>
			                <div class="col-sm-4">
			                  <input type="text" class="form-control"  placeholder="请输入商品名">
			                </div>
			              </div>
			              <div class="form-group">
			                <label class="col-sm-2 control-label">价格</label>
			                <div class="col-sm-4">
			                  <input type="text" class="form-control"  placeholder="请输入价格">
			                </div>
			              </div>
			              <div class="form-group">
			                   <label class="col-sm-2 control-label">商品介绍</label>
			                  <div class="col-sm-8">
			                   <textarea class="form-control" rows="4"></textarea>
			                  </div>
			              </div>
			              <div class="form-group">
			                  <label class="col-sm-2 control-label">库存</label>
			                  <div class="col-sm-4">
			                    <input type="text" class="form-control"  placeholder="库存">
			                  </div>
			              </div>
			              <div class="form-group">
			                  <label class="col-sm-2 control-label">类别</label>
			                  <div class="col-sm-3">
			                    <select class="form-control">
			                      <option value="0">请选择</option>
			                      <option value="电子产品">电子产品</option>
			                      <option value="食品">食品</option>
			                      <option value="生活用品">生活用品</option>
			                      <option value="图书">图书</option>
			                      <option value="服装">服装</option><!-- -->
			                    </select>
			                  </div>
			                </div>

			                <div class="form-group">
			                  <label class="col-sm-2 control-label">状态</label>
			                  <div class="col-sm-3">
			                      <label class="radio-inline">
			                        <input type="radio" name="status" value="1" checked>上架
			                      </label>
			                      <label class="radio-inline">
			                        <input type="radio" name="status"  value="0">下架
			                      </label>
			                  </div>
			                </div>
			          </form>
			        </div>
			        <div class="modal-footer">
			          <button id="def" type="button" class="btn btn-default" data-dismiss="modal" >取消</button>
			          <button v-on:click="saveGoods()" type="button" class="btn btn-primary">保存</button>
			         <!--  <button type="button" class="btn btn-primary">修改</button> -->
			        </div>
			      </div>
			    </div>
			  </div>
</template>

<script>
	// export default {

	// 	data () {
	// 		return {
	// 			glist:[]
	// 		}
	// 	},
	// 	mounted () {
		
	// 	},
	// 	methods:{
	// 		saveGoods (){
				
	// 			var url = "http://localhost/Ownhtml/C-test/shopping-vue/api/goods_add.php'";
	// 			console.log(glist)
	// 			// data = {
	// 			// 	name: 
	// 			// }
	// 		}
	// 	}
	// }

</script>




















