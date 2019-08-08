export const state = () => ({
  
  
})

export const mutations = {
  
//Set individual page content 
  setContentByCodename(state, content) {
    state[content.target] = content.output ; 
  }, 
  
}

export const actions = {
  
  async nuxtServerInit () {
    await this.dispatch('getContentByCodename', {
      codename: 'main_nav_menu',
      fill: 'mainNavMenu'
    })
  },
  
  getContentByCodename (context, obj) { 
    /*function checks whether page content is already present in state and 
      does not call the deliveryClient if so*/
    if (!context.state[obj.fill]) {
      console.log(`Creating ${obj.fill} state object`)
      return this.$deliveryClient
        .item(obj.codename)
        .depthParameter(2)
        .getPromise()
        .then(response => {
          context.commit('setContentByCodename', {output: response.item, target: obj.fill}) ;
        }) ; 
      } else {
      console.log(`${obj.fill} state object already exists`) ; 
    }
  },  
}