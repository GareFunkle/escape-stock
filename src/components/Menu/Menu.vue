<template>
    <header>
        <nav>
            <h1 class="logo">Fusion Stock</h1>
            <div class="menu-toggle" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="nav" :class="{ 'is-active': isActive }">
                <li><router-link to="/">Toute les Categories</router-link></li>
                <li><router-link to="/carbon">Carbon</router-link></li>
                <li><router-link to="/visserie">Visserie</router-link></li>
                <li><router-link to="/stand-off">Stand-Off</router-link></li>
                <li><router-link to="/supplement">Supplement</router-link></li>

            </ul>
        </nav>
    </header>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const isActive = ref(false);
        const toggleMenu = () => {
            isActive.value = !isActive.value;
        };

        return { isActive, toggleMenu };
    },
};
</script>
  
<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 0.7em 2em;
    position: relative;

}

.logo {
    font-size: 1.5em;
}

.nav {
    list-style: none;
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    background-color: #333;
    transition: all 0.3s ease-in;
    z-index: 10;


    li {
        margin: 1.5em 0;
        text-align: center;
    }

    a {
        color: white;
        text-decoration: none;
    }

    &.is-active {
        display: flex;
    }
}

.menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2em;
    height: 1.5em;

    .bar {
        height: 0.2em;
        background-color: white;
        border-radius: 10px;
    }
}

@media screen and (min-width: 768px) {
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: end;
        position: static;
        background-color: transparent;
        align-items: center;


        li {
            margin: 0 1.5em;
        }
    }

    .menu-toggle {
        display: none;
    }

}
</style>
  