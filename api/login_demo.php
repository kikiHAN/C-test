<?php

//    $username = $_GET["user"];
//    $password = $_GET["key"];
	$username = $_POST["user"];
	$password = $_POST["key"];

	if ($username == 'abc' && $password == '123123') {
		echo '<script>location.href="../form/main1.html"</script>';
	} else {
		echo '登录失败，请重试<a href="../form/login2.html">返回</a>';
	}

?>