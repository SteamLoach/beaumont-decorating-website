export const state = () => ({
  
  
  
  
  
})

export const mutations = {
  
//Set individual page content 
  setPage(state, content) {
    state[content.target] = content.output ; 
  } 
  
}

export const actions = {
  
  getPage (context, obj) {
    return this.$deliveryClient
      .item(obj.codename)
      .depthParameter(2)
      .getPromise()
      .then(response => {
        context.commit('setPage', {output: response.item, target: obj.fill}) ; 
    }) ; 
  } 
  
}