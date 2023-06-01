<template>
    <div class="home">
        <AddProducts />
        <div class="wrap__category">

            <div class="category">
                <router-link class="category__link" to="carbon">carbon</router-link>
            </div>
            <div class="category">
                <router-link class="category__link" to="visserie">visserie</router-link>
            </div>
            <div class="category">
                <router-link class="category__link" to="standoff">standoff</router-link>
            </div>
            <div class="category">
                <router-link class="category__link" to="complement">complement</router-link>
            </div>

        </div>
    </div>
</template>

<script>
import AddProducts from '../components/Products/AddProducts.vue';
import ProductCard from '../components/Products/ProductCard.vue';
export default {
    name: "Home",
    components: {
        AddProducts,
        ProductCard
    },
}
</script>

<style lang="scss">
.home {
    padding: 1rem;

    .wrap__category {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .category {
            margin: 1rem;
            padding: 1rem;
            width: 100%;
            background: var(--grey-color);
            display: flex;
            justify-content: center;

            .category__link {
                text-decoration: none;
                color: var(--secondary-color);
                font-size: calc(16px + 6 * ((100vw - 320px) / 680));
            }
        }
    }


}
</style>