<?php

    require_once('util/db.php');

    @$ids = $_POST['ids'];

    $ids = explode("|", $ids); 

    $ids = implode(",", $ids);

    // print_r($ids);
    // die;

    $sql = "delete from goods where id in ($ids)";

    sleep(2);

    $r = $db->doDelete($sql);

    if ($r) {
        echo json_encode(Array("success" => true, "message" => "删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "删除失败"));
    }

?>