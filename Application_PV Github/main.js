


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
      case "1??re Ann??e":
        switch (strUser)
        {
          case "2S-1Q":
            case "1S-1Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Chimie-Biochimie","Chimie-Biochimie");
            document.getElementById("module2").options[2]=new Option("M??thodologie d'apprentissage et Terminologie M??dicale","M??thodologie d'apprentissage et Terminologie M??dicale");
            document.getElementById("module2").options[3]=new Option("Communications et langues + Informatique","Communications et langues + Informatique");
            document.getElementById("module2").options[4]=new Option("Sant?? publique 1","Sant?? publique 1");
            document.getElementById("module2").options[5]=new Option("Anatomie 1","Anatomie 1");
            break;
          case "2S-2Q":
            case "1S-2Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Anatomie II","Anatomie II");
            document.getElementById("module2").options[2]=new Option("Biophysique","Biophysique");
            document.getElementById("module2").options[3]=new Option("Histologie g??n??rale - Embryologie I + TP","Histologie g??n??rale - Embryologie I + TP");
            document.getElementById("module2").options[4]=new Option("Histoire de la m??decine et psychologie","Histoire de la m??decine et psychologie");
            document.getElementById("module2").options[5]=new Option("Techniques de communication","Techniques de communication");
            document.getElementById("module2").options[6]=new Option("Examen TP Anatomie 1","Examen TP Anatomie 1");
            document.getElementById("module2").options[7]=new Option("Examen TP Informatique","Examen TP Informatique");
            document.getElementById("module2").options[8]=new Option("Examen TP Anatomie 2","Examen TP Anatomie 2");
            break;
        }
      break;
      case "2??me Ann??e":
        switch (strUser)
        {
          case "2S-1Q":
            case "1S-1Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Microbiologie-Immunologie-Virologie+(TP)","Microbiologie-Immunologie-Virologie+(TP)");
            document.getElementById("module2").options[2]=new Option("Anatomie III","Anatomie III");
            document.getElementById("module2").options[3]=new Option("Secourisme et M??decine exp??rimentale","Secourisme et M??decine exp??rimentale");
            document.getElementById("module2").options[4]=new Option("Histologie-Embryologie 2","Histologie-Embryologie 2");
            document.getElementById("module2").options[5]=new Option("Physiologie I","Physiologie I");
            document.getElementById("module2").options[6]=new Option("S??miologie I","S??miologie I");
            break;
          case "2S-2Q":
            case "1S-2Q":
            document.getElementById("module2").options[0]=new Option("Module","");
            document.getElementById("module2").options[0].disabled=true;
            document.getElementById("module2").options[1]=new Option("Anatomie IV","Anatomie IV");
            document.getElementById("module2").options[2]=new Option("S??miologie II","S??miologie II");
            document.getElementById("module2").options[3]=new Option("Physiologie II","Physiologie II");
            document.getElementById("module2").options[4]=new Option("H??matologie Fondamentale","H??matologie Fondamentale");
            document.getElementById("module2").options[5]=new Option("Biochimie Clinique","Biochimie Clinique");
            document.getElementById("module2").options[6]=new Option("Examen TP Anatomie 3","Examen TP Anatomie 3");
            document.getElementById("module2").options[7]=new Option("Examen TP Anatomie 4","Examen TP Anatomie 4");
            break;
        }
        break;

        case "3??me Ann??e":
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
        case "4??me Ann??e":
          switch (strUser)
          {
            case "2S-1Q":
              case "1S-1Q":
              document.getElementById("module2").options[0]=new Option("Module","");
              document.getElementById("module2").options[0].disabled=true;
              document.getElementById("module2").options[1]=new Option("(Pathologie de syst??me nerveux) Neurologie-Neurochirurgie","(Pathologie de syst??me nerveux) Neurologie-Neurochirurgie");
              document.getElementById("module2").options[2]=new Option("Anatomie pathologie 2 et 3","Anatomie pathologie 2 et 3");
              document.getElementById("module2").options[3]=new Option("Endocrinologie-Dermatologie","Endocrinologie-Dermatologie");
              document.getElementById("module2").options[4]=new Option("Oncologie-H??matologie","Oncologie-H??matologie");
              break;
            case "2S-2Q":
              case "1S-2Q":
              document.getElementById("module2").options[0]=new Option("Module","");
              document.getElementById("module2").options[0].disabled=true;
              document.getElementById("module2").options[1]=new Option("Pathologie de l'Enfant","Pathologie de l'Enfant");
              document.getElementById("module2").options[2]=new Option("Immunopathologie - Maladies syst??miques - G??n??tique m??dicale","Immunopathologie - Maladies syst??miques - G??n??tique m??dicale");
              document.getElementById("module2").options[3]=new Option("Pathologie de l'appareil locomoteur","Pathologie de l'appareil locomoteur");
              break;
          }
          break;

          case "5??me Ann??e":
            switch (strUser)
            {
              case "2S-1Q":
                case "1S-1Q":
                document.getElementById("module2").options[0]=new Option("Module","");
                document.getElementById("module2").options[0].disabled=true;
                document.getElementById("module2").options[1]=new Option("Synth??se th??rapeutique","Synth??se th??rapeutique");
                document.getElementById("module2").options[2]=new Option("Sant?? publique","Sant?? publique");
                document.getElementById("module2").options[3]=new Option("Sant?? mentale (Psychiatrie)","Sant?? mentale (Psychiatrie)");
                document.getElementById("module2").options[4]=new Option("Urgences et r??animation","Urgences et r??animation");
                break;
              case "2S-2Q":
                case "1S-2Q":
                document.getElementById("module2").options[0]=new Option("Module","");
                document.getElementById("module2").options[0].disabled=true;
                document.getElementById("module2").options[1]=new Option("Urologie - N??phrologie","Urologie - N??phrologie");
                document.getElementById("module2").options[2]=new Option("M??decine de travail - M??decine l??gale Ethique et d??ontologie","M??decine de travail - M??decine l??gale Ethique et d??ontologie");
                document.getElementById("module2").options[3]=new Option("Gyn??cologie ??? obst??trique","Gyn??cologie ??? obst??trique");
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
        
        document.getElementById("anneec2").options[0]=new Option("Ann??e","");
        document.getElementById("anneec2").options[0].disabled=true;
        document.getElementById("anneec2").options[0].selected = true;
        document.getElementById("anneec2").options[1]=new Option("1??re Ann??e","1??re Ann??e");
        document.getElementById("anneec2").options[2]=new Option("2??me Ann??e","2??me Ann??e");
        document.getElementById("anneec2").options[3]=new Option("3??me Ann??e","3??me Ann??e");
        document.getElementById("anneec2").options[4]=new Option("4??me Ann??e","4??me Ann??e");
        document.getElementById("anneec2").options[5]=new Option("5??me Ann??e","5??me Ann??e");
        return true;
}

