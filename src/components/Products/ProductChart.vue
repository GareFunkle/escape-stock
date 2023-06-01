<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>
  
<script>
import { onBeforeMount } from 'vue';
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../data/Firebase/firebase';

export default {
    setup() {
        const productsRef = collection(db, 'products');

        onBeforeMount(async () => {
            const productsSnap = await getDocs(productsRef);
            const products = productsSnap.docs.map(doc => doc.data());

            const labels = products.map(product => product.name);
            const data = products.map(product => product.stock);

            new Chart(document.getElementById('myChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Stock',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { beginAtZero: true },
                        y: { beginAtZero: true }
                    }
                }
            });
        });
    }
};
</script>
  