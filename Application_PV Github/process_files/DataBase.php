<?php


class DataBase
{

    private $db_name = 'locaux_db';
    private  $host = 'localhost';
    private  $password = '';
    private $username = 'root';
    private $port = '3307';
    public static Database $db;
    public \PDO $pdo;

    public function __construct()
    {

        $this->pdo = new \PDO("mysql:host=$this->host;port=$this->port;dbname=$this->db_name", "$this->username", "$this->password");
        $this->pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        self::$db = $this;
    }

    public function getEtab()
    {
        $result = $this->pdo->prepare("SELECT * FROM etablissements");

        $result->execute();
        return $result->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getLocal($id)
    {
        $result = $this->pdo->prepare(("SELECT * FROM locaux WHERE id_etablissement=$id ORDER BY local"));
        $result->execute();
        return $result->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function insertLoc($id, $local)
    {
        $ide = (int)$id;
        $result = $this->pdo->prepare("INSERT INTO locaux (local,id_etablissement) VALUES (:local,:id)");
        $result->bindValue(':local', $local);
        $result->bindValue(':id', $ide);
        $result->execute();
    }

    public function deleteLoc($id, $local)
    {
        $ide = (int)$id;
        $result = $this->pdo->prepare("DELETE FROM locaux WHERE id_etablissement=:id AND local=:loc");
        $result->bindValue(':id', $ide);
        $result->bindValue(':loc', $local);
        $result->execute();
    }
}
