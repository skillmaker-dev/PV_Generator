


//to warn user when he is using Firefox since it has some problems in printing.
if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         alert("Firefox peut produire des erreurs dans l'impression ou PDF, Veuillez utiliser Chrome ou Edge");
    }
    else{
      window.onload = function()
      {
        
      }
    }

// to initialize the webpage with the following options.
document.getElementById('concours').checked = true;    
document.getElementById('anneec2').disabled = true;
document.getElementById('module2').disabled = true;
document.getElementById('session_select').disabled = true;
document.getElementById("module2").options.length=0;
document.getElementById("anneec2").options.length=0;
document.getElementById("session_select").options.length=0;


//to reset "Session" to default value when reloading.
var options = document.querySelectorAll('#session_select option');
for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;
}

//to to disable or enable date field when checkbox is checked.
var checkbox = document.querySelector("#flexSwitchCheckDefault");
var input = document.querySelector("#date-field");
var toogleInput = function(e){
  input.disabled = !e.target.checked;
};


//to disable unecessary elements when using "Concours".
function disable(input3)
{
if (input3 == "1")
{
location.reload();

}
else {

  //using this algorithm to remove locals of other universities when selecting 'examen'.
  let i=0;
  let j=0;
  Array.from(document.querySelector("#local").options).forEach(function(option_element) {
    i++;
    let option_value = option_element.value;
    if(option_value.substring(0, 1) != 1)
    {
      j++
    }

});

for(let k=i;k>i-j-1;k--)
{
document.getElementById("local").remove(k);
}

// re-enabling necessary fields when selecting 'examens'.
document.getElementById('anneec2').disabled = false;
document.getElementById('module2').disabled = false;
document.getElementById('session_select').disabled = false;
document.getElementById("session_select").options[0]=new Option("Session:","");
document.getElementById("session_select").options[0].disabled=true;
document.getElementById("session_select").options[1]=new Option("1S-1Q","1S-1Q");
document.getElementById("session_select").options[2]=new Option("1S-2Q","1S-2Q");
document.getElementById("session_select").options[3]=new Option("2S-1Q","2S-1Q");
document.getElementById("session_select").options[4]=new Option("2S-2Q","2S-2Q");
}

}

// Disable or enable date checkbox
toogleInput({target: checkbox});    
checkbox.addEventListener("change", toogleInput);


function select_All() { 
      let selectBox = document.getElementById('local');
  // is the select box a multiple select box? 
  if (selectBox.type == "select-multiple") { 
      for(let i = 0; i < selectBox.options.length; i++) { 
           selectBox.options[i].selected = true; 
      } 
  }
  
}



