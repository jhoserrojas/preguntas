function guardar(){
    let rp1,rp2,rp3
    rp1 = document.getElementById("p1").value

    //Guardar localmente 
    localStorage.setItem("p1",rp1)
    //Enviar al archivo respuesta.html
    window.location = "respuesta.html"

    rp2 = document.getElementById("p2").value
    localStorage.setItem("p2",rp2)
    window.location = "respuesta.html"

    rp3 = document.getElementById("p3").value
    localStorage.setItem("p3",rp3)
    window.location = "respuesta.html"
}