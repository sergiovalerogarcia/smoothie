<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-1">
      <div class="nav-content">
        <router-link :to="{name: 'home'}">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{name: 'addsmoothie-view'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar nav {
  padding: 0 20px;
}
</style>
