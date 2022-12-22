/* let dataset = [1,3,5,7,9]
let divo = document.getElementById('divo');
const svg = d3.select(divo).selectAll('p') 
.data(dataset)
.enter()
.append('p')
.attr("class", "classD3Bg") */
/* .style("color",(d) => {
   return d > 5 ? "green" : "red" 
}) */
/* .style("height",(d) => d + "vh") 
let datos = [10,20,30,40]
let divasa = document.getElementById('divasa')
const svg1 = d3.select(divasa).selectAll('div')
.data(datos)
.enter()
.append('div')
.attr("class","classD3Bg")
.style("height",(d) => d + "vh") */
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
