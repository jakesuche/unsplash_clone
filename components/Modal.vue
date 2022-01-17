<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close()">
          &times;
        </button>
      </header>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scope>
.modal {
  //   display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  .modal-content {
    background-color: #fefefe;
    margin: auto;

    border: 1px solid #888;
    width: 100%;
    max-width: 726px;
    height: auto;
    margin-top: -72px;
    animation: zoom-in-zoom-out 1s ease-in-out;
    border-radius: 10px;
    position: relative;
    @media (max-width: 763px) {
      max-width:95%;
      margin-top: 41px;

    }
    .modal-header {
      padding: 15px;
      display: flex;
      position: absolute;
      color: #4aae9b;
      justify-content: space-between;
      padding: 15px;
      display: flex;
      top: -42px;
      background: none;
      right: -99px;
      background: none;
      @media (max-width: 871px) {
        top: -12px;
        right: 0;
      }
      .btn-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #a2bac5;
        font-size: 33px;
      }
    }
  }
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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
