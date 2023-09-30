<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$dbname = "../../rdc.sqlite";

$pdo = new PDO("sqlite:" . $dbname);
$stmt = $pdo->prepare("SELECT * FROM youtubeLinks");
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);
