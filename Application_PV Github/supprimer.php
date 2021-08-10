<?php
require_once 'process_files/post_db.php';

if (isset($_POST['delete']) && isset($_POST['local'])) {
    foreach ($_POST['local'] as $loc) {
        $val =  explode('--', $loc);
        $db->deleteLoc($val[0], $val[1]);
    }
}


$etablissements = $db->getEtab();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Supprimer un Local</title>
    <?php require_once 'process_files/head.php' ?>
</head>

<body class="ajouter-body">
    <div class="header">
        <a href="index.php"><button type="button" class="retour_btn btn btn-warning">
                Retour
            </button></a>
        <div class="copyright">Created By Anas Chahid 2021 - <?php echo date("Y"); ?></div>

    </div>
    <div class="ajout-form-div">
        <form action="" method="POST" class="ajout_form">
            <select class="form-select localisa2" id="local" name="local[]" aria-label="Default select example" multiple required>
                <?php foreach ($etablissements as $etab) : ?>
                    <optgroup label="<?php echo $etab['nom'] ?>">

                        <?php $locaux = $db->getLocal($etab["id_etablissement"]); ?>
                        <?php foreach ($locaux as $local) : ?>
                            <option value="<?php echo $local["id_etablissement"] . "--" . $local["local"]; ?>">
                                <?php echo $local["local"]; ?>
                            </option>
                        <?php endforeach; ?>
                    </optgroup>
                <?php endforeach; ?>
            </select>


            <button style="margin-top: 2rem;" type="submit" name="delete" class="btn btn-danger">Supprimer</button>
        </form>
    </div>
</body>

</html>