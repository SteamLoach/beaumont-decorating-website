export default {
  /*
  getContentByCodename is called with the following 'options' object
  
    options: {
      codename: content item we want to retrieve (eg: 'home_page'),
      mutation: how the content is resolved and commited to the store,
      fill: the store object that will hold the content
    }
  
  it outputs a 'content' object, which is passed to the defined mutation
  
    content: {
      output: the returned `response.item`,
      target: the `options.fill` store object reference 
    }
  
  */
  getContentByCodename (context, options) {
  
    if (!context.state[options.fill]) {
      console.log(`Creating ${options.fill} state object`)
      return this.$deliveryClient
        .item(options.codename)
          .depthParameter(6)
            .getPromise()
              .then(response => {
                context.commit(options.mutation, {output: response.item, target: options.fill}) ;
              }) ; 
    } else {
      console.log(`${options.fill} state object already exists`) ; 
    }
  }
  
}