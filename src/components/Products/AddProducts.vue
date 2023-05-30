<template>
    <div class="add__open-modal">
        <span @click="isOpen = !isOpen" class="material-icons">
            note_add
        </span>
    </div>

    <div v-if="isOpen" class="add__products">
        <div class="add__products-modal">
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
                        <option value="comnplement">Complement</option>
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
import Button from '../Button/Button.vue';

export default {
    name: 'AddProduct',
    components: {
        Button
    },
    setup() {
        const isOpen = ref(false)

        const product = ref({
            category: '',
            name: '',
            price: 0,
            stock: 0,
            maxStock: 0,
            orangeThreshold: 0,
            redThreshold: 0,
        });

        const addProduct = async () => {
            try {
                await addDoc(collection(db, 'products'), product.value);
                console.log('Produit ajouté avec succès');
                product.value = {
                    category: '',
                    name: '',
                    price: 0,
                    stock: 0,
                    maxStock: 0,
                    orangeThreshold: 0,
                    redThreshold: 0,
                }; // reset the product

                isOpen.value = false
            } catch (error) {
                console.error('Erreur lors de l\'ajout du produit: ', error);
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

    .material-icons {
        padding: 1rem;
        background: var(--accent-color);
        border-radius: 1rem;
        font-size: 3rem;
        color: var(--background-color);
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
            color: var(--accent-color);
            background: var(--background-color);
        }
    }

}

.add__products {
    background: #00000081;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .add__products-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--secondary-color);
        padding: 1rem;
        height: auto;
        border: 2px solid var(--primary-color);
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

        .form__modal {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .modal__input {
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-top: 1rem;
                width: 100%;
            }

            .modal__button {
                margin-top: 1rem;
            }
        }

    }
}
</style>
  