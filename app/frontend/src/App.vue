<template>
  <div id="app">
    <NavbarComponent/>
    <router-view/>
  </div>
</template>

<script>

import NavbarComponent from "@/components/navigation/NavbarComponent.vue"

export default {
    name: "App",
    components: {
        NavbarComponent,
    },
    methods: {


    },
    computed: {

    },
    created() {
    }
}
</script>