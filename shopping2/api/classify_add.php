<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

    $name = $_POST["name"];
    // $now = date("Y-m-d h:i:s");

    $data = Array (
        "name" => $name
    );

    $id = $db->insert ('classify', $data);

    sleep(1);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>