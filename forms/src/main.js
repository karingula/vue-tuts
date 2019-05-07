import Vue from 'vue'
import App from './App.vue'

// global directive
Vue.directive('highlight', {
  bind(el, binding, vnode, oldnode) {
    //el.style.backgroundColor = 'lightgrey'
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

// global filter
Vue.filter('to-lower-case', function(value) {
  return value.toLowerCase()
})

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook')
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
