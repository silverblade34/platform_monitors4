<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">Reporte de eventos</h1>
        <div class="w-full rounded-lg bg-white shadow-md p-5">
            <div class="w-full grid grid-cols-11 gap-3 pb-5">
                <v-text-field label="Fecha desde" type="date" hide-details class="col-span-2" density="compact"
                    v-model="dateFrom" variant="outlined" color="indigo"></v-text-field>

                <v-text-field label="Fecha hasta" type="date" hide-details class="col-span-2" density="compact"
                    v-model="dateTo" variant="outlined" color="indigo"></v-text-field>

                <v-text-field clearable density="compact" color="indigo" v-model="plate" prepend-inner-icon="mdi-truck"
                    label="Placa" hide-details variant="outlined" class="col-span-2"></v-text-field>

                <v-select label="Tipo evento" :items="listEventsData.map(event => event.cod_evento)" variant="outlined"
                    class="col-span-2" color="indigo" hide-details density="compact" v-model="type_event"></v-select>

                <v-select label="Estado" :items="['Todos', 'Sin Atender', 'En Gestion', 'Confirmado', 'Descartado']"
                    variant="outlined" class="col-span-2" color="indigo" hide-details density="compact"
                    v-model="state"></v-select>

                <v-btn color="blue" class="col-span-1 mt-1" @click="searchEventsReport"><v-icon>mdi-magnify</v-icon>
                    Buscar</v-btn>
            </div>
            <div class="w-full border">
                <ServerTableVue :dataFilter="dataFilter" :searchstate="searchstate" />
            </div>
        </div>
    </div>
</template>
<script>
import { listEventsApi } from '@/api/MaintenanceEventsService';
import ServerTableVue from '@/components/reports/ServerTable.vue';
import { basicAlert } from '@/helpers/SweetAlert';
import { onMounted, ref } from 'vue';
import store from '@/store';

export default ({
    components: {
        ServerTableVue,
    },
    setup() {
        const listEventsData = ref([]);
        const dateFrom = ref('');
        const dateTo = ref('');
        const plate = ref('');
        const type_event = ref('');
        const state = ref('');
        const searchstate = ref(false);
        const dataFilter = ref({});

        onMounted(() => {
            listEventsApi(store.state.codcuenta, store.state.codcliente)
                .then(response => {
                    listEventsData.value = response.data.data ? response.data.data[0].eventos : []
                })
        })

        const searchEventsReport = () => {
            if (dateFrom.value != "" && dateTo.value != "") {
                searchstate.value = true
                dataFilter.value = { dateFrom: dateFrom.value, dateTo: dateTo.value, plate: plate.value, type_event: type_event.value, state: state.value == 'Todos' ? '' : state.value }
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Los campos fecha desde y fecha hasta son obligatorios')
            }
        }

        return {
            dateFrom,
            dateTo,
            plate,
            type_event,
            state,
            listEventsData,
            dataFilter,
            searchstate,
            searchEventsReport
        }
    }
})
</script>