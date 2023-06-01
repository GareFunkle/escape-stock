<template>
    <span @click="isOpen = !isOpen" class="material-icons minus">
        remove
    </span>

    <div class="edit__product" v-if="isOpen">
        <div class="edit__modal">
            <div @click="isOpen = !isOpen" class="icon__close-modal">
                <span class="material-icons close">
                    cancel
                </span>
            </div>
            <h2 class="title__modal">Décrémenter</h2>
            <div class="form__modal">
                <div class="modal__input">

                    <input v-model.number="quantityToAdd" type="number" placeholder="Quantité à ajouter" />
                </div>
                <Button class="modal__button" @click="addStock" type="submit" text="Ajouter" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { db } from '../../data/Firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore';
import Button from '../Button/Button.vue';

export default {
    name: 'DecrementStock',
    components: {
        Button
    },
    props: ['productId', 'productQuantity'],
    setup(props) {
        const isOpen = ref(false)
        const quantityToAdd = ref(0);

        const addStock = async () => {
            try {
                await updateDoc(doc(db, 'products', props.productId), {
                    stock: Math.max(0, props.productQuantity - quantityToAdd.value)
                });
                console.log('Stock mis à jour avec succès');
                quantityToAdd.value = 0;
                isOpen.value = false;
            } catch (error) {
                console.error('Erreur lors de la mise à jour du stock: ', error);
            }
        };

        return {
            isOpen,
            quantityToAdd,
            addStock,
        };
    },
};
</script>
<style lang="scss">
.minus {
    color: var(--error-color);
    transform: scale(1);
    transition: all 0.3s ease-in;
    margin-right: 1rem;

    &:hover {
        transform: scale(1.4);
        transition: all 0.3s ease-in;
    }
}

.edit__product {
    background: #00000081;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .edit__modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--secondary-color);
        padding: 1rem;
        height: auto;
        border: 2px solid var(--grey-color);
        border-radius: 1rem;
        z-index: 6;



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
  