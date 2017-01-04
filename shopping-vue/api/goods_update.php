<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $id = $_GET['id'];
    $name = $_GET["name"];
    $price = $_GET["price"];
    $detail = $_GET["detail"];
    // $amount = $_GET["amount"];
    $classify = $_GET["classify"];
    // $status = $_GET["status"];

    // $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "name" => $name,
        "price" => $price,
        "detail" => $detail,
        // "amount" => $amount,
        "classify" => $classify,
        // "status" => $status
    );

    $db->where ('id', $id);

    sleep(1);

    if ($db->update ('goods', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>