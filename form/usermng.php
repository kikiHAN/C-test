<?php
    require_once('../api/util/db.php');
    $sql = "select * from reg_login order by id desc";
    $users = $db -> rawQuery($sql);
    $index = 0;
    // print_r($users);
?>

<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>用户管理</title>
    <link href="../js/lib/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        table.table th,th.th {
            width: 100px;
            text-align: center;
        }
        table.table th.thF {
             width: 100px;
            text-align: center;
        }

        table.table td {
            text-indext:-10px;
        }
    
    </style>

  <body>
    <!-- 导航 -->
    <?php include "inc/nav.php";?>

    <div class="container">
        <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover  ">
                <tr>
                    <th class="th">序号</th>
                    <th>账号</th>
                    <th>邮箱</th>
                    <th class="th">性别</th>
                    <th class="th">学历</th>
                    <th class="thF">介绍</th>
                    <th class="thF">爱好</th>
                    <th></th>
                </tr>
        
                <?php
                    foreach ($users as $key => $value) {
                ?>

                <tr>
                    <td><?php echo ++$index; ?></td>
                    <td><?php echo $value["username"] ?></td>
                    <td><?php echo $value["email"] ?></td>
                    <td><?php echo $value["gender"] ?></td>
                    <td><?php echo $value["edu"] ?></td>
                    <td><?php echo $value["desc"] ?></td>
                    <td><?php echo $value["hobbies"] ?></td>
                    <td>
                        <button id="<?php echo $value['id']; ?>" uname="<?php echo $value["username"] ?>" class="btn btn-xs btn-danger btn-del ">删除</button>
                    </td>
                </tr>

                <?php
                  } 
                ?>
            </table>
        </div>
    </div>

    <script src="../js/lib/jquery/dist/jquery.min.js"></script>
    <script src="../js/lib/dist/js/bootstrap.min.js"></script>
    <script>

        !function(window, document, $, undefined){
            $('.btn-del').on('click',function(){

                var id = this.id,
                    uname = this.getAttribute('uname');
                // alert(99)
                if(confirm('确定要删除“'+ uname +'”吗?')){
                    location.href = '../api/reg_login_del.php?id=' + id + '&t' + new Date().getTime(); 
                }
            })

            
        }(window, document, jQuery);          

    </script>
  </body>
</html>
