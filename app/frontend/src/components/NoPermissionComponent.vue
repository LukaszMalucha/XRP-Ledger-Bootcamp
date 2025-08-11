<template>
<div class="row plain-element">
<p class="w-100"></p>
  <div class="card login-card">
    <div class="row plain-element">
    </div>
    <div class="row row-break"></div>
    <div class="row row-break"></div>
    <div class="row plain-element text-center">
        <a href="/accounts/login/" type="submit" class="btn btn-login-card">Login Page</a>
    </div>
  </div>
</div>

</template>

<script>
import { mapGetters, } from 'vuex';

export default {
  name: "NoPermissionComponent",
  methods: {
    ...mapGetters(['getCompanyString']),
  },
}
</script>
