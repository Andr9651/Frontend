import { defineStore } from "pinia";

export const useSuperTechnicianStore = defineStore('superTechnician', {
  state() {
    return {
      superTechnicians: [],
      subTechnicians:[],
      currentlySelected: {
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
      },
      count: 0
    }
  },
  actions: {
    resetCurrentlySelected() {
      this.currentlySelected = {
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
      }
    },
    async create(technician) {
      const baseUrl = '/api/SuperTechnician';

      const fetchHeaders = {
        'Content-Type': 'application/json'
      }

      const fetchOptions = {
        method: 'POST',
        headers: fetchHeaders,
        body: JSON.stringify(technician)
      }

      const response = await fetch(baseUrl, fetchOptions);

      return response.ok
    },
    async getMany(pageNumber, pageSize) {
      const baseUrl = "/api/SuperTechnician?";

      //Api counts from 0
      const queryParameters = new URLSearchParams({
        pageNumber: pageNumber - 1,
        pageSize: pageSize
      })

      const response = await fetch(baseUrl + queryParameters);

      this.count = response.headers.get('x-total-count')

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
    async getSubTechnicians(id, pageNumber, pageSize){
      const baseUrl = `/api/SuperTechnician/${id}/SubTechnicians?`;

      // Api counts from 0
      const queryParameters = new URLSearchParams({
        pageNumber: pageNumber - 1,
        pageSize: pageSize
      })

      const response = await fetch(baseUrl + queryParameters);

      this.count = response.headers.get('x-total-count')

      const json = await response.json();

      // direct assignment to subtechnicians would break reactivity
      for (let i = 0; i < json.length; i++) {
        this.subTechnicians[i] = json[i];
      }
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
    async deleteTechnician(id) {
      this.superTechnicians = this.superTechnicians.filter((item)=>item.id != id)

      const baseUrl = `/api/SuperTechnician/${id}`;

      const fetchOptions = {
        method: 'DELETE'
      }

      const response = await fetch(baseUrl, fetchOptions);
      if (response.ok) {
        this.superTechnicians.spl
      }
      return response.ok
    }
  }
});