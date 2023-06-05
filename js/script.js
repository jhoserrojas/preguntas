function guardar(){
    let p1,p2, p3
    
    p1 = document.getElementById("p1").value
    console.log(p1)
    localStorage.setItem("p1", p1)
    window.location = "respuesta.html"

    p2 = document.getElementById("p2").value
    console.log(p2)
    localStorage.setItem("p2",p2)
    window.location = "respuesta.html"

    p3 = document.getElementById("p3").value
    console.log(p3)
    localStorage.setItem("p3",p3)
    window.location = "respuesta.html"
}