<template>
    <div class="add__open-modal">
        <span @click="isOpen = !isOpen" class="material-icons add">
            note_add
        </span>
    </div>

    <div v-if="isOpen" class="wrap__modal">
        <div class="modal">
            <div @click="isOpen = !isOpen" class="icon__close-modal">
                <span class="material-icons close">
                    cancel
                </span>
            </div>

            <h2 class="title__modal">Ajouter un produit</h2>

            <form class="form__modal" @submit.prevent="addProduct">

                <div class="modal__input">
                    <label for="productCategory">Category :</label>
                    <select v-model="product.category" name="categorie" id="productCategory">
                        <option value="">Selectioner une categorie</option>
                        <option value="carbon">Carbon</option>
                        <option value="visserie">Visserie</option>
                        <option value="standoff">Standoff</option>
                        <option value="complement">Complement</option>
                    </select>

                </div>



                <div class="modal__input">
                    <label for="productName">Nom du produit :</label>
                    <input id="productName" v-model="product.name" required />
                </div>

                <div class="modal__input">
                    <label for="productQuantity">Quantité :</label>
                    <input id="productQuantity" type="number" v-model.number="product.stock" required />
                </div>

                <div class="modal__input">
                    <label for="productUnit">Unite :</label>
                    <input id="productUnit" v-model="product.unit" required placeholder="Boite, piece..." />
                </div>



                <div class="modal__input">
                    <label for="productPrice">Prix unitaire :</label>
                    <input id="productPrice" type="text" v-model="product.price" required />
                </div>

                <h2>Champs pour la progress-bar</h2>

                <div class="modal__input">
                    <label for="productMaxStock">Stock max :</label>
                    <input id="productMaxStock" type="number" v-model.number="product.maxStock" required />
                </div>

                <div class="modal__input">
                    <label for="orangeThreshold">Seuil orange</label>
                    <input id="orangeThreshold" v-model.number="product.orangeThreshold" placeholder="Seuil Orange"
                        type="number" />
                </div>

                <div class="modal__input">
                    <label for="redThreshold">Seuil rouge</label>
                    <input id="redThreshold" v-model.number="product.redThreshold" placeholder="Seuil Rouge"
                        type="number" />
                </div>

                <Button class="modal__button" type="submit" text="Ajouter" />
            </form>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../data/Firebase/firebase';
import { useToast } from "vue-toastification";
import Button from '../Button/Button.vue';


export default {
    name: 'AddProduct',
    components: {
        Button
    },
    setup() {
        const toast = useToast()
        const isOpen = ref(false)


        const product = ref({
            category: '',
            name: '',
            price: 0,
            stock: 0,
            unit: '',
            maxStock: 0,
            orangeThreshold: 0,
            redThreshold: 0,
        });

        const addProduct = async () => {
            try {
                await addDoc(collection(db, 'products'), product.value);
                product.value = {
                    category: '',
                    name: '',
                    price: 0,
                    stock: 0,
                    unit: '',
                    maxStock: 0,
                    orangeThreshold: 0,
                    redThreshold: 0,
                }; // reset the product
                toast.success("Fourniture ajouter avec succes !")
                isOpen.value = false
            } catch (error) {
                console.error('Erreur lors de l\'ajout du produit: ', error);
                toast.error("une erreur est survenue si cela ce reproduit veuillez contacter votre devellopeur", error)
            }
        };

        return {
            isOpen,
            product,
            addProduct,
        };
    },
};

</script>

<style lang="scss">
.add__open-modal {
    display: flex;
    justify-content: center;
    align-items: center;

    .add {
        padding: 1rem;
        background: var(--grey-color);
        border-radius: 1rem;
        font-size: 3rem;
        color: var(--secondary-color);
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
            color: var(--grey-color);
            background: var(--secondary-color);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }

}
</style>
  