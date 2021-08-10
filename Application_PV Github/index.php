<?php
clearstatcache();
require_once 'process_files/post_db.php';

$etablissements = $db->getEtab();


setlocale(LC_TIME, 'fr_FR.utf8', 'fra');

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Création de PV</title>
  <?php require_once 'process_files/head.php' ?>
</head>

<body class="form-body">

  <div class="form_logo">
    <img class="logo_image" src="images/title_blanc.png" alt="">
    <img class="logo_image" src="images/slider.png" alt="">
  </div>
  <div class="form__title">

    <h1 class="title">Création de Procès Verbal d'examens</h1>
  </div>
  <div class="form">
    <div class="left-side">
      <form action="pv.php" method="POST">


        <div class="mb-3">
          <label for="annee" class="form-label">Année Universitaire:</label>
          <input class="form-control" name="annee" id="annee" type="text" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Session:</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="examen" name="session" id="session" onclick="disable('2')" />
            <label class="form-check-label" for="session"> Examens </label>
            <div class="mb-3">
              <select class="form-select" id="session_select" name="session_date" aria-label="Default select example" onchange="addyear()">
                <option value="" disabled selected>Session:</option>
                <option value="1S-1Q">1S-1Q</option>
                <option value="1S-2Q">1S-2Q</option>
                <option value="2S-1Q">2S-1Q</option>
                <option value="2S-2Q">2S-2Q</option>
              </select>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="concours" name="session" id="concours" onclick="disable('1')" />
            <label class="form-check-label" for="concours">
              Concours d'accès
            </label>
          </div>
        </div>




        <div class="mb-3" id="anneec">
          <label for="anneec2" class="form-label">Niveau:</label>
          <select class="form-select" id="anneec2" name="anneec2" required aria-label="Default select example" onchange="javascript: dropdown(this.options[this.selectedIndex].value);">
            <option disabled>Niveau</option>
          </select>
        </div>


        <div class="mb-3" id="">
          <label for="module2" class="form-label">Module:</label>
          <select class="form-select" id="module2" name="module" aria-label="Default select example" required>
            <option disabled>Module</option>

          </select>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label class="form-check-label" for="flexSwitchCheckDefault">Date</label>
          <div class="mb-3">
            <input id="date-field" class="form-control date" name="date" type="date" />
          </div>
        </div>
    </div>
    <div class="right-side">
      <div class="mb-3">
        <label for="local" class="form-label">Local:</label>


        <select class="form-select localisa" id="local" name="local[]" aria-label="Default select example" multiple required>
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




        <div class="local_handle">

          <div>
            <span class="ico material-icons" style="color: white;" onclick="alert('Appuyer sur CTRL puis cliquer pour séléctionner plusieur locaux.')">
              help
            </span>
            <button type="button" onclick="select_All()" class="btn btn-success btn-sm">Sélectionner tout </button>
          </div>
          <div>
            <a href="ajouter.php"><button type="button" name="confirmer" class="crud_handle btn btn-primary btn-sm">Ajouter un local</button></a>
            <a href="supprimer.php"><button type="button" name="confirmer" class="crud_handle btn btn-danger btn-sm">Supprimer un local</button></a>
          </div>
        </div>


      </div>

      <div class="mb-3">
        <label for="nbre-candidats" class="form-label">Nombre de candidats total:</label>
        <input class="form-control" id="nbre-candidats" name="nbre_cand" type="number" step="1" min="0" />
      </div>

      <button type="submit" name="confirmer" class="confirm btn btn-success">Confirmer</button>
    </div>
    </form>

  </div>
  <div class="copyright">Created By Anas Chahid 2021 - <?php echo date("Y"); ?></div>
</body>
<script src="main.js"></script>

</html>