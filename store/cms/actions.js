export default {
  /*
  Both cms runners are called with an 'options' object
  
    options: {
      
    //getContentByCodename
      codename: content item we want to retrieve (eg: 'home_page'),
    //getContentByModel
      model: content model we want to retrieve (eg: 'page_template')
      
      mutation: how the content is resolved and commited to the store.
                The mutation must be called relative to the root,
                ie: menus/navExtender
                
      module: the module in which to store the content
      
    }
  
  The runners output a 'content' object, which is passed to the defined mutation
  
    content: {
      output: the unresolved content item(s),
      target: the name of the variable in which the content will be stored,
              generally the camelCased `system.codename` of the content item
    }
  
  Both functions work from the rootState of the store and as such are module agnostic as long as the correct options are passed.
  
  */
  getContentByCodename (context, options) {
    return this.$deliveryClient
      .item(options.codename)
        .depthParameter(6)
          .getPromise()
            .then(response => {
              context.commit(options.mutation, {
                output: response.item, 
                target: this.$toCamel(options.codename)
              }, {root: true}) ;                    
            }) ; 
  },
  
  getContentByModel (context, {splitItems = true, model = '', mutation = '', module = ''} = {}) {
    return this.$deliveryClient
      .items()
        .type(model)
          .depthParameter(6)
            .getPromise()
              .then(response => {
                if (splitItems) {
                  response.items.forEach(item => {
                    context.commit(mutation, {
                      output: item,
                      target: this.$toCamel(item.system.codename)
                    }, {root: true}) ; 
                  }) ;
                } else {
                    context.commit(mutation, {
                      output: response.items,
                      target: this.$toCamel(`${model}s`),
                      asArray: true
                    }, {root: true}) ;
                }
              });
  },
}
  
