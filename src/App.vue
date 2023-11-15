<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import routeNames from '@router/routeName'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@src/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 子组件 -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="`/${routeNames.about}`">About</RouterLink>
        <RouterLink :to="`/${routeNames.emit}`">Emit</RouterLink>
        <RouterLink :to="`/${routeNames.fallthrough}`">Fallthrough</RouterLink>
        <RouterLink :to="`/${routeNames.transition}`">Transition</RouterLink>
        <RouterLink :to="`/${routeNames.slot}`">Slot</RouterLink>
        <RouterLink :to="`/${routeNames.propsdrilling}`">PropsDrilling</RouterLink>
        <RouterLink :to="`/${routeNames.destructure}`">Destructure</RouterLink>
        <RouterLink :to="`/${routeNames.computed}`">Computed</RouterLink>
        <RouterLink :to="`/${routeNames.checkbox}`">Checkbox</RouterLink>
        <RouterLink :to="`/${routeNames.watch}`">Watch</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.api {
  &-block {
    width: 100%;
    padding: 10px 0;
  }
}
.color {
  &-black {
    color: black;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
