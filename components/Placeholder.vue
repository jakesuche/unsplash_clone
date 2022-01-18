<template>
  <div class="content">
    <div class="grid-item animated-background" v-for="(photo, i) in 6" :key="i">
        <section class="text_wrapper">
        <div class="animated-background"></div>
        <div class="animated-background"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  data() {
    return {};
  },
  methods: {
    showModal(data) {
      this.selected = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(120px, auto);

  grid-gap: 33px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: white;
  // margin-top: 30px;
  position: relative;
  top: -53px;

  .grid-item {
    border-radius: 10px;
    box-shadow: $box-shadow;
    widows: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    position: relative;
    background-color: #eee;
    .text_wrapper {
      margin-top: 100%;
    //    background: red;
      bottom: 0;
      position: absolute;
      line-height: 0;
      margin-left: 20px;
      text-align: left;
      div:nth-child(1){
          display:flex;
          height:20px;
          width:150px;
           background-color: #eee;
           box-shadow: $box-shadow; 
           margin-bottom: 10px;
      }
      div:nth-child(2){
          display:flex;
          height:20px;
          width:100px;
           background-color: #eee;
           box-shadow: $box-shadow; 
           margin-bottom: 15px;
      }
    
    }
    
  }

  @media (max-width: 678px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-columns: minmax(0px, 6px);
  }
}

.grid-item:nth-child(1) {
  grid-column: 1/2;
  grid-row: 1/3;
  @media (max-width: 678px) {
    grid-column:1/3 ;
  }
 @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 1/4;
  }


}
.grid-item:nth-child(2) {
  grid-column: 2/3;
  grid-row: 1/4;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 1/4;
  }
   @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 4/7;
  }

}
.grid-item:nth-child(3) {
  grid-column: 3/4;
  grid-row: 1/3;
  @media (max-width: 678px) {
    grid-column: 1/3;
    grid-row: 3/6;
  }
  @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 7/10;
  }
  
}
.grid-item:nth-child(4) {
  grid-column: 1/2;
  grid-row: 3/6;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 4/7;
  }
  @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 10/13;
  }
}
.grid-item:nth-child(5) {
  grid-column: 2/3;
  grid-row: 4/7;
  @media (max-width: 678px) {
    grid-column: 1/3;
    grid-row: 6/9;
  }
   @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 13/16;
  }
}
.grid-item:nth-child(6) {
  grid-column: 3/4;
  grid-row: 3/6;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 7/9;
  }
  @media (max-width: 459px) {
    grid-column: 1/9;
    grid-row: 16/19;
  }
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    // height: 100px;
    position: relative;
}
</style>
