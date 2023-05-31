<template>
    <div class="products">
        <AddProducts />

        <div class="products__wrap">
            <ProductCard v-for="item in items" :key="item.id" :product="item" />
        </div>
    </div>
</template>

<script>
import { collection, onSnapshot, where, query, orderBy } from 'firebase/firestore';
import AddProducts from '../components/Products/AddProducts.vue';
import ProductCard from '../components/Products/ProductCard.vue';
import { db } from '../data/Firebase/firebase';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: "Products",
    components: {
        AddProducts,
        ProductCard
    },
    setup() {
        const items = ref([])

        const fetchProducts = () => {
            const route = useRoute();

            const q = query(collection(db, "products"), where("category", "==", route.params.category), orderBy("name"));

            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                });
                items.value = fetchedProducts;
            });
        };

        onMounted(fetchProducts);

        return {
            items
        }
    }
}
</script>

<style lang="scss">
.products {
    padding: 1rem;


    .products__wrap {
        display: flex;
        flex-wrap: wrap;

    }

}
</style>