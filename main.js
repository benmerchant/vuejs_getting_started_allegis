/**
 * November 20, 2019
 */
// why did he use [var]???

const app = new Vue({
  el: '#some-vue-app',
  data: {
    title: 'This is Some View App',
    subtitle: 'This app was made to learn Vue.js more better',
    favorites: 0,
    foods: [
      {
        name: 'apple',
        description: 'largest company ever',
        img_url: 'apple.jpg',
        coolness_factor: 10,
        is_fav: true
      },
      {
        name: 'dragon',
        description: 'awesome monster',
        img_url: 'dragon.jpg',
        coolness_factor: 20,
        is_fav: true
      },
      {
        name: 'charlie',
        description: 'fantastic janitor',
        img_url: 'charlie.jpg',
        coolness_factor: 30,
        is_fav: true
      },
      {
        name: 'pear',
        description: 'sandy fruit',
        img_url: 'pear.jpg',
        coolness_factor: 0,
        is_fav: false
      },
    ]
  },
  methods: {
    logTheFood: (key)=> console.log(key+' now your logging food'),
    toggleAndCountFaves: function(theFood, favBool) {
        // console.log(this.foods);
        
        let counter = 0;

        for(let [key,value] of Object.entries(this.foods)){
          if(value.name===theFood) value.is_fav=favBool;
          if(value.is_fav) counter++
        }
        this.favorites = counter;
      }
    }
  }
);