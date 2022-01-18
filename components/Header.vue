<template>
  <div class="topnav">
    <SearchInput />
    <div @click="closeInput($event)" class="response" v-show="isSearch">
      {{
        !prop.loading
          ? "Searching for"
          : prop.query
          ? "Searched results for"
          : ""
      }}
      <span v-if="prop.query" style="font-weight: 400"> “{{ prop.query }}”</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isSearch: false,
    };
  },
  computed: {
    ...mapState({
      prop: (state) => state.photos,
    }),
  },
  created() {
    this.$EventBus.$on(
      "change",
      function (event) {
        this.isSearch = true;
      }.bind(this)
      ///
    );
    this.$EventBus.$on(
      "event",
      function (event) {
        this.isSearch = !this.isSearch;
      }.bind(this)
      ///
    );
  },

  methods: {
    closeInput() {
      this.isSearch = false;
      this.$EventBus.$emit("close");
      if(this.prop.photos.length > 0){
        return
      }else{
        this.$store.dispatch('photos/getPhotos')
      }
    },
  },
};
</script>

<style scoped lang="scss">
.topnav {
  display: flex;
  justify-content: center;
  background-color: #dde2e9;
  height: 230px;
  align-items: center;
  box-shadow: $box-shadow;
  position: relative;
  .response {
    position: absolute;
    font-size: 36px;
    left: 10%;
    color: #334563;
    font-weight: 500;
    animation: fadein 1s ease-in-out;
    cursor: pointer;
    @media(max-width: 528px){
      font-size:1.1rem;
    }
    span {
      font-weight: 400;
      opacity: 0.5;
      text-transform: uppercase;
    }
  }
}



@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
