<template>
<div class="row plain-element">
  <div id="errorContainer">
    <div id="mainContainer">
      <br clear="all"/>

      <div class="error-header text-center"><span class="largeFont">Oops!</span> The Page you requested was not found</div>
      <br clear="right"/>

      <div class="mainContent text-center">
          <p class="p-error">HTTP 404 Error - The page you are looking for appears <br> to have been moved, deleted or does not exist</p>

      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "NotFoundComponent",
}
</script>