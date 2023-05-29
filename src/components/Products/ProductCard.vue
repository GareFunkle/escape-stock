<template>
    <div class="card__products">
        <h3 class="card__title">{{ product.name }}</h3>
        <p>{{ product.quantity }}</p>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        product: Object
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

    &:hover {
        background: var(--primary-color);
    }
}
</style>