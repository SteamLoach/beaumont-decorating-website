import {mapMutations} from 'vuex'; 

export const navMutations = {
  
  methods: {
    ...mapMutations({
      responsiveNavToggle: 'menus/responsiveNavToggle',
      responsiveNavClose: 'menus/responsiveNavClose',
      navSticky: 'menus/navSticky',
      navStatic: 'menus/navStatic'
    })
  }  
}

