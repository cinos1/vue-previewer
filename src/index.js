import PhotoSwipeComponent from './index.vue'

let $vm

export default {
  install(Vue) {
    const PhotoSwipe = Vue.extend(PhotoSwipeComponent)

    if (!$vm) {
      $vm = new PhotoSwipe({ el: document.createElement('div') })
      document.body.appendChild($vm.$el)
    }

    Vue.$photoswipe = {
      open(index, items) {
        $vm.open(index, items)
      },
      goto(index) {
        $vm.goto(index)
      },
      close() {
        $vm.close()
      }
    }

    Vue.mixin({
      created() {
        this.$photoswipe = Vue.$photoswipe
      }
    })
  }
}