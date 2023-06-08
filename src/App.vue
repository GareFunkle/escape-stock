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
    color: var(--grey-color);
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

  .material-icons {
    cursor: pointer;
  }



  .wrap__modal {
    background: #00000081;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .modal {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--secondary-color);
      padding: 1rem;
      height: auto;
      border: 2px solid var(--grey-color);
      border-radius: 1rem;

      .icon__close-modal {
        display: flex;
        justify-content: end;


        .close {
          color: var(--error-color);
          font-size: 1rem;
          background: none;
          padding: 0.2rem;
          transition: all 0.3s ease-in;

          &:hover {
            transform: scale(0.9);
            transition: all 0.3s ease-in;

          }

        }

      }

      .title__modal {
        color: var(--grey-color);
      }

      .modal__title {
        color: var(--grey-color);

      }

      .form__modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .modal__input {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-top: 0.5rem;
          width: 100%;


        }

        .modal__button {
          margin-top: 1rem;
        }
      }
    }
  }


}



@media screen and (max-width: 768px) {

  .home__products,
  .products__wrap {
    justify-content: center;
  }


  .modal {
    width: 80%;
  }

}
</style>
