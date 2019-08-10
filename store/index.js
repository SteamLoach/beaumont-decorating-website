export const state = () => ({
  
  reference: 'rootState',
  debug: true,
  
})


export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByCodename', {
        codename: 'main_nav_menu',
        mutation: 'menus/navExtender',
        module: 'menus',
        name: 'primaryNav'
      }) ; 
      //seems like we can await multiple calls here - try footer etc too
  },
  
}




