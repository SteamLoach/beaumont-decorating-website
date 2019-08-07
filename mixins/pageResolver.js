export const pageResolver = {
  
  computed: {
    
    Page: function() {
      
      let payload = this.$store.state[this.mxn_StoreReference] ; 
      
      return this.$masterResolver(payload) ; 
      
    },
    
    //Remove for production
    Blob: function() {
      
      return this.$store.state[this.mxn_StoreReference] ; 
      
    }
    
  }
  
}