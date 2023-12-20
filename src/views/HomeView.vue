<template>
    <div class="mb-5">
        <h1 class="font-bold text-xl title_poppins">Dashboard</h1>
        <div class="grid grid-cols-4 gap-5 pt-5">
            <CardEventsVue :BgCard="card.bgCard" :Icon="card.icon" :Amount="card.amount" :Title="card.title"
                v-for="(card, index) in listCards" :key="index" />
            <div class="col-span-2 max-h-[50rem]">
                <EventNotificationVue :data="dataEvents" />
            </div>
            <div class="col-span-1 max-h-[50rem]">
                <VehicleNotificationVue :data="dataVehicles" />
            </div>
            <div class="col-span-1 max-h-[50rem]">
                <OperatorNotificationVue :data="dataOperators" />
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import CardEventsVue from '@/components/dashboard/CardEvents.vue';
import EventNotificationVue from '@/components/dashboard/EventNotification.vue';
import VehicleNotificationVue from '@/components/dashboard/VehicleNotification.vue';
import OperatorNotificationVue from '@/components/dashboard/OperatorNotification.vue';
import { notificationsAccountApi } from '@/api/NotificationsService';
import { findAllClientsToAccountApi } from '@/api/UsersService';
import { findAllUnitsApi } from '@/api/VehiclesService';
import { homeClientsApi } from '@/api/DashboardService';
import store from '@/store';

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
                amount: 0,
                title: "Eventos sin atender",
                key: "unattended_events"
            },
            {
                bgCard: "bg-sky-400",
                icon: "mdi-account-tie-voice",
                amount: 0,
                title: "Eventos en Gestión",
                key: "events_in_management"
            },
            {
                bgCard: "bg-lime-400",
                icon: "mdi-account-check",
                amount: 0,
                title: "Eventos confirmados",
                key: "confirmed_events"
            },
            {
                bgCard: "bg-red-400",
                icon: "mdi-bell-remove",
                amount: 0,
                title: "Eventos descartados",
                key: "discarded_events"
            }
        ]);
        const dataEvents = ref([])
        const dataVehicles = ref([])
        const dataOperators = ref([])

        const loadData = async () => {
            if (store.state.codclienteAdmin == "All") {
                cardsForAccounts()
            } else {
                cardsForClients()
            }
        }

        const cardsForAccounts = async () => {
            listCards.value[0].title = "Eventos del día"
            listCards.value[1].title = "Clientes registrados"
            listCards.value[2].title = "Operadores registrados"
            listCards.value[3].title = "Unidades registradas"
            listCards.value[3].icon = "mdi-truck"
            const [responseClients, responseUnits] = await Promise.all([
                findAllClientsToAccountApi(store.state.codcuenta),
                findAllUnitsApi(store.state.codcuenta, store.state.codclienteAdmin)
            ])
            const usersClients = responseClients.data.data[0].clientes ? responseClients.data.data[0].clientes : []
            const administrators = usersClients.filter(client => client.rol == "Administrador")
            const operators = usersClients.filter(client => client.rol != "Administrador")
            const dataUnits = responseUnits.data.data ? responseUnits.data.data : []
            const unidadesCodUnidad = dataUnits.flatMap(item => item.unidades.map(unidad => unidad.cod_unidad));
            listCards.value[1].amount = administrators.length
            listCards.value[2].amount = operators.length
            listCards.value[3].amount = unidadesCodUnidad.length
        }

        const cardsForClients = async () => {
            const [responseEvent, tableEvent] = await Promise.all([
                notificationsAccountApi(store.state.codcuenta, store.state.codclienteAdmin, store.state.username, store.state.codregla),
                homeClientsApi(store.state.codcuenta, store.state.codclienteAdmin, store.state.username, store.state.codregla)
            ])
            const eventData = responseEvent.data.data;
            Promise.all([
                tableValuePorcentage(tableEvent.data.data_eventos),
                tableValuePorcentage(tableEvent.data.data_vehiculos),
                tableValuePorcentage(tableEvent.data.data_operadores)
            ])
                .then(([events, vehicles, operators]) => {
                    dataEvents.value = events;
                    dataVehicles.value = vehicles;
                    dataOperators.value = operators;
                })
                .catch(error => {
                    // Manejar cualquier error que pueda ocurrir durante el proceso
                    console.error("Error:", error);
                });
            const filterPromises = [
                filterByStatus(eventData, "Sin Atender"),
                filterByStatus(eventData, "En Gestion"),
                filterByStatus(eventData, "Confirmado"),
                filterByStatus(eventData, "Descartado")
            ];

            const filteredResults = await Promise.all(filterPromises);

            listCards.value[0].amount = filteredResults[0].length;
            listCards.value[1].amount = filteredResults[1].length;
            listCards.value[2].amount = filteredResults[2].length;
            listCards.value[3].amount = filteredResults[3].length;
        }

        onMounted(async () => {
            loadData()
        });

        setInterval(() => {
            loadData();
        }, 10000);

        const filterByStatus = async (events, status) => {
            return events ? events.filter(event => event.descripcion_estado === status) : [];
        }

        const tableValuePorcentage = async (tableData) => {
            const total = Object.values(tableData).reduce((acc, curr) => acc + curr, 0);

            const resultados = Object.entries(tableData).map(([clave, valor]) => {
                const porcentaje = ((valor / total) * 100).toFixed(2);
                return { clave, valor, porcentaje: parseFloat(porcentaje) }; // Convertir a número para ordenar
            });

            // Ordenar de mayor a menor según el porcentaje
            resultados.sort((a, b) => b.porcentaje - a.porcentaje);

            return resultados;
        };

        return {
            listCards,
            dataEvents,
            dataVehicles,
            dataOperators
        }
    }
})
</script>