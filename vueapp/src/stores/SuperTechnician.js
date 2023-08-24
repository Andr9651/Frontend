import { defineStore } from "pinia";

export const useSuperTechnicianStore = defineStore('superTechnician', {
    state() {
        return {
            superTechnicians: [],
            currentlySelected: null
        }
    },

    getters: {
        empty: () => ({
            firstName: "",
            middleName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        }),
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
        },
        async getSingle(id) {
            const baseUrl = `/api/SuperTechnician/${id}`;

            const response = await fetch(baseUrl);
            const json = await response.json();

            this.currentlySelected = json;

        },
        async update(technician) {
            const baseUrl = `/api/SuperTechnician/${technician.id}`;

            const fetchHeaders = {
                'Content-Type': 'application/json'
            }

            const fetchOptions = {
                method: 'PUT',
                headers: fetchHeaders,
                body: JSON.stringify(technician)
            }

            const response = await fetch(baseUrl, fetchOptions);

            return response.ok
        },
        async delete(id) {
            const baseUrl = `/api/SuperTechnician/${id}`;

            const fetchOptions = {
                method: 'delete'
            }

            const response = await fetch(baseUrl, fetchOptions);

            return response.ok
        }
    }
});