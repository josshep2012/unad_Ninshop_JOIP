export default function hamburgerMenu(panelBtn, panel){

 
 const d = document;

 d.addEventListener("click", (e)=> {

  if (e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`))

  
 d.querySelector(panel).classList.toggle("is-active");

 /*si se activa el boton hamburguesa se anima pero al dar clic en cualquier 
 lugar de la pagina se va activar la animacion*/
 /*d.querySelector(panelBtn).classList.toggle("is-active");*/ 

 
 })}

 /*if (e.target.matches(menuLink)){

    d.querySelector(panel).classList.remove("is-active");*/
    /*d.querySelector(panelBtn).classList.remove("is-active");*/ 


 

 
