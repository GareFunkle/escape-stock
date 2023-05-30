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
    margin: 0;
    padding: 0;
    width: calc(100% + 2rem); // Ajuste la largeur pour tenir compte des marges ou du padding
    height: 20px;
    background-color: #eee;

    .progress-bar__fill {
        height: 100%;
        background-color: #4caf50;
    }
}
</style>
  