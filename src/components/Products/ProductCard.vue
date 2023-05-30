<template>
    <div class="card__products">
        <h3 class="card__title">{{ product.name }}</h3>
        <p>{{ product.quantity }}</p>
        <p>{{ product.price }} € </p>
        <div class="card__action">
            <EditProduct :productQuantity="product.quantity" :productId="product.id" />
            <UpdateProduct :productId="product.id" />
            <DeleteProduct :productName="product.name" :productId="product.id" />
        </div>
        <div class="wrap__progress-bar">
            <ProgressBar :product="product" />

        </div>
    </div>
</template>

<script>
import EditProduct from '../Action/EditProduct.vue';
import UpdateProduct from '../Action/UpdateProduct.vue';
import DeleteProduct from '../Action/DeleteProduct.vue';
import ProgressBar from '../Progress/ProgressBar.vue';
export default {
    name: "ProductCard",
    components: {
        EditProduct,
        UpdateProduct,
        DeleteProduct,
        ProgressBar
    },
    props: {
        product: Object
    },
    setup(props) {
        console.log('product:', props.product);
    }
}
</script>

<style lang="scss">
.card__products {
    margin-right: 1rem;
    margin-top: 1rem;
    height: auto;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--primary-color);
    border-radius: calc(5rem / 3);
    cursor: pointer;
    transition: all 0.3s ease-in;
    box-sizing: border-box;

    &:hover {
        background: var(--primary-color);
    }

    .card__action {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>