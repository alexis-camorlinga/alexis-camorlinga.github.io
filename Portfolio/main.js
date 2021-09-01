//constant update alert

alert("This Website is Constantly updating, give me constructive criticism Below")
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
