  
console.log("%cBonjour rien à voir par ici", "color: blue; font-size:2em;font-weight:100%");

function toggleCv() {
  //cache les question - affiche les réponses
/*  var foo = document.getElementById("questioncv").className ="toggleCv";
  var bar = document.getElementById("reponsecv").className +="toggledCv"; */ 

  //ciblage du formulaire
  var x = document.getElementById("frm1");
  var text = "";
  //tableau des réponses
  var array = [ ] 
  var i;  
  //collecte des réponses
  for (i = 0; i < x.length ;i++) {
    // text += x.elements[i].value 
    array.push(x.elements[i].value) 
    // console.log(array)   
    }
    // ecriture de la lettre avec differentes variables
      /*  var adresse= "";
        adresse = array[0]+ " "+array[1]+ " "+array[2]+ " "+array[3]+ " "+array[4]+ " "+
        array[5]+ " "+array[6]+ " "+array[7]+ " "+array[8]+ " "+array[9]+ " "+array[10]+ " "+
        array[11]+ " "+array[12]+ " "+array[13];*/
    //combien d'entité
    // console.log(array.length+" "+"items in array")
    //construction du cv
    text = ("");
    text = (text + " " +array[0]+ " ");
    text = (text + " " +array[1]);
    document.getElementById("head1").innerHTML = text;
    text1 =  ("<br>12 rue " +array[2]+ " ");
    text1 = (text1 + " | " +array[3]+ " | ");
    text1 = (text1 +" | " +array[4]+ " ans");
    document.getElementById("head2").innerHTML = text1;
    text2 = (array[5]);
    document.getElementById("title").innerHTML = text2;
    text3 = ("<strong><br>FORMATION PROFESSIONNELLE</strong><br><br> " +array[6]+"<br>"+ "<br><strong>EXPERIENCE</strong><br><br> ");
    text3 = (text3 + "  " +array[7]+ " (de 2000 à 2009) <br>" +array[15]+ " (de 2010 à 2016)<strong><br><br>LANGUE</strong><br><br> " +array[8]+ " courant<br>");
    text3 = (text3 + " <br><strong>LOISIRS</strong><br><br> " +array[9]+ "<br>J'aime aussi manger des " +array[10]+ " et du " +array[11]+ " au soleil<br> ");
    text3 = (text3 + " <br><strong>MES ATOUTS</strong><br><br>" + "J\'ai animé l'émission de télévision " + array[13]+ " pendant trois ans.<br><br> ");
    text3 = (text3 + "J\'ai écrit une biographie de " + array[14] + " parue le " + array[16]  );
    text3 = (text3 +" <br>Mes expériences de "+array[7]+" et de "+array[15]+" ainsi que mes connaissances en "+array[8]+" me permettent donc de prétendre à un poste de "+array[5]+"<br>");
    text3 = (text3 +"<br>Pour ce poste mes prétentions sont de recevoir un salaire net mensuel de " +array[12]+ " par mois! ");
   //ajoute le texte dans la balise p avec l'id demo1
    document.getElementById("sub").innerHTML = text3;

              }

            


              