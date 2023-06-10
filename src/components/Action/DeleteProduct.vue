<template>
    <span @click="isOpen = !isOpen" class="material-icons delete">
        delete
    </span>

    <div v-if="isOpen" class="open__modal">
        <div class="modal">
            <h4 class="modal__title">Ete vous sur de vouloir supprimer {{ productName }}</h4>

            <div class="modal__button-wrap">
                <Button type="deleted" text="Supprimer" @click="deleteProduct" />
                <Button type="submit" text="Non" @click="isOpen = !isOpen" />
            </div>

        </div>
    </div>
</template>
  
<script>
import { db } from '../../data/Firebase/firebase'
import { doc, deleteDoc } from 'firebase/firestore';
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import Button from '../Button/Button.vue';

export default {
    name: 'DeleteProduct',
    components: {
        Button
    },
    props: ['productId', 'productName'],
    setup(props) {
        const toast = useToast()
        const isOpen = ref(false)

        const deleteProduct = async () => {
            try {
                await deleteDoc(doc(db, 'products', props.productId));
                isOpen.value = false;
                toast.success("Vous avez supprimer " + props.productName)

            } catch (error) {
                console.error('Erreur lors de la suppression du produit: ', error);
                toast.error("une erreur est survenue si cela persiste veuillez contacter votre developpeur", error)

            }
        };

        return {
            isOpen,
            deleteProduct
        };
    }
}
</script>

<style lang="scss">
.delete {
    color: var(--error-color);

    &:hover {
        transform: scale(1.4);
        transition: all 0.3s ease-in;
    }
}

.open__modal {
    background: #00000081;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--secondary-color);
        padding: 1rem;
        height: auto;
        border: 2px solid var(--primary-color);
        border-radius: 1rem;
        z-index: 6;

        .modal__title {
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
  