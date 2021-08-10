# PV_Generator
This application was created using PHP,HTML,CSS,JavaScript to generate exams transcripts for use in Faculty of Medicine and Pharmacy of Oujda.


This application generates a transcript (pv) for each local, and generates transcripts cover for each university as well.


Main Page:
![Capture](https://user-images.githubusercontent.com/64654197/128880437-9e2398f9-7558-4815-abe4-e225cda46117.PNG)
You must select school year,either "concours" or "examens" and then select one or multiple local (classroom in one of the universities).
Date, total candidates are optional.

Generated transcript and transcripts cover:

![Capture2](https://user-images.githubusercontent.com/64654197/128880996-94a79c82-7c48-40ce-91ed-9ee2f95ff755.PNG)
![Capture3](https://user-images.githubusercontent.com/64654197/128881001-4a36dfcf-602f-4d32-97f9-961c95923487.PNG)

Add a local or classroom:

![Capture4](https://user-images.githubusercontent.com/64654197/128881091-178b0843-8de5-408e-834a-8c4cf1c63b1d.PNG)

Delete a local or classroom:

![Capture5](https://user-images.githubusercontent.com/64654197/128881151-cc19ae66-4f9e-4ea4-834f-e61c097e7bca.PNG)


Universities locals and classrooms are imported using database (MySql).
Subjects and year are added using javascript only, the app wasn't going to use database but client improvement requests required using database since there many locals,you can use database for subjects as well.

**Notes**
You must use PHP 7.0+ and a local server using xampp or wampp
To connect to database you must change login infos in file located in  "Application_PV Github/process_files/DataBase.php".
Transcript (PV) is generated in file located in "Application_PV Github/pv.php"
Transcripts cover is generated in files located in "Application_PV Github/locaux"

I deleted university images and logos, you can use your own logos,you can add backgorund picture inside table in transcript using html and css (you just have to change image source in html and css).



