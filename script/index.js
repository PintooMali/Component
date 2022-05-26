
//outdoor ajax request
let outdoor=[],indoor=[],essential=[];
$.get('https://my-json-server.typicode.com/pintoomali/hotel/amenities',data=>{
    outdoor=data.outdoor;
    indoor=data.indoor;
    essential=data.Essentials;
  
})



$(document).ajaxStart(()=>{
    // show loader on start
    $(".progress").css("display","block");
}).ajaxSuccess(function() {
  // hide loader on success
  $(".progress").css("display","none");
  for(i=0;i<outdoor.length;i++){
      $('.outdoor').append(`<div class="mb-1">
      <h6 class="h6 fw-normal">${outdoor[i]}</h6>
  </div>`)
  $('.indoor').append(`<div class="mb-1">
  <h6 class="h6 fw-normal">${indoor[i]}</h6>
</div>`)
$('.essential').append(`<div class="mb-1">
<h6 class="h6 fw-normal">${essential[i]}</h6>
</div>`)
}
});



$(document).ready(()=>{


  
    
    let count = Math.ceil($('.grido2>div').length)
    let moving=$('.grido2')[0].scrollWidth/count;
   
    let slideCount=1;
    let last_value=$('.grido2')[0].scrollWidth;
    $('.mover-span').text(`${slideCount}/${count}`)

$('.right-mover').on('click', ()=>{
    slideCount++;
    $('.grido2').animate({
scrollLeft: `+=${moving}px`
},500)
$('.mover-span').text(`${slideCount}/${count}`);
if($('.left-mover').attr('disabled')==='disabled'&&moving<=last_value){
$('.left-mover').removeAttr('disabled');
$('.left-mover').css('cursor','pointer');
}
if(slideCount===count){
    $('.left-mover').removeAttr('disabled');
$('.left-mover').css('cursor','pointer');
$('.right-mover').css('cursor','not-allowed')
$('.right-mover').attr('disabled','disabled');
}
})

$('.left-mover').on('click', ()=>{
    
slideCount--;
$('.grido2').animate({
scrollLeft: `-=${moving}px`
},500)
$('.mover-span').text(`${slideCount}/${count}`);
if($('.right-mover').attr('disabled')==='disabled'&&moving<=last_value){
$('.left-mover').css('cursor','not-allowed');
$('.right-mover').css('cursor','pointer');

}
if(slideCount===1){
    $('.left-mover').attr('disabled','disabled');
    $('.right-mover').removeAttr('disabled');
}

})

})



