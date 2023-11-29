<template>
    <div class="p-8">
        <h1 class="font-bold text-xl title_poppins">Dashboard</h1>
        <div class="grid grid-cols-4 gap-5 pt-5">
            <CardEvents :BgCard="card.bgCard" :Icon="card.icon" :Amount="card.amount" :Title="card.title"
                v-for="(card, index) in listCards" :key="index" />
            <div class="col-span-2 shadow-sm bg-white p-4 rounded-lg">
                Prueba 1
            </div>
            <div class="col-span-1 shadow-sm bg-white p-4 rounded-lg">
                Prueba 2
            </div>
            <div class="col-span-1 shadow-sm bg-white p-4 rounded-lg">
                Prueba 3
            </div>
        </div>
    </div>
</template>
<script>
import CardEvents from '@/components/dashboard/CardEvents.vue';
import { ref } from 'vue';

export default ({
    components: {
        CardEvents
    },
    setup() {
        const listCards = ref([
            {
                bgCard: "bg-yellow-400",
                icon: "mdi-bell",
                amount: "350",
                title: "Eventos sin atender"
            },
            {
                bgCard: "bg-lime-400",
                icon: "mdi-account-tie-voice-outline",
                amount: "200",
                title: "Eventos en Gestión"
            },
            {
                bgCard: "bg-sky-400",
                icon: "mdi-account-check",
                amount: "50",
                title: "Eventos confirmados"
            },
            {
                bgCard: "bg-orange-400",
                icon: "mdi-bell-remove",
                amount: "10",
                title: "Eventos descartados"
            }
        ]);

        return {
            listCards
        }
    }
})
</script>