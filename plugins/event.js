import Vue from "vue";

const event = new Vue();
export default function (context, inject) {
  inject("EventBus", event);
}
