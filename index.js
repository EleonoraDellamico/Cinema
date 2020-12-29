const ARRAYMOVIES=[
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
        searchListContainer.style.display= "block";
        //2 
        input.addEventListener("input", searchList)
    }else{
         input.style.visibility = "hidden";
         input.style.opacity= 0;
         searchListContainer.style.display= "none";
         //2
         input.removeEventListener("input", searchList)

    }
}
function searchList(event){
 const VALUE = event.target.value; //aqui recojo el valor del input
 //3 
 let searchList = document.getElementById ("searchList");
 for (let index = 0; index < ARRAYMOVIES.length; index++){
     const MOVIE = ARRAYMOVIES [index];
     if (MOVIE.includes(VALUE)){
         let htmlMovie = document.createElement("li"); // aqui creamos un li todavia no lo hemos asignado
         htmlMovie.innerHTML = MOVIE;
         searchList.appendChild(htmlMovie); // añadir el elemento que acabamod de crear o sea el li a un elemento que ya existe en nuestro html
     }
 }

}