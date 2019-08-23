export default {
  
//Set individual page content 
  resolveToStore(state, content) {
    
    //remove for production
    state[`${content.target}Blob`] = content.output ;
    
    state[content.target] = this.$masterResolver(content.output) ; 
  }, 
 
}