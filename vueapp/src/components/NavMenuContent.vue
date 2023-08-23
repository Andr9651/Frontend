<template>
    <v-list nav density="compact">
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <template v-slot:prepend>
                <v-icon>{{ link.icon }}</v-icon>
            </template>

            <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>


    </v-list>
</template>

<script setup>

const links = [
    {
        text: 'Hjem',
        icon: 'mdi-home',
        route: '/'
    },
    {
        text: 'Montører',
        icon: 'mdi-account',
        route: '/Montør'
    }
    ,
    {
        text: 'Overmontører',
        icon: 'mdi-account-supervisor',
        route: encodeURI('/Overmontør')
    }
]

</script>