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
                    <label for="productCategory">Categorie :</label>
                    <input id="productCategory" v-model="productCategory" required />
                </div>

                <div class="modal__input">
                    <label for="productName">Nom du produit :</label>
                    <input id="productName" v-model="productName" required />
                </div>

                <div class="modal__input">
                    <label for="productQuantity">Quantité :</label>
                    <input id="productQuantity" type="number" v-model.number="productQuantity" required />
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
    components: {
        Button
    },
    setup() {
        const isOpen = ref(false)
        const productCategory = ref('')
        const productName = ref('');
        const productQuantity = ref(1);

        async function addProduct() {
            await addDoc(collection(db, 'products'), {
                category: productCategory.value,
                name: productName.value,
                quantity: productQuantity.value,
            });
            productCategory.value = ''
            productName.value = '';
            productQuantity.value = 1;
            isOpen.value = false
        }

        return { isOpen, productCategory, productName, productQuantity, addProduct };
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
  