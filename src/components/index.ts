import SearchItem from "./searchItem.vue"

function plugins(Vue: any) {
    Vue.component('search-item', SearchItem);
}
export default plugins;