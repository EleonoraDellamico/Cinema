const ARRMOVIES=[
    "the sinner",
    "Venom",
    "El Irlandes",
    "Suits",
    "La maldicion",
    "Triple frontera",
    "Defenders"
]
//PASOS A SEGUIR 
//1 ON CLICK
//2 AÑADIR EVENTLISTENER
//3 PINTAR PELICULAS


function clickSearchIcon (){
    let icon = document.getElementById ("searchIcon");
    //1
    icon.classList.toggle("selected")
    let input = document.getElementById("searchInput");
    let searchListContainer = document.getElementById ("searchListContainer");

    
    if(icon.classList.contains("selected")){

        input.style.visibility = "visible";
        input.style.opacity= 1;
    }else{
         input.style.visibility = "hidden";
         input.style.opacity= 0;

    }
}