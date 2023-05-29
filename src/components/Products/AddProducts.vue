<template>
    <div>
        <h2>Ajouter un produit</h2>

        <form @submit.prevent="addProduct">
            <div>
                <label for="productName">Nom du produit :</label>
                <input id="productName" v-model="productName" required />
            </div>

            <div>
                <label for="productQuantity">Quantité :</label>
                <input id="productQuantity" type="number" v-model.number="productQuantity" required />
            </div>

            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../data/Firebase/firebase';

export default {
    setup() {
        const productName = ref('');
        const productQuantity = ref(1);

        async function addProduct() {
            await addDoc(collection(db, 'products'), {
                name: productName.value,
                quantity: productQuantity.value,
            });

            productName.value = '';
            productQuantity.value = 1;
        }

        return { productName, productQuantity, addProduct };
    },
};
</script>
  