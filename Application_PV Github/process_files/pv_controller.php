<?php

if (isset($_POST["local"])) {
    $local =  $_POST["local"];
}
if (isset($_POST["module"])) {
    $module = $_POST["module"];
}
if (isset($_POST["nbre_cand"])) {
    $nbre_cand = $_POST["nbre_cand"];
}
if (isset($_POST["annee"])) {
    $annee_univ =  $_POST["annee"];
}

if (isset($_POST["session"])) {
    $session = $_POST["session"];
}
if (isset($_POST["session_date"])) {
    $date_sess = $_POST["session_date"];
}
if (isset($_POST["date"])) {
    $date = $_POST["date"];
}
if (isset($_POST["anneec2"])) {
    $niveau = $_POST["anneec2"];
}

$validate = false;

function session_pv()
{
    global $session, $date_sess, $annee_univ, $niveau, $validate;
    if (isset($session)) {
        if ($session == 'examen') {
            if (isset($date_sess) && isset($annee_univ) || isset($niveau)) {
                echo " Examens " . $date_sess . " " . $annee_univ . "  " . $niveau;
            }
        } else {
            if (isset($annee_univ)) {
                echo " Concours d'accès à la FMPO " . $annee_univ;
                $validate = true;
            }
        }
    }
}


function session_cb()
{
    global $session, $date_sess, $annee_univ, $niveau;
    if (isset($session)) {
        if ($session == 'examen') {
            if (isset($date_sess) && isset($annee_univ) || isset($niveau)) {
                return " Examens " . $date_sess . " " . $annee_univ . "  " . $niveau;
            }
        } else {
            if (isset($annee_univ)) {
                return " Concours d\'accès à la FMPO " . $annee_univ;
            }
        }
    }
}






function locals($id_local)
{
    switch ($id_local) {
        case 1:
            return 'FMPO';
            break;
        case 2:
            return 'ENSAO';
            break;
        case 3:
            return 'FPN';
            break;
        case 4:
            return 'ESTO';
            break;
        case 5:
            return 'ENCGO';
            break;
        case 6:
            return 'FSO';
            break;
        case 7:
            return 'FLSHO';
            break;
        case 8:
            return 'FSJES';
            break;
        default:
            return '';
    }
}
