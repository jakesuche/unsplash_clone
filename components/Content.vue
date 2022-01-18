<template>
  <div class="content" v-if="photos.length > 0">
    <div
      @click="showModal(photo)"
      :style="{ backgroundImage: `url(${photo.urls.small})` }"
      class="grid-item"
      v-for="(photo, i) in photos.slice(0, 6)"
      :key="i"
    >
      <div class="background"></div>
      <section class="text_wrapper">
        <h3>{{ ` ${photo.user.first_name} ${photo.user.last_name}` }}</h3>
        <h5>{{ photo.user.location || 'Location not available' }}</h5>
      </section>
    </div>

    <!-- modal start -->
    <Modal v-show="isModalVisible" @close="closeModal">
      <img
        class="modal_image"
        :src="selected.urls ? selected.urls.full : null"
      />
      <div class="footer">
        <h3 v-if="selected.user" class="footer_title">
          {{ ` ${selected.user.first_name} ${selected.user.last_name}` }}
        </h3>
        <h5 v-if="selected.user" class="footer_sub_title">
          {{ selected.user.location || 'Location not available' }}
        </h5>
      </div>
    </Modal>
    <!-- modal end -->
  </div>

  <Nodata :query="query" v-else />
</template>

<script>
export default {
  props: ["photos", "query"],
  transition: {
    name: "flip",
    mode: "out-in",
    appear: true,
    beforeEnter(el) {
      console.log(el);
    },
  },
  data() {
    return {
      isModalVisible: false,
      selected: "",
    };
  },
  methods: {
    showModal(data) {
      this.selected = data;
      // this.isModalVisible = true;
      var ref = this
      setTimeout(()=>{
        ref.isModalVisible = true
      },100)
       
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

  // grid-gap: 33px;
  grid-gap: 29px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: white;
  animation: fadeIn 1s ease-in-out;
  position: relative;
  top: -53px;
  .modal_image {
    width: 100%;
    border: none;
    height:100%;
    max-height: 500px;
    object-fit: cover;
    border-start-end-radius: 9px;
    border-start-start-radius: 9px;
  }
  .footer {
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
    height: 55px;
    line-height: 0;
    text-align: justify;
    margin-left: 55px;
    .footer_title {
      color: #4a6f8e;
    }
    .footer_sub_title {
      color: #4a6f8e;
    font-weight: 500;
    opacity: 0.7;
    }
  }

  .grid-item {
    border-radius: 10px;
    box-shadow: $box-shadow;
    widows: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    position: relative;

    .background {
      position: absolute;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 0.707) 11%,
        rgba(142, 142, 157, 0.11668417366946782) 48%
      );
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
    .text_wrapper {
      margin-top: 100%;
      bottom: 0;
      position: absolute;
      line-height: 0;
      margin-left: 20px;
      text-align: left;
      background: none;
      h5{
        opacity: 0.7;
      font-weight: 500;
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
  //  min-height: 350px;

  @media (max-width: 678px) {
    grid-column: 1/3;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 1/3;
  }
}
.grid-item:nth-child(2) {
  grid-column: 2/3;
  grid-row: 1/4;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 1/4;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 3/5;
  }
}
.grid-item:nth-child(3) {
  grid-column: 3/4;
  grid-row: 1/3;
  @media (max-width: 678px) {
    grid-column: 1/3;
    grid-row: 3/6;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 5/7;
  }
}
.grid-item:nth-child(4) {
  grid-column: 1/2;
  grid-row: 3/6;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 4/7;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 7/9;
  }
}
.grid-item:nth-child(5) {
  grid-column: 2/3;
  grid-row: 4/7;
  @media (max-width: 678px) {
    grid-column: 1/3;
    grid-row: 6/9;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 9/11;
  }
}
.grid-item:nth-child(6) {
  grid-column: 3/4;
  grid-row: 3/6;
  @media (max-width: 678px) {
    grid-column: 3/9;
    grid-row: 7/9;
  }
  @media (max-width: 375px) {
    grid-column: 1/9;
    grid-row: 11/13;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
