$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.amount input').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


const modal = document.getElementById("youtubeModal");
const youtubeVideo = document.getElementById("youtubeVideo");
const closeBtn = document.querySelector(".close");

// Pegue TODOS os botões "learn more" do site
const learnMoreBtns = document.querySelectorAll(".btn");

// Para cada botão, adicione o evento de clique
learnMoreBtns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault(); // Evita que o link "#" recarregue a página

    // Define o vídeo com base no data-attribute (ex: data-video="dQw4w9WgXcQ")
    const videoId = this.getAttribute("data-video");
    
    if (videoId) {
      modal.style.display = "block";
      youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
      alert("Vídeo não configurado para este botão.");
    }
  });
});

// Fecha o modal ao clicar no "X"
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  youtubeVideo.src = ""; // Para o vídeo
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    youtubeVideo.src = ""; // Para o vídeo
  }
});