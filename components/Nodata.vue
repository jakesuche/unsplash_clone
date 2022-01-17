<template>
  <div class="container">
    <div class="error_text">
      <h2>No Search Result Found {{ `${query ? `for  “${query}”` : ""}` }}</h2>
    </div>
    <img :src="Image" />
  </div>
</template>

<script>
import Image from "@/assets/image/No-data.gif";
export default {
  props: ["query"],
  data() {
    return {
      Image,
      value: "uch",
    };
  },
  created() {
    this.$EventBus.$on(
      "change",
      function (res) {
        this.value = res;
      }.bind(this)
    );
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: zoom-in-zoom-out 1s ease-in-out;
  margin-top: 30px;
  flex-direction: column;

  .error_text {
    margin-bottom: -73px;
    width: 100%;
    text-align: center;
    position: relative;
    top: 16px;
    h2{
        @media (max-width:503px){
            font-size: 1rem;
        }
    }
  }
  img {
    width: 100%;
    max-width: 500px;
  }
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
