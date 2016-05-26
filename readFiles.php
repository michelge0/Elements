<?php
	header("Access-Control-Allow-Origin: *");

	$elements = ["poetry", "code", "prose"];
	$result = [];
	for ($i = 0; $i < count($elements); $i++) {
		$id = 0;
		$result[$elements[$i]] = [];
		while (file_exists("writing/".$elements[$i]."$id.txt")) {
			array_push($result[$elements[$i]], nl2br(file_get_contents("writing/".$elements[$i]."$id.txt")));
			$id++;
		}
	}
	echo json_encode($result);
?>