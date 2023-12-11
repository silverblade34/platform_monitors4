<template>
    <v-data-table-server v-model:items-per-page="itemsPerPageInitials" :headers="headers" :items-length="totalItems"
        :items="serverItems" :loading="loading" item-value="name" @update:options="loadItems"
        class="table_server_events custom-scrollbar">
        <template v-slot:[`item.fecha_ultima_accion`]="{ item }">
            {{ item.fecha_ultima_accion.split(' ')[0] }}
        </template>
        <template v-slot:[`item.hora_ultima_accion`]="{ item }">
            {{ item.fecha_ultima_accion.split(' ')[1] }}
        </template>
        <template v-slot:[`item.list_comentarios`]="{ item }">
            {{
                item.list_comentarios && item.list_comentarios.length > 0
                ? truncateText(item.list_comentarios[item.list_comentarios.length - 1].comentario)
                : ''
            }}
        </template>
        <template v-slot:[`item.geocerca`]="{ item }">
            {{
                truncateText(item.geocerca)
            }}
        </template>
        <template v-slot:[`item.usuario`]="{ item }">
            {{
                item.list_comentarios && item.list_comentarios.length > 0
                ? item.list_comentarios[item.list_comentarios.length - 1].usuario
                : ''
            }}
        </template>
        <template v-slot:[`item.nombre_usuario`]="{ item }">
            {{
                item.list_comentarios && item.list_comentarios.length > 0
                ? item.list_comentarios[item.list_comentarios.length - 1].nombre_completo
                : ''
            }}
        </template>
        <template v-slot:[`item.segundos`]="{ item }">
            {{ item.segundos }} segundos
        </template>
    </v-data-table-server>
</template>
<script>
import { reportEventsApi } from '@/api/ReportEventsService';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import store from '@/store';
import { ref, watch } from 'vue';

export default {
    props: {
        dataFilter: Object,
        searchstate: Boolean
    },
    components: {
        VDataTableServer,
    },
    setup(props) {
        const itemsPerPageInitials = ref(10);
        const headers = ref([
            { title: 'Codigo evento', align: 'start', sortable: false, key: 'cod_evento' },
            { title: 'Prioridad', key: 'prioridad', sortable: false, align: 'start' },
            { title: 'Placa', key: 'placa', sortable: false, align: 'start' },
            { title: 'Fecha evento', key: 'fecha_actual', sortable: false, align: 'start' },
            { title: 'Velocidad', key: 'velocidad', sortable: false, align: 'end' },
            { title: 'Latitud', key: 'latitud', sortable: false, align: 'end' },
            { title: 'Longitud', key: 'longitud', sortable: false, align: 'end' },
            { title: 'Dirección', key: 'direccion', sortable: false, align: 'start' },
            { title: 'Geocerca', key: 'geocerca', sortable: false, align: 'start' },
            { title: 'Fecha ult. acción', key: 'fecha_ultima_accion', sortable: false, align: 'start' },
            { title: 'Hora ult. acción', key: 'hora_ultima_accion', sortable: false, align: 'start' },
            { title: 'Tiempo atención', key: 'segundos', sortable: false, align: 'start' },
            { title: 'Estado', key: 'descripcion_estado', sortable: false, align: 'start' },
            { title: 'Comentario', key: 'list_comentarios', sortable: false, align: 'start' },
            { title: 'Usuario', key: 'usuario', sortable: false, align: 'end' },
            { title: 'Nombre usuario', key: 'nombre_usuario', sortable: false, align: 'end' }
        ])

        const serverItems = ref([]);
        const loading = ref(true);
        const totalItems = ref(0);
        const plate = ref('');
        const cod_evento = ref('');
        const description_state = ref('');
        const dateFrom = ref('');
        const dateTo = ref('');
        const stateFilter = ref(false);

        watch(() => props.dataFilter, (newVal) => {
            if (props.searchstate) {
                stateFilter.value = newVal
                plate.value = newVal.plate;
                cod_evento.value = newVal.type_event;
                description_state.value = newVal.state;
                dateFrom.value = newVal.dateFrom;
                dateTo.value = newVal.dateTo;
                initialsDataReport()
            }
        })

        const truncateText = (text) => {
            if (text && text.length > 20) {
                return text.slice(0, 20) + '...';
            }
            return text;
        };

        const initialsDataReport = async () => {
            loading.value = true;
            await reportEventsApi(
                store.state.codcuenta,
                store.state.codcliente,
                plate.value,
                cod_evento.value,
                description_state.value,
                dateFrom.value,
                dateTo.value,
                itemsPerPageInitials.value,
                1
            ).then((response) => {
                serverItems.value = serverItems.value = response.data.data ? response.data.data : [];
                totalItems.value = response.data.totalEventos;
                loading.value = false;
            });
        }

        const loadItems = ({ page, itemsPerPage }) => {
            if (stateFilter.value) {
                loading.value = true;
                reportEventsApi(
                    store.state.codcuenta,
                    store.state.codcliente,
                    plate.value,
                    cod_evento.value,
                    description_state.value,
                    dateFrom.value,
                    dateTo.value,
                    itemsPerPage,
                    page
                ).then(response => {
                    serverItems.value = response.data.data ? response.data.data : [];
                    totalItems.value = response.data.totalEventos;
                    loading.value = false;
                })
                .catch(error => {
                        console.log(error)
                })
            } else {
                loading.value = false;
            }
        };

        return {
            itemsPerPageInitials,
            headers,
            serverItems,
            loading,
            totalItems,
            plate,
            cod_evento,
            description_state,
            dateFrom,
            dateTo,
            truncateText,
            loadItems,
        };
    }
}
</script>
<style>
.table_server_events {
    color: #797979 !important;
    font-size: 0.7rem;
}

.table_server_events table thead {
    background: rgb(93, 167, 196);
}

.table_server_events table thead th {
    font-weight: bolder;
    color: #ffffff !important
}
</style>