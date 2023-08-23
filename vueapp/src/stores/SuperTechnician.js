import { defineStore } from "pinia";

export const useSuperTechnicianStore = defineStore('superTechnician', {
    state() {
        return {
            superTechnicians: [],
            currentlySelected: null
        }
    },

    getters: {
        empty: () => ({ firstName: "", middleName: "", lastName: "", phoneNumber: "", email: "" }),
    },

    actions: {
        async getMany() {

            const baseUrl = "/api/SuperTechnician";

            const response = await fetch(baseUrl);
            const json = await response.json();

            // direct assignment to supertechnicians would break reactivity
            for (let i = 0; i < json.length; i++) {
                this.superTechnicians[i] = json[i];
            }
        }
    }
});