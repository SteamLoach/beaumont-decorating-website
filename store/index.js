export const state = () => ({
  
  
})

export const mutations = {
  

  
}

export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByCodename', {
        codename: 'main_nav_menu',
        mutation: 'navExtender',
        fill: 'Nav'
      }) ; 
      //seems like we can await multiple calls here - try footer etc too
  },
}

