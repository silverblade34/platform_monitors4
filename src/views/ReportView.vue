<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">Reporte de eventos</h1>
        <div class="w-full rounded-lg bg-white shadow-md p-5">
            <div class="container_filters pt-3 pb-5">
                <v-text-field label="Fecha desde" type="date" hide-details density="compact" v-model="dateFrom"
                    variant="outlined" color="indigo"></v-text-field>

                <v-text-field label="Fecha hasta" type="date" hide-details density="compact" v-model="dateTo"
                    variant="outlined" color="indigo"></v-text-field>

                <v-text-field clearable density="compact" color="indigo" v-model="plate" prepend-inner-icon="mdi-truck"
                    label="Placa" hide-details variant="outlined"></v-text-field>

                <v-select label="Tipo evento" :items="listEventsData.map(event => event.cod_evento)" variant="outlined"
                    color="indigo" hide-details density="compact" v-model="type_event"></v-select>

                <v-select label="Estado" :items="['Todos', 'Sin Atender', 'En Gestion', 'Confirmado', 'Descartado']"
                    variant="outlined" color="indigo" hide-details density="compact" v-model="state"></v-select>

                <v-btn color="blue" class="mt-1 custom-btn" @click="searchEventsReport">Buscar</v-btn>
            </div>
            <div class="pb-3">
                <v-btn color="green" size="small" @click="exportReports"> <v-icon>mdi-microsoft-excel</v-icon> Exportar
                    excel</v-btn>
            </div>
            <div class="w-full border">
                <ServerTableVue :dataFilter="dataFilter" :searchstate="searchstate" />
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
import { reportEventsApi } from '@/api/ReportEventsService';
import { findAllEventsApi } from '@/api/EventsService';
import ServerTableVue from '@/components/reports/ServerTable.vue';
import { basicAlert } from '@/helpers/SweetAlert';
import { onMounted, ref } from 'vue';
import store from '@/store';
import * as XLSX from 'xlsx';

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
        const dialogLoader = ref(false);

        onMounted(() => {
            findAllEventsApi(store.state.codcuenta, store.state.codclienteAdmin)
                .then(response => {
                    listEventsData.value = response.data.data ? response.data.data[0].eventos : []
                })
        })

        const searchEventsReport = () => {
            if (dateFrom.value != "" && dateTo.value != "") {
                searchstate.value = true
                dataFilter.value = {
                    dateFrom: dateFrom.value,
                    dateTo: dateTo.value,
                    plate: plate.value,
                    type_event: type_event.value,
                    state: state.value == 'Todos' ? '' : state.value
                }
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Los campos fecha desde y fecha hasta son obligatorios')
            }
        }

        const exportReports = async () => {
            if (dateFrom.value != "" && dateTo.value != "") {
                dialogLoader.value = true
                const filterExcel = {
                    fecha_inicio: dateFrom.value,
                    fecha_fin: dateTo.value,
                    placa: plate.value,
                    cod_evento: type_event.value,
                    descripcion_estado: state.value == 'Todos' ? '' : state.value
                }
                reportEventsApi(store.state.codcuenta, store.state.codclienteAdmin, filterExcel.placa,
                    filterExcel.cod_evento, filterExcel.descripcion_estado, filterExcel.fecha_inicio, filterExcel.fecha_fin, 0, 0)
                    .then(response => {
                        const datos = response.data.data
                        const excelData = datos.map(obj => {
                            const [fechaComentario, horaComentario] = obj.fecha_ultima_accion.split(" ");

                            return {
                                Cod_evento: obj.cod_evento,
                                Placa: obj.placa,
                                Origen: obj.origen,
                                Prioridad: obj.prioridad,
                                Fecha_evento: obj.fecha,
                                Hora_evento: obj.hora,
                                Fecha_recepción: obj.fecha_actual,
                                Latitud: obj.latitud,
                                Longitud: obj.longitud,
                                Velocidad: obj.velocidad,
                                Direccion: obj.direccion,
                                Geocerca: obj.geocerca,
                                Fecha_ultima_accion: fechaComentario,
                                Hora_ultima_accion: horaComentario,
                                Tiempo_atencion: obj.segundos,
                                Descripcion_estado: obj.descripcion_estado,
                                Usuario: obj.usuario,
                                Nombre_usuario: obj.nombre_completo,
                                Comentario: obj.comentario
                            };
                        });

                        // Crear una hoja de cálculo de Excel
                        const workbook = XLSX.utils.book_new();
                        // Convertir la matriz de datos a una hoja de cálculo de Excel
                        const worksheet = XLSX.utils.json_to_sheet(excelData);
                        // Agregar la hoja de cálculo al libro de trabajo
                        const sheetName = 'DatosReportes';
                        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

                        // Guardar el archivo de Excel
                        XLSX.writeFile(workbook, 'Reporte(' + filterExcel.fecha_inicio + '/' + filterExcel.fecha_fin + ').xlsx', { bookType: 'xlsx', type: 'buffer' });
                        dialogLoader.value = false
                    })
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
            dialogLoader,
            listEventsData,
            dataFilter,
            searchstate,
            exportReports,
            searchEventsReport
        }
    }
})
</script>
<style>
.container_filters {
    display: grid;
    gap: 20px;
}

.custom-btn {
    width: 100px;
    /* Cambia este valor según el ancho deseado */
}

@media screen and (min-width: 1690px) {
    .container_filters {
        width: 90%;
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width: 1690px) and (min-width: 1450px) {
    .container_filters {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media screen and (max-width: 1450px) and (min-width: 1200px) {
    .container_filters {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>