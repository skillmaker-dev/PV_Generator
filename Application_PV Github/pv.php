<?php
clearstatcache();
require_once 'process_files/pv_controller.php';

$date_cb = "";
if (isset($date)) {
    $date_cb = $date;
    setlocale(LC_TIME, 'fr_FR.utf8', 'fra');
    setlocale(LC_TIME, 'fr_FR.utf8', 'french');
    $new = strftime("%A %e %B %Y", strtotime($date));
} else {
    $date_cb = str_repeat('&nbsp;', 20);
}
$sess_cb = session_cb();
function chemise_bulle()
{

    global $local, $sess_cb, $date_cb;
    $str = "&local=";
    for ($i = 0; $i < count($local); $i++) {
        $classe = explode('--', $local[$i]);

        $j = $i + 1;
        $local_undefined = $local[$j] ?? null;
        $classe_up = explode('--', $local_undefined);
        $str = $str . "&local[]=" . $classe[1];



        if (locals($classe[0]) != locals($classe_up[0])) {
            $etab = locals($classe[0]);
            $local_names = $str;
            $local_names = substr($local_names, 1);
            $str = "&local=";


            echo "<script type=\"text/javascript\">
            window.open('locaux/cb.php?local=" . $local_names . "&session=" . $sess_cb . "&etab=" . $etab . "&date=" . $date_cb . "', '_blank');
            
            </script>";

            // echo $etab . "   " . $local_names;
            // echo '<br/>';
        }
    }
}

chemise_bulle();

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Procès verbal</title>
    <?php require_once 'process_files/head.php' ?>
</head>

<body class="pv-body">
    <button type="button" class="no-print btn btn-success" onclick="window.print()">Imprimer ou Sauvegarder PDF</button>

    <?php if (isset($local)) foreach ($local as $loc) : ?>
        <?php $val = explode('--', $loc); ?>
        <div class="document breaker" id="docu">
            <div class="header">
                <div>
                    <p class="location">Royaume du Maroc</p>
                    <p class="location">Université Mohammed Premier</p>
                    <p class="location">Faculté de Médecine et de Pharmacie - Oujda</p>
                </div>
                <div><img src="images/logo.png" alt="" class="logo"></div>
            </div>
            <div class="sub-header">
                <p class="cellule">Cellule cours et examens</p>

                <p class="date_d"><u>Oujda; le</u> <?php if (isset($date)) {
                                                        echo $new;
                                                    } else echo str_repeat('&nbsp;', 20); ?></p>

            </div>

            <div class="doc-title">
                <u>
                    <h1 class="proces">PROCÈS VERBAL</h1>
                </u>
                <u>
                    <p class="session"><?php session_pv(); ?></p>
                </u>

            </div>

            <div class="head">
                <b>
                    <p>Le président du jury a ouvert le pli renfermant les sujets de l'épreuve publiquement et en présence des candidats ainsi que des membres du jury. Il a solennellement déclaré l'examen ouvert selon la régelementation en vigueur.</p>
                </b>
                <div class="exam-infos">
                    <div class="infos">
                        <span class="local">Local: <?php if (isset($loc)) {
                                                        echo locals($val[0]);
                                                        echo '  ';
                                                        echo $val[1];
                                                    } ?></span>
                        <?php if ($validate == false) : ?>
                            <span id="module_to_remove" class="module">Module (Epreuve): <?php if (isset($module)) {
                                                                                                echo $module;
                                                                                            } ?></span>
                        <?php else : ?>
                            <span style="visibility: hidden;" id="module_to_remove" class="module">Module (Epreuve): <?php if (isset($module)) {
                                                                                                                            echo $module;
                                                                                                                        } ?></span>



                        <?php endif; ?>
                        <span class="nombre">Nombre de candidats total: <?php if (isset($nbre_cand)) {
                                                                            if ($nbre_cand != 0) {
                                                                                echo $nbre_cand;
                                                                            } else {
                                                                                echo str_repeat('&nbsp;', 8);
                                                                            }
                                                                        } ?></span>
                    </div>
                    <div class="dates">
                        <p class="date">Durée de l'épreuve: .......................</p>
                        <p class="date">Début de l'épreuve: .......................</p>
                        <span class="nbre-span">Nombre de candidats Absents: ................</span>
                    </div>
                </div>
            </div>
            <div class="area-title"><u>
                    <p>Observations sur le déroulement de l'épreuve (Incident, Fraude, etc ...) :</p>
                </u></div>
            <div class="text-area">
                <p>..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            </div>
            <div class="table-title"><u>
                    <p>Nom, prénom et signature des surveillants :</p>
                </u></div>
            <?php if ($validate == false) : ?>
                <div class="table1">
                    <div class="top-left">Professeurs</div>
                    <div class="top-right">Administrateurs</div>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                </div>
            <?php else : ?>
                <div class="table2">
                    <div class="top-left2">Professeurs</div>
                    <div class="top-middle">Administrateurs</div>
                    <div class="top-right2">Résidents</div>
                    <div class="bottom-left2"></div>
                    <div class="bottom-middle"></div>
                    <div class="bottom-right2"></div>
                </div>
            <?php endif; ?>
        </div>

        <!--Second page-->

        <div class="document3" id="docu">
            <div class="header">
                <div>
                    <p class="location">Royaume du Maroc</p>
                    <p class="location">Université Mohammed Premier</p>
                    <p class="location">Faculté de Médecine et de Pharmacie - Oujda</p>
                    <p class="session_back"><?php if (isset($loc)) {
                                                echo locals($val[0]);
                                                echo '  ';
                                                echo $val[1];
                                            }
                                            echo " --";
                                            session_pv();
                                            ?></p>
                </div>
                <div><img src="images/logo.png" alt="" class="logo"></div>
            </div>
            <div class="candidats">
                <b>Candidats absents :</b>

            </div>
            <div class="abs_table">
                <div class="rows main">

                    <div class="nb_places"><b><u>N° Place</u></b></div>


                    <div class="nom_prenom"><b><u>Nom et Prenom</u></b></div>

                </div>
                <?php for ($i = 0; $i < 32; $i++) : ?>
                    <div class="rows">
                        <div class="nb_places"></div>
                        <div class="nom_prenom"></div>
                    </div>
                <?php endfor; ?>
            </div>
        </div>





    <?php endforeach; ?>

</body>

</html>