function obtenerParametros() {
    let params = new URLSearchParams(window.location.search);
    let nombre = params.get("nombre");
    let apodo = params.get("apodo");
    let cabello = params.get("cabello");
    let ojos = params.get("ojos");
    let edad = params.get("edad");
    let hobby = params.get("hobby");

    let cuento = `Había una vez una persona llamada ${nombre} en medellín, aunque todos la conocían como ${apodo}. 
    Con su cabello ${cabello} y sus ojos ${ojos}, era inconfundible en la ciudad. 
    A sus ${edad} años, dedicaba gran parte de su tiempo a su pasión: ${hobby}. 
    Un día, mientras disfrutaba de su hobby como era habitual, algo increíble le sucedió, un turista llegó a la ciudad,
    vió a esta persona disfrutar de su hobby y quedó encantado, la quiso contratar, desde ese momento ${apodo} se convirtió en una
    persona popular, su vida comenzó a transformarse y pudo ayudarle a su familia, también apoya económicamente a toda su comunidad.`;

    document.getElementById("cuento").textContent = cuento;
}

obtenerParametros();