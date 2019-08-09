export default {
  
//Set individual page content 
  setContentByCodename(state, content) {
    state[content.target] = this.$masterResolver(content.output) ; 
  }, 
  
  navExtender(state, content) {
    let base = this.$masterResolver(content.output) ; 
    base.state = {'is-active': false, 'is-sticky': false}
    state[content.target] = base ; 
  }
  
}