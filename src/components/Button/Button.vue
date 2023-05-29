<template>
    <button class="custom-button" :class="buttonType">
        {{ buttonText }}
    </button>
</template>
  
<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "CustomButton",
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "default",
        },
    },
    setup(props) {
        const buttonText = computed(() => {
            return props.text;
        });

        const buttonType = computed(() => {
            return props.type;
        });

        return {
            buttonText,
            buttonType
        };
    },
});
</script>
  
<style scoped>
.custom-button {
    border: none;
    color: var(--secondary-color);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    padding: 10px 24px;
    border-radius: 4px;
    transition-duration: 0.4s;
}

.custom-button.default {
    background-color: var(--background-color);
}

.custom-button.submit {
    background-color: var(--background-color);

}

.custom-button.deleted {
    background-color: var(--error-color);
}

.custom-button.default:hover,
.custom-button.deleted:hover {
    background-color: rgb(181, 33, 33);
}

.custom-button.submit:hover {
    background-color: var(--primary-color);
}
</style>