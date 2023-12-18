<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">Eventos pendientes</h1>
        <div class="w-full rounded-lg bg-white shadow-md">
            <div class="p-5">
                <div class="rounded-lg overflow-hidden shadow mb-3">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel>
                            <v-expansion-panel-title color="indigo-lighten-2" class="rounded-md">
                                <div class="flex items-center">
                                    <v-icon>mdi-filter-menu</v-icon>
                                    <span class="pl-5">Seleccionar columnas</span>
                                </div>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="rounded-md">
                                <div class="lg:grid lg:grid-cols-10 md:grid md:grid-cols-6 grid grid-cols-3 gap-1">
                                    <v-checkbox v-for="item in listedHeaders.filter(header => header.key != 'actions')"
                                        v-model="selectedColumns" color="blue" :value="item.key" hide-details
                                        :key="item.key">
                                        <template v-slot:label>
                                            <span class="text-xs">
                                                {{ item.title }}
                                            </span>
                                        </template>
                                    </v-checkbox>
                                </div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="w-full flex justify-between pt-4">
                    <div class="lg:w-[30%] pb-4 w-full">
                        <v-text-field clearable color="indigo" v-model="search" prepend-inner-icon="mdi-magnify"
                            label="Buscar" hide-details density="compact" variant="outlined"></v-text-field>
                    </div>
                    <div>
                        <v-btn color="red" size="small" @click="onMassDiscard"><v-icon>mdi-bell-remove</v-icon> Descarte
                            masivo</v-btn>
                    </div>
                </div>
                <TableEventsVue :desserts="pendingEvents" :listedHeaders="listedHeadersFilter" :search="search"
                    @selected-events="onSelectedEvents" />
            </div>
        </div>
    </div>
    <v-dialog v-model="dialogLoader" :scrim="false" persistent width="auto">
        <v-card color="blue">
            <v-card-text>
                Construyendo
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import TableEventsVue from "@/components/notifications/listedEarrings/TableEvents.vue";
import { notificationsAccountApi, massDiscardofEventsApi } from '@/api/NotificationsService';
import { confirmBasic, basicAlert } from '@/helpers/SweetAlert';
import { onMounted, ref, watch } from "vue"
import store from "@/store";

export default ({
    name: "ListedEarringsView",
    components: {
        TableEventsVue
    },
    setup() {
        const search = ref('');
        const selectedDiscardEvents = ref([]);
        const pendingEvents = ref([]);
        const dialogLoader = ref(false);
        const selectedColumns = ref(['cod_evento', 'placa', 'conductor', 'fleet_name', 'fecha', 'fecha_actual', 'velocidad',
            'direccion', 'descripcion_estado', 'fecha_ultima_accion', 'prioridad', 'actions']);
        const listedHeaders = ref([
            { title: 'Codigo evento', align: 'start', key: 'cod_evento', sortable: true },
            { title: 'Placa', align: 'start', key: 'placa', sortable: true },
            { title: 'Conductor', align: 'start', key: 'conductor', sortable: true },
            { title: 'Flota', align: 'start', key: 'fleet_name', sortable: true },
            { title: 'Fecha evento', align: 'start', key: 'fecha', sortable: true },
            { title: 'Fecha recepción', align: 'start', key: 'fecha_actual', sortable: true },
            { title: 'Velocidad', align: 'start', key: 'velocidad', sortable: true },
            { title: 'Dirección', align: 'start', key: 'direccion', sortable: true },
            { title: 'Estado', align: 'start', key: 'descripcion_estado', sortable: true },
            { title: 'Última acción', align: 'start', key: 'fecha_ultima_accion', sortable: true },
            { title: 'Prioridad', align: 'center', key: 'prioridad', sortable: true },
            { title: 'Acciones', align: 'start', key: 'actions', sortable: true }
        ])

        const listedHeadersFilter = ref([]);

        const loadData = async () => {
            const responseEvent = await notificationsAccountApi(store.state.codcuenta, store.state.codclienteAdmin, store.state.username, store.state.codregla);
            pendingEvents.value = responseEvent.data.data.filter(event => {
                return event.descripcion_estado === "Sin Atender" || event.descripcion_estado === "En Gestion";
            })
        }

        onMounted(async () => {
            dialogLoader.value = true
            await loadData();
            updateColumnVisibility();
            dialogLoader.value = false
        })

        setInterval(() => {
            loadData();
        }, 10000);

        const updateColumnVisibility = () => {
            listedHeadersFilter.value = listedHeaders.value.filter(item => {
                return selectedColumns.value.includes(item.key);
            });
        }

        watch(() => selectedColumns.value, () => {
            updateColumnVisibility();
        })

        const onSelectedEvents = (data) => {
            selectedDiscardEvents.value = data.selected
        }

        const onMassDiscard = () => {
            if (selectedDiscardEvents.value.length > 0) {
                confirmBasic(async () => {
                    massDiscardofEventsApi(selectedDiscardEvents.value, store.state.codcuenta, store.state.codclienteAdmin)
                        .then(() => {
                            basicAlert(() => {
                                loadData()
                            }, 'success', 'Logrado', 'Se ha descartado los eventos correctamente')
                        })
                        .catch(() => {
                            basicAlert(() => {
                                loadData()
                            }, 'error', 'Hubo un error', 'No se logro descartar los eventos')
                        })
                }, '¿Estás seguro de realizar el descarte de los eventos seleccionados?', 'Aceptar');
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'No hay eventos seleccionados para el descarte masivo')
            }
        }

        return {
            onMassDiscard,
            onSelectedEvents,
            dialogLoader,
            listedHeadersFilter,
            selectedColumns,
            pendingEvents,
            listedHeaders,
            search,
        }
    }
})
</script>
<style scoped>
.v-expansion-panel-title__overlay {
    background: transparent !important;
}

.v-selection-control .v-label {
    font-size: 10px !important;
}

.v-label {
    font-size: 10px !important;
}
</style>