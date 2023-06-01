<template>
    <div class="progress-bar">
        <div class="progress-bar__fill" :style="{ width: progress + '%', backgroundColor: color }"></div>
    </div>
</template>
  
<script>
import { computed } from 'vue';

export default {
    name: 'ProgressBar',
    props: ['product'],
    setup(props) {
        console.log('product in ProgressBar:', props.product);
        const progress = computed(() => (props.product.stock / props.product.maxStock) * 100);

        const color = computed(() => {
            if (props.product.stock <= props.product.redThreshold) {
                return 'red';
            } else if (props.product.stock <= props.product.orangeThreshold) {
                return 'orange';
            } else {
                return '#4caf50';  // vert par défaut
            }
        });

        return {
            progress,
            color
        };
    }
};
</script>
  
<style lang="scss" scoped>
.progress-bar {
    display: flex;
    margin: 0;
    padding: 0;
    width: auto;
    height: 20px;


    .progress-bar__fill {
        height: 100%;
        background-color: #4caf50;
        border: 1px solid var(--grey-color);
        border-radius: 0 0 5rem 5rem;
        transition: width 0.3s ease-in-out;
    }
}
</style>
  