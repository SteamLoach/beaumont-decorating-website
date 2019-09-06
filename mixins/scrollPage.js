export const scrollPage = {
  
  methods: {
    
    scrollToTarget: function(target) {
      
      let targetBottom = document.querySelector(target).getBoundingClientRect().bottom ; 
      
      let navOffset = document.querySelector('.top-nav').clientHeight ; 
      
      window.scrollTo({
        left: 0,
        top: (targetBottom + pageYOffset) - navOffset,
        behavior: 'smooth'  
      });   
    }
  }
}