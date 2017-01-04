<template>
	<div class="container">
		  <div class="row">
		    <div class="col-lg-6 col-sm-4">
		      <ul class="nav nav-pills" role="tablist">
		        <li><a href="JavaScript:;" v-on:click="newClassify()">新增类别</a></li>
		        <!-- <li><a href="JavaScript:;">修改商品</a></li> -->
		        <!-- <li><a href="JavaScript:;">删除商品</a></li> -->
		      </ul>
		    </div>
		    <div class="col-lg-3 col-lg-offset-3  col-sm-4 col-sm-offset-3">
		      <div class="input-group">
		        <input id="seachInpt" type="text" class="form-control">
		        <span class="input-group-btn">
		          <buttonclass="btn btn-default" type="button">搜索</button>
		        </span>
		      </div><!-- /input-group -->
		    </div><!-- /.col-lg-6 -->
		  </div><!-- /.row -->
		  <table class="table">
	  		<tr>
	  			<th class="wt-30"><input type="checkbox"></th>
		          <th class="wt-50">序号</th>
		          <th>类别名称</th>
		          <th class="wt-100">操作</th>
		    </tr>
		    <tr v-for="(list,index) in Clist">
		      <td><input type="checkbox"></td>
		      <td>{{index+1}}</td>
		      <td>{{list.name}}</td>
		      
		      <td><button type="">删除</button></td>
		  </table>

		  <nav>
		  	<ul id="page" class="pagination pull-right"> 
		        <li><a href="javascript:;">首页</a></li>
		        <li><a href="javascript:;">&laquo;</a></li>
		        <li>
		            <a href="javascript:;">1</a>
		        </li>
		         <li>
		            <a href="javascript:;">2</a>
		        </li> 
		        <li>
		            <a href="javascript:;">3</a>
		        </li>
		        <li><a href="javascript:;">&raquo;</a></li>
		        <li><a href="javascript:;">尾页</a></li>
		    </ul>
		  </nav>
		  <!--  -->
		  <model-dlg></model-dlg>
		</div>
</template>

<script>
	// import $ from 'jquery';
	import Bootstrap from 'bootstrap';
	import modelDlg from './compponents/dialog.vue';
/*/*/

	export default {

		data () {
			return {
				Clist:[]
			}
		},
		mounted () {
			this.getTable();
		
		},
		methods:{
			// 请求列表
			getTable () {
				var url = 'http://localhost/Ownhtml/C-test/shopping3/api/classify_list.php',
				// var url = 'http://localhost:8080/../api/goods_list.php',
				// var url = 'http://localhost/Ownhtml/C-test/shopping-vue/api/goods_list.php',
					that = this;
				$.get(url, {}, function(response){
					if(response.success){
						that.Clist = response.data
					} else{

					}

				},'json');
			},
			  /*点击模态框*/
			newGoods () {
				$('#goodsDlg').modal('show');
			},
			saveGoods () {
				alert(222)
				var url = "http://localhost/Ownhtml/C-test/shopping-vue/api/goods_add.php'";
				console.log(this.name)
				// data = {
				// 	name: 
				// }
			}
		},
		components:{
			modelDlg
		}
		
	} 
</script>

<style>
	.table{
			margin: 20px 0 0 0;
			border-collapse: collapse;  
	        border-spacing: 0;  
	        border-left: 1px solid #888;  
	        border-top: 1px solid #888;  
	        /*background: #efefef; */
		}
	th, td {  
        border-right: 1px solid #888;  
        border-bottom: 1px solid #888;  
        padding: 5px 15px;  
        text-align: center;
    }  
  
    th {  
        font-weight: bold;  
        /*background: #ccc;  */
    }	


	
</style>