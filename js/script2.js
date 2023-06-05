function cargardato(){
    let r1,r2,r3
    
    r1 = localStorage.getItem("p1")
    document.getElementById("respuesta").innerHTML= r1
   
    r2 = localStorage.getItem("p2")
    document.getElementById("respuesta2").innerHTML= r2
   
    r3 = localStorage.getItem("p3")
    document.getElementById("respuesta3").innerHTML= r3
}

cargardato()