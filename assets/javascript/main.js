const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if(callNow) func.apply(context, args)
  }
}


const toggleBtn = document.getElementById('toggle-btn');
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('darkMode')
})

function animeScroll(){
  const windowTop = window.scrollY + (window.innerHeight * 0.65);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  })
}

animeScroll()

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll()
  }, 200))
}