<template>
    <div class="card__products">
        <h3 class="card__title">{{ product.name }}</h3>
        <p class="card__quantity">{{ product.stock }} / {{ product.maxStock }} {{ product.unit }}</p>
        <p class="card__price">{{ product.price }} € </p>
        <div class="card__action">
            <IncrementProduct :productQuantity="product.stock" :productId="product.id" />
            <DecrementProduct :productQuantity="product.stock" :productId="product.id" />
            <UpdateProduct :productId="product.id" />
            <DeleteProduct :productName="product.name" :productId="product.id" />
        </div>
        <div class="wrap__progress-bar">
            <ProgressBar :product="product" />

        </div>
    </div>
</template>

<script>
import IncrementProduct from '../Action/IncrementProduct.vue';
import DecrementProduct from '../Action/DecrementProduct.vue';
import UpdateProduct from '../Action/UpdateProduct.vue';
import DeleteProduct from '../Action/DeleteProduct.vue';
import ProgressBar from '../Progress/ProgressBar.vue';
export default {
    name: "ProductCard",
    components: {
        IncrementProduct,
        DecrementProduct,
        UpdateProduct,
        DeleteProduct,
        ProgressBar
    },
    props: {
        product: Object
    }
}
</script>

<style lang="scss">
.card__products {
    width: 100%;
    margin-right: 1rem;
    margin-top: 1rem;
    height: auto;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--grey-color);
    color: var(--grey-color);
    border-radius: calc(5rem / 3);
    transition: all 0.3s ease-in;
    box-sizing: border-box;

    &:hover {
        background: var(--grey-color);
        color: var(--secondary-color);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .card__title {
        font-size: 1.4rem;
    }

    .card__quantity {
        font-size: 1.2rem;
    }

    .card__price {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .card__action {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .wrap__progress-bar {
        margin-top: 1rem;
        width: 100%;
    }
}
</style>