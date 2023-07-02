import { ref } from "vue";
import { defineStore } from "pinia";

export const useViewsStore = defineStore("view", ()=>{
    const view = ref({
        name: "",
        isGalery: true,
    });
    const chanceView = (newView, activeGalery) => {
        view.value.name = newView;
        view.value.isGalery = activeGalery;
    };

    return { view, chanceView };
});