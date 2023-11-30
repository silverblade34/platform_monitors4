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
                                <div class="flex justify-between">
                                    <v-checkbox v-for="item in listedHeaders.filter(header => header.key != 'actions')" v-model="selectedColumns" color="blue"
                                        :value="item.key" hide-details :key="item.key">
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
                        <v-text-field variant="underlined" color="indigo" v-model="search" append-icon="mdi-magnify"
                            label="Buscar" hide-details density="compact"></v-text-field>
                    </div>
                    <div>
                        <v-btn color="red" size="small">Descarte masivo</v-btn>
                    </div>
                </div>
                <TableEventsVue :desserts="pendingEvents" :listedHeaders="listedHeaders" />
            </div>
        </div>
    </div>
</template>
<script>
import TableEventsVue from "@/components/events/listedEarrings/TableEvents.vue";
import { notificationsAccountApi } from '@/api/EventsService';
import { onMounted, ref } from "vue"

export default ({
    name: "ListedEarringsView",
    components: {
        TableEventsVue
    },
    setup() {
        const selectedColumns = ref(['cod_evento', 'placa', 'conductor', 'fecha', 'fecha_actual', 'velocidad', 
        'direccion', 'descripcion_estado', 'fecha_ultima_accion','prioridad']);
        const pendingEvents = ref([]);
        const listedHeaders = ref([
            {
                title: 'Codigo evento',
                align: 'start',
                key: 'cod_evento',
                sortable: true,
            },
            {
                title: 'Placa',
                align: 'start',
                key: 'placa',
                sortable: true,
            },
            {
                title: 'Conductor',
                align: 'start',
                key: 'conductor',
                sortable: true,
            },
            {
                title: 'Fecha evento', align: 'start', key: 'fecha', sortable: true,
            },
            {
                title: 'Fecha recepción', align: 'start', key: 'fecha_actual', sortable: true,
            },
            {
                title: 'Velocidad', align: 'start', key: 'velocidad', sortable: true,
            },
            {
                title: 'Dirección', align: 'start', key: 'direccion', sortable: true,
            },
            {
                title: 'Estado', align: 'start', key: 'descripcion_estado', sortable: true,
            },
            {
                title: 'Última acción', align: 'start', key: 'fecha_ultima_accion', sortable: true,
            },
            {
                title: 'Prioridad', align: 'start', key: 'prioridad', sortable: true,
            },
            {
                title: 'Acción', align: 'start', key: 'actions', sortable: true,
            }
        ])

        onMounted(async () => {
            const responseEvent = await notificationsAccountApi()
            pendingEvents.value = responseEvent.data.data.filter(event => {
                return event.descripcion_estado === "Sin Atender" || event.descripcion_estado === "En Gestion";
            })
        })
        return {
            selectedColumns,
            pendingEvents,
            listedHeaders
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