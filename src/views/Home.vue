<template>
    <h1>Fusion Stock</h1>
    <AddProducts />

    <span class="material-icons">
        note_add
    </span>

    <div>
        <h1>Mes fournitures</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}: {{ item.quantity }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../data/Firebase/firebase';
import AddProducts from '../components/Products/AddProducts.vue';
export default {
    name: "Home",
    components: {
        AddProducts
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

<style></style>