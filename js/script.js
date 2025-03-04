const btn = document.querySelector('.btn');
let name = document.querySelector('.name')

btn.addEventListener('click',function(){
    anime({
        targets: '.name path ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 10000,
        delay: function (el, i) { return i * 250 },
    
    });
})
