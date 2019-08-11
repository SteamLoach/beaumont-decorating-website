export const state = () => ({
  
  reference: 'rootState',
  debug: true,
  
})


export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByCodename', {
        codename: 'top_nav',
        mutation: 'menus/navExtender',
        module: 'menus',
        name: 'topNav'
      }) ; 
      //seems like we can await multiple calls here - try footer etc too
  },
  
}




