export default {
  
//Set individual page content 
  setContentByCodename(state, content) {
    state[content.target] = this.$masterResolver(content.output) ; 
  }, 
 
}