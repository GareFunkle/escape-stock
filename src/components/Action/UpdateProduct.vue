<template>
    <span @click="isOpen = !isOpen" class="material-icons update">
        update
    </span>


    <div v-if="isOpen" class="update__product">
        <div class="update__product-modal">
            <div @click="isOpen = !isOpen" class="icon__close-modal">
                <span class="material-icons close">
                    cancel
                </span>
            </div>
            <h2 class="title__modal">Mettre a jour un produit</h2>
            <div class="form__modal">
                <div class="modal__input">
                    <label for="productCategory"> Categorie :</label>
                    <input id="productCategory" v-model="product.category" placeholder="Nom du produit" />
                </div>
                <div class="modal__input">
                    <label for="productName"> Nom du produit :</label>

                    <input id="productName" v-model="product.name" placeholder="Nom du produit" />
                </div>
                <div class="modal__input">
                    <label for="productQuantity"> Quantité :</label>
                    <input id="productQuantity" v-model="product.stock" placeholder="Quantité" type="number" />
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

                <Button class="modal__button" @click="updateProduct" type="submit" text="Mettre à jour" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { db } from '../../data/Firebase/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import Button from '../Button/Button.vue';

export default {
    name: 'UpdateProduct',
    components: {
        Button
    },
    props: ['productId'],
    setup(props) {

        const isOpen = ref(false)

        const product = ref({
            category: '',
            name: '',
            stock: 0,
            price: 0,
            maxStock: 0,
            orangeThreshold: 0,
            redThreshold: 0,
        });

        onMounted(async () => {
            const productDoc = await getDoc(doc(db, 'products', props.productId));
            if (productDoc.exists()) {
                product.value = productDoc.data();
            }
        });

        const updateProduct = async () => {
            try {
                await updateDoc(doc(db, 'products', props.productId), {
                    category: product.value.category,
                    name: product.value.name,
                    stock: product.value.stock,
                    price: product.value.price,
                    maxStock: product.value.maxStock,
                    orangeThreshold: product.value.orangeThreshold,
                    redThreshold: product.value.redThreshold,
                });
                console.log('Produit mis à jour avec succès');
                isOpen.value = false
            } catch (error) {
                console.error('Erreur lors de la mise à jour du produit: ', error);
            }
        };

        return {
            isOpen,
            product,
            updateProduct,
        };
    },
};
</script>

<style lang="scss">
.update {
    color: var(--accent-color);
    transform: scale(1);
    transition: all 0.3s ease-in;
    margin-right: 1rem;

    &:hover {
        transform: scale(1.4);
        transition: all 0.3s ease-in;
    }
}

.update__product {
    background: #00000081;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .update__product-modal {
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
  