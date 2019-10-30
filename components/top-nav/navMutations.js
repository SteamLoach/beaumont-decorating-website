import {mapMutations} from 'vuex'; 

export const navMutations = {
  
  methods: {
    ...mapMutations({
      handheldNavToggle: 'menus/handheldNavToggle',
      handheldNavClose: 'menus/handheldNavClose',
      navSticky: 'menus/navSticky',
      navStatic: 'menus/navStatic'
    })
  }  
}

