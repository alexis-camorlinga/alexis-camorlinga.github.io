//constant update alert

// alert("This website is constantly updating, give me constructive criticism below.")
// smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

//scroll bar 
$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
  dh = $(document).height(),
  wh = $(window).height();
  scrollPercent = (scroll / (dh-wh)) *100;
  $('#progressbar').css('height', scrollPercent + '%')
})

