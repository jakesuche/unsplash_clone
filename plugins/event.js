import Vue from 'vue'
// const EventBus = new Vue()
// Vue.prototype.$EventBus = EventBus 
const event = new Vue()
export default function(context, inject){
    

    // console.log(inject)
    inject('EventBus', event)
    // console.log(context)
}