<?php
clearstatcache();
require_once '../process_files/pv_controller.php';
if (isset($_GET["local"])) {
    $local_cb = $_GET["local"];
}

if (isset($_GET["date"])) {
    $date_cb = $_GET["date"];
}
if (isset($date_cb) && $date_cb != '') {
    setlocale(LC_TIME, 'fr_FR.utf8', 'fra');
    $new = strftime("%A %e %B %Y", strtotime($date_cb));
}
if (isset($_GET["session"])) {
    $session_cb = $_GET["session"];
}

if (isset($_GET["etab"])) {
    $etab_cb = $_GET["etab"];
}




?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="icon" href="../images/favicon.png" />
    <title>Chemise bulle: <?php echo $etab_cb; ?></title>
</head>

<body class="cb_body">
    <div class="no-print"><button type="button" class="no-print btn btn-success" onclick="window.print()">Imprimer ou Sauvegarder PDF</button></div>
    <h1><?php foreach ($local_cb as $loc) : ?>
            <div class="document" style="padding: 3rem !important;" id="docu">
                <div class="header">
                    <div>
                        <p class="location" style="margin-top: 2rem !important; font-size: 1rem !important">Cellule cours et examens</p>

                    </div>
                    <div><img src="../images/logo.png" alt="" class="logo"></div>
                </div>
                <div class="candidats">
                    <b><?php echo $session_cb; ?></b>
                </div>
                <div class="infos_cb">
                    <div class="div_center">
                        <p>Etablissement: <b><?php echo $etab_cb; ?></b></p>
                    </div>
                    <div class="div_center">
                        <p>Local: <b><?php echo $loc; ?></b></p>
                    </div>
                    <div class="div_center">
                        <p><b><?php if (isset($new)) echo $new; ?></b></p>
                    </div>
                </div>


            </div>
        <?php endforeach; ?>
    </h1>

</body>

</html>