Vue.component('app',{
  props: ['text'],
  template: '<div><h3></h3><div v-for="logos in universities"><img v-bind:src="logos.imgSource" v-bind:alt="logos.name"></div></div>'
})