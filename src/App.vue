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
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');

* {

  box-sizing: border-box;
  // box-shadow: 0 0 0 3px red inset;
  font-family: 'Alegreya Sans', sans-serif;
}

:root {
  --primary-color: #28527a;
  --secondary-color: #f4f9f9;
  --accent-color: #ffc93c;
  --background-color: #1a1a2e;
  --grey-color: #333;
  --green-color: #4caf50;
  --error-color: #e94560;
}


body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: var(--secondary-color);

  label {
    margin-bottom: 5px;
    font-weight: 500;
  }

  select {
    border: none;
    outline: 1px solid var(--grey-color);
    border-radius: 4rem;
  }

  input {
    border: none;
    outline: 1px solid var(--grey-color);
    border-radius: 4rem;
  }


}

@media screen and (max-width: 768px) {

  .home__products,
  .products__wrap {
    justify-content: center;
  }

}
</style>
