<?php

require_once 'DataBase.php';
$db = new DataBase();


function file_insert($name, $id)
{
    global $db;
    $file = fopen($name, "r");

    while (($data = fgetcsv($file, 1000, ",")) !== FALSE) {
        $db->insertLoc($id, $data[0]);
    }
    fclose($file);
}

//file_insert('Book.csv', 3);
