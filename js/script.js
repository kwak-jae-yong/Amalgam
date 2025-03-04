const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const btn = document.querySelector('.btn')

let childElement = null
let num1 = 250
let num2 = 200

appendChild(c1,num1)
appendChild(c2,num2)


function appendChild(child,idx){
    for(let i=0;i<idx;i++){
        childElement=document.createElement('div')
        child.append(childElement)
    }
}



btn.addEventListener('click',function(){
    anime({
        targets: '.circle>div',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 2000},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [20, 15], from: 'center'}),
        loop:true
      });
      
})