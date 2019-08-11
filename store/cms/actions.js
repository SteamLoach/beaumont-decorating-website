export default {
  /*
  getContentByCodename is called with the following 'options' object
  
    options: {
    
      codename: content item we want to retrieve (eg: 'home_page'),
      
      mutation: how the content is resolved and commited to the store
                the mutation must be called relative to the root,
                ie: menus/navExtender
                
      module: the module in which to store the content
      
      name: the variable to which the content will be assigned
      
    }
  
  it outputs a 'content' object, which is passed to the defined mutation
  
    content: {
      output: the returned `response.item`,
      target: the `options.fill` store object reference 
    }
  
  the function works from the rootState of the store so it is module agnostic as long as the correct options are passed to it
  
  */
  getContentByCodename (context, options) {
    
    if (!context.rootState[options.module][options.name]) {
            
      return this.$deliveryClient
        .item(options.codename)
          .depthParameter(6)
            .getPromise()
              .then(response => {
                context.commit(options.mutation, {output: response.item, target: options.name}, {root: true}) ;
                  
                  if (context.rootState.debug) {
                    
                    console.log(
                      `${options.name} fetched using a "${context.state.reference}" module action and  created in "${options.module}" module via ${options.mutation}`)
                  }
              
        
              }) ; 
    } else {
      
      if (context.rootState.debug) {
        console.log(`${options.name} already exists in "${options.module}" module`) ;
      }
      
      
   }
  },  
}