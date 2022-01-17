<template>
  <div class="search">
    <img :src="icon" alt="" />
    <input @change="change($event)" type="text" placeholder="Search for photo" />
  </div>
</template>

<script>
import icon from "@/assets/icons/search-solid.svg";
export default {
  data() {
    return {
      icon,
    };
  },

  methods:{
    change(event){
   
    const value =  event.target.value
    this.$EventBus.$emit('change',value)
  }
  }
};
</script>

<style lang="scss" scoped>
.search {
  border: none;
  overflow: auto;
  border-radius: 10px !important;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 100%;
  max-width: 1100px;
  background: white;
  box-shadow: $box-shadow;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:20px;
  input[type="text"] {
    border: 0px;
    width: 67%;
    padding: 10px 10px;
    height: 50px;
    color: #919baa;
      font-size: 1rem;
    
  }
  input[type="text"]:focus {
    outline: 0;
  }
  img {
    margin-left: 23px;
  }
}
@media only screen and (min-width: 150px) and (max-width: 780px) {
  .search {
    width: 95%;
    margin: 0 auto;
  }
}

 ::-webkit-input-placeholder {
      /* Edge */
      color: #919baa;
      font-size: 1rem;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #919baa;
      font-size: 1rem;
    }

    ::placeholder {
      color: #919baa;
      font-size: 1rem;
    }
</style>