// Inserting studying subjects (modules) to corresponding fields .
// (Didn't use database since i received data separately, planning on migrating data to database later).
function dropdown(listindex)
{
  var e = document.getElementById("session_select");
  var strUser = e.options[e.selectedIndex].text;
  document.getElementById("module2").options.length=0;
  switch (listindex)
  {
      case "1ére Année":
        switch (strUser)
        {
          case "2S-1Q":
            case "1S-1Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Chimie-Biochimie","Chimie-Biochimie");
            document.getElementById("module2").options[2]=new Option("Méthodologie d'apprentissage et Terminologie Médicale","Méthodologie d'apprentissage et Terminologie Médicale");
            document.getElementById("module2").options[3]=new Option("Communications et langues + Informatique","Communications et langues + Informatique");
            document.getElementById("module2").options[4]=new Option("Santé publique 1","Santé publique 1");
            document.getElementById("module2").options[5]=new Option("Anatomie 1","Anatomie 1");
            break;
          case "2S-2Q":
            case "1S-2Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Anatomie II","Anatomie II");
            document.getElementById("module2").options[2]=new Option("Biophysique","Biophysique");
            document.getElementById("module2").options[3]=new Option("Histologie générale - Embryologie I + TP","Histologie générale - Embryologie I + TP");
            document.getElementById("module2").options[4]=new Option("Histoire de la médecine et psychologie","Histoire de la médecine et psychologie");
            document.getElementById("module2").options[5]=new Option("Techniques de communication","Techniques de communication");
            document.getElementById("module2").options[6]=new Option("Examen TP Anatomie 1","Examen TP Anatomie 1");
            document.getElementById("module2").options[7]=new Option("Examen TP Informatique","Examen TP Informatique");
            document.getElementById("module2").options[8]=new Option("Examen TP Anatomie 2","Examen TP Anatomie 2");
            break;
        }
      break;
      case "2éme Année":
        switch (strUser)
        {
          case "2S-1Q":
            case "1S-1Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Microbiologie-Immunologie-Virologie+(TP)","Microbiologie-Immunologie-Virologie+(TP)");
            document.getElementById("module2").options[2]=new Option("Anatomie III","Anatomie III");
            document.getElementById("module2").options[3]=new Option("Secourisme et Médecine expérimentale","Secourisme et Médecine expérimentale");
            document.getElementById("module2").options[4]=new Option("Histologie-Embryologie 2","Histologie-Embryologie 2");
            document.getElementById("module2").options[5]=new Option("Physiologie I","Physiologie I");
            document.getElementById("module2").options[6]=new Option("Sémiologie I","Sémiologie I");
            break;
          case "2S-2Q":
            case "1S-2Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Anatomie IV","Anatomie IV");
            document.getElementById("module2").options[2]=new Option("Sémiologie II","Sémiologie II");
            document.getElementById("module2").options[3]=new Option("Physiologie II","Physiologie II");
            document.getElementById("module2").options[4]=new Option("Hématologie Fondamentale","Hématologie Fondamentale");
            document.getElementById("module2").options[5]=new Option("Biochimie Clinique","Biochimie Clinique");
            document.getElementById("module2").options[6]=new Option("Examen TP Anatomie 3","Examen TP Anatomie 3");
            document.getElementById("module2").options[7]=new Option("Examen TP Anatomie 4","Examen TP Anatomie 4");
            break;
        }
        break;

        case "3éme Année":
        switch (strUser)
        {
          case "2S-1Q":
            case "1S-1Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Pharmacologie","Pharmacologie");
            document.getElementById("module2").options[2]=new Option("Parasitologie-Mycologie-Maladies Infectieuses + TP","Parasitologie-Mycologie-Maladies Infectieuses + TP");
            document.getElementById("module2").options[3]=new Option("Radiologie et imagerie","Radiologie et imagerie");
            document.getElementById("module2").options[4]=new Option("Anatomie Pathologie 1","Anatomie Pathologie 1");
            break;
          case "2S-2Q":
            case "1S-2Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Maladies de l'appareil Digestif","Maladies de l'appareil Digestif");
            document.getElementById("module2").options[2]=new Option("Maladies de l'appareil cardiovasculaire","Maladies de l'appareil cardiovasculaire");
            document.getElementById("module2").options[3]=new Option("Maladies de l'appareil Respiratoire","Maladies de l'appareil Respiratoire");
            break;
        }
        break;
        case "4éme Année":
          switch (strUser)
          {
            case "2S-1Q":
              case "1S-1Q":
              document.getElementById("module2").options[0]=new Option("Module","");
              document.getElementById("module2").options[0].disabled=true;
              document.getElementById("module2").options[1]=new Option("(Pathologie de système nerveux) Neurologie-Neurochirurgie","(Pathologie de système nerveux) Neurologie-Neurochirurgie");
              document.getElementById("module2").options[2]=new Option("Anatomie pathologie 2 et 3","Anatomie pathologie 2 et 3");
              document.getElementById("module2").options[3]=new Option("Endocrinologie-Dermatologie","Endocrinologie-Dermatologie");
              document.getElementById("module2").options[4]=new Option("Oncologie-Hématologie","Oncologie-Hématologie");
              break;
            case "2S-2Q":
              case "1S-2Q":
              document.getElementById("module2").options[0]=new Option("Module","");
              document.getElementById("module2").options[0].disabled=true;
              document.getElementById("module2").options[1]=new Option("Pathologie de l'Enfant","Pathologie de l'Enfant");
              document.getElementById("module2").options[2]=new Option("Immunopathologie - Maladies systémiques - Génétique médicale","Immunopathologie - Maladies systémiques - Génétique médicale");
              document.getElementById("module2").options[3]=new Option("Pathologie de l'appareil locomoteur","Pathologie de l'appareil locomoteur");
              break;
          }
          break;

          case "5éme Année":
            switch (strUser)
            {
              case "2S-1Q":
                case "1S-1Q":
                document.getElementById("module2").options[0]=new Option("Module","");
                document.getElementById("module2").options[0].disabled=true;
                document.getElementById("module2").options[1]=new Option("Synthèse thérapeutique","Synthèse thérapeutique");
                document.getElementById("module2").options[2]=new Option("Santé publique","Santé publique");
                document.getElementById("module2").options[3]=new Option("Santé mentale (Psychiatrie)","Santé mentale (Psychiatrie)");
                document.getElementById("module2").options[4]=new Option("Urgences et réanimation","Urgences et réanimation");
                break;
              case "2S-2Q":
                case "1S-2Q":
                document.getElementById("module2").options[0]=new Option("Module","");
                document.getElementById("module2").options[0].disabled=true;
                document.getElementById("module2").options[1]=new Option("Urologie - Néphrologie","Urologie - Néphrologie");
                document.getElementById("module2").options[2]=new Option("Médecine de travail - Médecine légale Ethique et déontologie","Médecine de travail - Médecine légale Ethique et déontologie");
                document.getElementById("module2").options[3]=new Option("Gynécologie – obstétrique","Gynécologie – obstétrique");
                document.getElementById("module2").options[4]=new Option("ORL - Opthalmologie","ORL - Opthalmologie");
                break;
            }
            break;
  }
  return true;
}





function addyear()
{
        document.getElementById("module2").options.length=0;
        
        document.getElementById("anneec2").options[0]=new Option("Année","");
        document.getElementById("anneec2").options[0].disabled=true;
        document.getElementById("anneec2").options[0].selected = true;
        document.getElementById("anneec2").options[1]=new Option("1ére Année","1ére Année");
        document.getElementById("anneec2").options[2]=new Option("2éme Année","2éme Année");
        document.getElementById("anneec2").options[3]=new Option("3éme Année","3éme Année");
        document.getElementById("anneec2").options[4]=new Option("4éme Année","4éme Année");
        document.getElementById("anneec2").options[5]=new Option("5éme Année","5éme Année");
        return true;
}

