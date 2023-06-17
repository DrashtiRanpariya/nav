function setup(){
    document.querySelector('.more').addEventsListener('click',function(){
    document.querySelector('.more').classList.toggle('active');
});
}