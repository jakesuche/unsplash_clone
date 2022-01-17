<template>
  <div class="container">
    <Header />
    <Content :query="query" v-if="loading" :photos="photos" />
    <Placeholder v-else />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      access_key: "",
      url: "https://api.unsplash.com",
      per_page: 7,
      orientation: ["portrait", "landscape", "squarish"],
      photos: [],
      query: "fun",
      loading:true
    };
  },

  computed: {},
  created() {
    this.getPhotos();

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
      
      this.loading = false
      this.access_key = process.env.UNPLASH_ACCESS_KEY
      console.log(process.env.UNPLASH_ACCESS_KEY)
      this.$axios
        .get(
          `${this.url}/search/photos?client_id=${this.access_key}&query=${this.query}&per_page=${this.per_page}&orientation=${this.orientation[1]}`
        )
        .then((res) => {
          this.photos = res.data.results;
          console.log(this.photos);
          this.loading = true

        })
        .catch((err) => {
          console.log(err);
          this.loading = true
        });
    },
  },
};

</script>


