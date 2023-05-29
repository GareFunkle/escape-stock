<template>
    <span @click="deleteProduct" class="material-icons delete">
        delete
    </span>
</template>
  
<script>
import { db } from '../../data/Firebase/firebase'
import { doc, deleteDoc } from 'firebase/firestore';

export default {
    name: 'DeleteProduct',
    props: ['productId'],
    setup(props) {
        const deleteProduct = async () => {
            try {
                await deleteDoc(doc(db, 'products', props.productId));
                console.log('Produit supprimé avec succès');
            } catch (error) {
                console.error('Erreur lors de la suppression du produit: ', error);
            }
        };

        return {
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
</style>
  