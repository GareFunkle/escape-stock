<template>
    <div class="home">
        <AddProducts />
        <h1>Mes fournitures</h1>

        <div class="home__products">
            <ProductCard v-for="item in items" :key="item.id" :product="item" />
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../data/Firebase/firebase';
import AddProducts from '../components/Products/AddProducts.vue';
import ProductCard from '../components/Products/ProductCard.vue';
export default {
    name: "Home",
    components: {
        AddProducts,
        ProductCard
    },
    setup() {
        const items = ref([]);

        const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
            items.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });

        onUnmounted(unsubscribe);

        return { items };
    },
}
</script>

<style lang="scss">
.home {
    padding: 1rem;


    .home__products {
        display: flex;
        flex-wrap: wrap;

    }

}
</style>