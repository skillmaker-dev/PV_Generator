<?php
require_once 'process_files/post_db.php';

if (isset($local) && isset($etab)) {
  $db->insertLoc($etab, $local);
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Ajouter un Local</title>
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
      <div class="mb-3" id="">
        <label for="etablissement" class="form-label">Etablissement:</label>
        <select class="form-select" id="etablissement" name="etablissement" aria-label="Default select example" required>
          <option disabled selected>Etablissement</option>
          <option value="1">Faculté de Médecine et de Pharmacie d’Oujda</option>
          <option value="6">Faculté des Sciences d'Oujda</option>
          <option value="3">Faculté Pluridisciplinaire de Nador</option>
          <option value="7">Faculté des Lettres et des Sciences Humaines d'Oujda</option>
          <option value="8">Faculté des sciences juridiques, économiques et sociales d'Oujda</option>
          <option value="2">École Nationale des Sciences Appliquées d'Oujda</option>
          <option value="5">École nationale de commerce et de gestion d'Oujda</option>
          <option value="4">École Supérieure de Technologie d'Oujda</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="local" class="form-label">Local:</label>
        <input type="text" name="local" class="form-control" id="local" required />
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>

</body>

</html>