import { defineStore } from "pinia";

export const useSubTechnicianStore = defineStore('subTechnician', {
    state() {
        return {
            subTechnicians: [],
            currentlySelected: null
        }
    },

    actions: {
        async getMany() {

            const baseUrl = "/api/SubTechnician";

            const response = await fetch(baseUrl);
            const json = await response.json();

            // direct assignment to supertechnicians would break reactivity
            for (let i = 0; i < json.length; i++) {
                this.subTechnicians[i] = json[i];
            }
        }
    }

});