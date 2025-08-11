<template>
<NotFoundComponent/>
</template>


<script>
import NotFoundComponent from "@/components/NotFoundComponent.vue"

export default {
  name: "NotFound",
  components: {
    NotFoundComponent
  },
  created() {
    document.title = "Not Found";
    window.scrollTo(0,0);
  }
}
</script>
