<template>
  <Menu />
  <router-view :key="$route.fullPath">
  </router-view>
</template>

<script>
import Menu from './components/Menu/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss">
* {

  box-sizing: border-box;
  // box-shadow: 0 0 0 3px red inset;
}

:root {
  --primary-color: #28527a;
  --secondary-color: #f4f9f9;
  --accent-color: #ffc93c;
  --background-color: #1a1a2e;
  --error-color: #e94560;
}


body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: var(--secondary-color);



}

@media screen and (max-width: 768px) {

  .home__products,
  .products__wrap {
    justify-content: center;
  }

}
</style>
