<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">Eventos pendientes</h1>
        <div class="w-full rounded-lg bg-white shadow-md">
            <div class="p-5">
                <div class="rounded-lg overflow-hidden shadow mb-3">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel>
                            <v-expansion-panel-title color="indigo-lighten-1" class="rounded-md">
                                <div class="flex items-center">
                                    <v-icon>mdi-filter-menu</v-icon>
                                    <span class="pl-5">Seleccionar columnas</span>
                                </div>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="rounded-md">
                                <div class="flex justify-between">
                                    <v-checkbox v-model="selectedColumns" color="blue" value="selección" hide-details>
                                        <template v-slot:label>
                                            <span class="text-sm">
                                                Codigo evento
                                            </span>
                                        </template>
                                    </v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Placa" color="blue" value="placa"
                                        hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Fecha evento" color="blue"
                                        value="fecha_evento" hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Fecha recepción" color="blue"
                                        value="fecha_recepcion" hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Velocidad" color="blue" value="velocidad"
                                        hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Dirección" color="blue" value="direccion"
                                        hide-details></v-checkbox>

                                    <v-checkbox v-model="selectedColumns" label="Estado" color="blue" value="estado"
                                        hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Fecha última acción" color="blue"
                                        value="ultima_accion" hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Prioridad" color="blue" value="prioridad"
                                        hide-details></v-checkbox>
                                    <v-checkbox v-model="selectedColumns" label="Acción" color="blue" value="accion"
                                        hide-details></v-checkbox>
                                </div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="w-full flex justify-between pt-4">
                    <div class="lg:w-[30%] pb-4 w-full">
                        <v-text-field variant="underlined" color="blue" v-model="search" append-icon="mdi-magnify"
                            label="Buscar" hide-details density="compact"></v-text-field>
                    </div>
                    <div>
                        <v-btn color="red" size="small">Descarte masivo</v-btn>
                    </div>
                </div>
                <TableEventsVue />
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
        const selectedColumns = ref([]);
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
                title: 'Fecha evento', align: 'start', key: 'dateEvent', sortable: true,
            },
            {
                title: 'Fecha recepción', align: 'start', key: 'dateReception', sortable: true,
            },
            {
                title: 'Velocidad', align: 'start', key: 'speed', sortable: true,
            },
            {
                title: 'Dirección', align: 'start', key: 'direction', sortable: true,
            },
            {
                title: 'Estado', align: 'start', key: 'state', sortable: true,
            },
            {
                title: 'Última acción', align: 'start', key: 'lastAction', sortable: true,
            },
            {
                title: 'Prioridad', align: 'start', key: 'priority', sortable: true,
            },
            {
                title: 'Acción', align: 'start', key: 'action', sortable: true,
            }
        ])

        onMounted(async () => {
            const responseEvent = await notificationsAccountApi()
            pendingEvents.value = responseEvent.data.data
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