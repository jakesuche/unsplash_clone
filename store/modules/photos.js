const state = {
  photos: [],
  access_key: process.env.accessKey,
  url: "https://api.unsplash.com",
  per_page: 7,
  orientation: ["portrait", "landscape", "squarish"],
  loading: false,
  default:'fun'
};

// getters
const getters = {};
// mutations
const mutations = {
  storePhotos: (state, payload) => {
    state.photos = payload;
  },
  resolveState: (state, payload) => {
    state.query = payload.query;
    state.loading = payload.loading;
  },
};
// actions
const actions = {

  getPhotos({ commit }, query) {
    console.log(this.$config)
    commit("resolveState", { query: query, loading: false });
    console.log(process.env.accessKey, "KEY");
    if(query){
        this.$axios
      .get(
        `${state.url}/search/photos?client_id=${state.access_key}&query=${query ? query : state.default}&per_page=${state.per_page}&orientation=${state.orientation[1]}`
      )
      .then((res) => {
        const photos = res.data.results;
        console.log(res);
        commit("resolveState", { query: query, loading: true });
        commit("storePhotos", photos);
      })
      .catch((err) => {
        console.log(err);
        commit("resolveState", { query: query, loading: true });
      });
    }else{
        this.$axios
      .get(
        `${state.url}/photos?client_id=${state.access_key}&per_page=${state.per_page}&orientation=${state.orientation[1]}`
      )
      .then((res) => {
        const photos = res.data
        console.log(res);
        commit("resolveState", { query: query, loading: true });
        commit("storePhotos", photos);
      })
      .catch((err) => {
        console.log(err);
        commit("resolveState", { query: query, loading: true });
      });
    }
    
  },
  
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
