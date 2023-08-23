import { defineStore } from "pinia";

export const useSiteStore = defineStore('site', {
    state() {
        return {
            navLinks: [
                {
                    text: 'Hjem',
                    icon: 'mdi-home',
                    route: '/'
                },
                {
                    text: 'Montører',
                    icon: 'mdi-account',
                    route: encodeURI('/Montør')
                }
                ,
                {
                    text: 'Overmontører',
                    icon: 'mdi-account-supervisor',
                    route: encodeURI('/Overmontør')
                }
            ]
        }
    }
});