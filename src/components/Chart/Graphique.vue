<template>
    <div class="chart">
        <canvas id="bar-chart"></canvas>
    </div>
</template>
  
<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
        chartData: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
  