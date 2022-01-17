<template>
  <div class="container">
    <Header  />
    <Content :query="query" v-if="loading" :photos="photos" />
    <Placeholder v-else />
  </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
  name: "IndexPage",
  data() {
    return {
      query: "",
      
    };
  },

  computed: {
    ...mapState({
      photos:state=>state.photos.photos,
      loading:state=>state.photos.loading
    })
  },
  created() {
    this.getPhotos();
    console.log(this)
    this.$EventBus.$on(
      "change",
      function (event) {
        this.query = event;
        
        this.getPhotos();
      }.bind(this)
      ///
    );
  },
  methods: {
    getPhotos() {
      this.$store.dispatch('photos/getPhotos', this.query)
    },
  },
};

</script>


