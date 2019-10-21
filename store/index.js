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
    }); 
    
    await dispatch('cms/getContentByCodename', {
      codename: 'site_settings',
      mutation: 'cms/resolveToStore',
      module: 'cms'
    }) ;
    
    await dispatch('cms/getContentByModel', {
      model: 'page_template',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    }) ; 
    
    await dispatch('cms/getContentByCodename', {
      codename: 'footer',
      mutation: 'cms/resolveToStore',
      module: 'cms'
    })
  },
}




