export default {  

  navExtender(state, content) {
    let base = this.$masterResolver(content.output) ; 
    base.state = {'is-active': false, 'is-sticky': false}
    state[content.target] = base ; 
  }
  
}