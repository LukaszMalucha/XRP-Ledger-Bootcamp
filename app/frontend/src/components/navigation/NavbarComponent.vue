<template>
<nav class="row navbar navbar-default top-navbar" role="navigation" style="background-color: transparent; width:50%;">
    <div class="col col-xs-12 col-sm-2 col-md-2 col-lg-2 plain-element col-logo text-center">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <i class="fa-solid fa-compass"></i> Home Office
        </a>
      </div>
    </div>
    <div class="col col-xs-8 col-sm-8 col-md-5 col-lg-10 plain-element col-search text-left">
        <div class="plain-element nav-searchbox searchbox-long">
          <form>
            <input id="searchbox" type="text" placeholder="Search" aria-label="" class="form-control" @click="zip">
            <button type="submit" class="btn-transparent"><i aria-hidden="true" class="fas fa-search search-icon"></i></button>
          </form>
        </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavbarComponent",

  methods: {

  }
}
</script>