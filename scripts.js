window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');

    btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })

    btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popup.style.animation = "fadeIn .6s 0.0s both";
    })

    sendBtn.addEventListener("click", () => {
        let msg = document.getElementById('whats-in').value;
        let relmsg = msg.replace(/ /g, "%20");
        //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
        window.open('https://wa.me/+573226080656?text=' + relmsg, '_blank');

    });

    setTimeout(() => {
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
}

popupWhatsApp();


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".icon-button");

    links.forEach(link => {
        const tooltip = document.createElement("div");
        tooltip.className = "custom-tooltip";
        tooltip.textContent = link.getAttribute("data-tooltip");
        document.body.appendChild(tooltip);

        link.addEventListener("mouseover", function(e) {
            tooltip.style.display = "block";
            tooltip.style.left = e.pageX + "px";
            tooltip.style.top = e.pageY - 30 + "px";
        });

        link.addEventListener("mousemove", function(e) {
            tooltip.style.left = e.pageX + "px";
            tooltip.style.top = e.pageY - 30 + "px";
        });

        link.addEventListener("mouseout", function() {
            tooltip.style.display = "none";
        });
    });
});

function generarCuento() {
    let nombre = document.getElementById("nombre").value;
    let apodo = document.getElementById("apodo").value;
    let cabello = document.getElementById("cabello").value;
    let ojos = document.getElementById("ojos").value;
    let edad = document.getElementById("edad").value;
    let hobby = document.getElementById("hobby").value;

    if (!nombre || !apodo || !cabello || !ojos || !edad || !hobby) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let url = `cuento.html?nombre=${nombre}&apodo=${apodo}&cabello=${cabello}&ojos=${ojos}&edad=${edad}&hobby=${hobby}`;
    window.open(url, "Cuento", "width=600,height=400");




}