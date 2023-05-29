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
:root {
  --primary-color: #28527a;
  --secondary-color: #f4f9f9;
  --accent-color: #ffc93c;
  --background-color: #1a1a2e;
  --error-color: #e94560;
}

* {

  box-sizing: border-box;

}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: var(--secondary-color);

  .material-icons {
    padding: 1rem;
    background: var(--accent-color);
    border-radius: 1rem;
    font-size: 3rem;
    color: var(--background-color);
    transition: all 0.3s ease-in;
    cursor: pointer;

    &:hover {
      color: var(--accent-color);
      background: var(--background-color);
    }
  }

}

@media screen and (max-width: 768px) {

  .home__products,
  .products__wrap {
    justify-content: center;
  }

}
</style>
