<template>
    <div>
        <h1 class="font-bold text-xl title_poppins">Dashboard</h1>
        <div class="grid grid-cols-4 gap-5 pt-5">
            <CardEventsVue :BgCard="card.bgCard" :Icon="card.icon" :Amount="card.amount" :Title="card.title"
                v-for="(card, index) in listCards" :key="index" />
            <div class="col-span-2">
                <EventNotificationVue />
            </div>
            <VehicleNotificationVue />
            <div class="col-span-1">
                <OperatorNotificationVue />
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import CardEventsVue from '@/components/dashboard/CardEvents.vue';
import EventNotificationVue from '@/components/dashboard/EventNotification.vue';
import VehicleNotificationVue from '@/components/dashboard/VehicleNotification.vue';
import OperatorNotificationVue from '@/components/dashboard/OperatorNotification.vue';

export default ({
    name: "HomeView",
    components: {
        CardEventsVue,
        EventNotificationVue,
        VehicleNotificationVue,
        OperatorNotificationVue
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
                bgCard: "bg-sky-400",
                icon: "mdi-account-tie-voice",
                amount: "200",
                title: "Eventos en Gestión"
            },
            {
                bgCard: "bg-lime-400",
                icon: "mdi-account-check",
                amount: "50",
                title: "Eventos confirmados"
            },
            {
                bgCard: "bg-red-400",
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