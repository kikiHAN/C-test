<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$name = $_POST["name"];
    $price = $_POST["price"];
    $detail = $_POST["detail"];
    $amount = $_POST["amount"];
    $classify = $_POST["classify"];
    // $status = $_POST["status"];
    // $pic = $_POST["pic"];
	// $now = date("Y-m-d h:i:s");

	$data = Array (
        "name" => $name,
        "price" => $price,
        "classify" => $classify,
        // "status" => $status,
        "detail" => $detail,
        "amount" => $amount,
        // "pic" => $pic
    );

    $id = $db->insert ('goods', $data);

    sleep(1);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>