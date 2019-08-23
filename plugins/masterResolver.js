//Converts object keys to camel case
const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const masterResolver = (contentModel, counter) => {
  
  let resolvedModel = {} ;
    
  const resolve = (key, content) => {
        resolvedModel[toCamel(key)] = content ;
        resolvedModel.componentReference = toCamel(contentModel.system.type) ;
        (counter > 0) ? resolvedModel.id = counter : '' ; 
  } ; 
    
  Object.keys(contentModel).forEach(key => {
        if (key !== 'system' && key !== 'elements') {
            
            let type = contentModel.elements[key].type ;
            let counter = 0 ;
          
            (type === 'text' || type === 'rich_text') ? resolve(key, contentModel[key].value):
            
            (type === 'asset') ? resolve(key, contentModel[key].assets.map(asset => {
              return {
                url: asset.url,
                name: asset.name,
                description: asset.description,
                id: (contentModel[key].assets.indexOf(asset) + 1)
              } 
            })):
            
            (type === 'multiple_choice') ? resolve(key, contentModel[key].options.map(choice => {
              return choice.name ; 
            })):
            
            (type === 'modular_content') ? resolve(key, contentModel[key].map(obj => {
                counter++
                return masterResolver(obj, counter) ;  
            })):
            
            console.log(`no resolver for "${type}" model "${key}"`) ;     
        }
    }) ; 
    return resolvedModel ; 
} ;

export default ({app}, inject) => {
  inject('masterResolver', masterResolver) ;
  inject('toCamel', toCamel) ;
}


