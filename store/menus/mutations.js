export default {  
  
  //resolves topNav from cms response
  navExtender(state, content) {
    let base = this.$masterResolver(content.output) ; 
    base.state = {'is-active': false, 'is-sticky': false}
    state[content.target] = base ; 
  },
  
  
  mobileNavToggle(state) {
    state.topNav.state['is-active'] = !state.topNav.state['is-active'] ; 
  },
  
  mobileNavClose(state) {
    state.topNav.state['is-active'] = false ; 
  },
  
  navSticky(state) {
    state.topNav.state['is-sticky'] = true ; 
  },
  
  navStatic(state) {
    state.topNav.state['is-sticky'] = false ; 
  }
  
  
}