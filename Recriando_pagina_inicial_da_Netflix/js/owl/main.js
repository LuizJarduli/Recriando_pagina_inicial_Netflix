$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 3,
            loop: true
        },
        600: {
            items: 3,
            loop: true
        },
        1000: {
            items: 6,
            loop: true
        }
    }
})

// fixando o container do header ao rolar a página verticalmente
window.onscroll = function() { fixaHeader() };

// guardando a navbar em uma variável
var navbar = document.getElementById("container");

// função fixaHeader
function fixaHeader() {
    // o usuário rolando a página desde o topo por pelo menos 1 pixel
    // a classe fixed será adicionada ao header
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed");
    }
}