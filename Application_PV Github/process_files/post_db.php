<?php
if (isset($_POST["local"]) && isset($_POST["etablissement"])) {
    $local = $_POST["local"];
    $etab = $_POST["etablissement"];
}
require_once 'process_files/DataBase.php';
$db = new DataBase();
