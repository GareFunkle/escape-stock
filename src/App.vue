<template>
  <Menu />
  <router-view>
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
}
</style>
