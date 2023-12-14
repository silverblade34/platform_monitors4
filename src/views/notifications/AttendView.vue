<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">
            <router-link to="/pendienteslistados">
                <span>
                    <v-btn icon="mdi-chevron-left" variant="text"></v-btn>
                    <v-tooltip activator="parent" location="top">Regresar</v-tooltip>
                </span>
            </router-link>
            Atender evento
        </h1>
        <div class="w-full rounded-lg bg-white shadow-md p-5 grid grid-cols-2 gap-3">
            <div>
                <div class="font-bold text-blue-500 pb-3 flex justify-between">
                    <span><v-icon>mdi-text-box-search-outline</v-icon> Detalles</span>
                    <v-btn variant="tonal" :class="getPriorityColor(editEvent.prioridad)"> {{ editEvent.cod_evento }}
                    </v-btn>
                </div>
                <div class="block md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-2 text-gray-600 text-sm">
                    <div>
                        <p>Placa</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.placa }}</div>
                    </div>
                    <div>
                        <p>Velocidad</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.velocidad }}</div>
                    </div>
                    <div>
                        <p>Geocerca</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.geocerca ? editEvent.geocerca : "-" }}
                        </div>
                    </div>
                    <div>
                        <p>Fecha recepción</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.hora }} {{ editEvent.fecha }}</div>
                    </div>
                    <div>
                        <p>Prioridad</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.prioridad }}</div>
                    </div>
                    <div>
                        <p>Origen</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.origen }}
                        </div>
                    </div>
                    <div>
                        <p>Conductor</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.conductor ? editEvent.conductor : "-" }}
                        </div>
                    </div>
                    <div>
                        <p>Flota</p>
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.fleet_name ? editEvent.fleet_name : "-" }}
                        </div>
                    </div>
                </div>
                <p class="font-bold text-blue-500 pb-3 pt-3"> <v-icon>mdi-comment-text-multiple</v-icon> Registrar
                    comentarios</p>
                <div class="block md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-1 pb-3">
                    <v-btn color="yellow-darken-4" size="small">En gestión</v-btn>
                    <v-btn color="indigo" size="small">Confirmado</v-btn>
                    <v-btn color="red" size="small">Descartado</v-btn>
                    <v-btn color="teal-lighten-2" size="small">Escalar</v-btn>
                </div>
                <v-textarea label="Agregue un comentario" variant="outlined" prepend-inner-icon="mdi-text-box-outline"
                    color="indigo" rows="3"></v-textarea>
                <div class="block md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-1 pb-2">
                    <v-btn color="light-blue-darken-1" size="small" v-for="answer in answersData" :key="answer.codigo">{{
                        answer.sigla }}</v-btn>
                </div>
            </div>
            <div class="overflow-hidden">
                <p class="font-bold text-blue-500 pb-4"> <v-icon>mdi-sign-direction</v-icon> Ubicación</p>
                <EventMapVue :longitud="longitud" :latitud="latitud" />
            </div>
            <div class="p-4">
                <p class="font-bold text-blue-500 pb-4"> <v-icon>mdi-table-check</v-icon> Registro de comentarios</p>
                <v-data-table-virtual :headers="headers" :items="editEvent.list_comentarios" density="compact"
                    class="text-sm border"></v-data-table-virtual>
            </div>
            <div class="p-4">
                <p class="font-bold text-blue-500 pb-4"> <v-icon>mdi-image-edit-outline</v-icon> Evidencias</p>
                <img :src="editEvent.link_imagen" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { findAllAnswersApi } from '@/api/AnswersService';
import { onMounted, ref } from 'vue';
import EventMapVue from '@/components/notifications/EventMap.vue';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import store from '@/store';

export default ({
    components: {
        EventMapVue,
        VDataTableVirtual,
    },
    setup() {
        const editEvent = ref({});
        const latitud = ref('');
        const longitud = ref('');
        const answersData = ref([]);
        const headers = [
            { title: 'Comentario', align: 'start', key: 'comentario' },
            { title: 'Estado', align: 'start', key: 'descripcion_estado' },
            { title: 'Usuario', align: 'start', key: 'usuario' },
            { title: 'Fecha', align: 'start', key: 'fecha_envio' },
        ]

        onMounted(() => {
            editEvent.value = store.state.eventAtended
            latitud.value = editEvent.value.latitud
            longitud.value = editEvent.value.longitud
            findAllAnswersApi(store.state.codcliente)
                .then(response => {
                    answersData.value = response.data.data ? response.data.data[0].respuestas : []
                })
        })

        const getPriorityColor = (prioridad) => {
            // Devuelve la clase CSS correspondiente según el valor de prioridad
            switch (prioridad) {
                case 'REGULAR':
                    return 'regular-color-class'; // Reemplaza con la clase CSS para REGULAR
                case 'URGENTE':
                    return 'urgent-color-class'; // Reemplaza con la clase CSS para URGENTE
                case 'CRITICO':
                    return 'critical-color-class'; // Reemplaza con la clase CSS para CRITICO
                default:
                    return ''; // Si no coincide con ninguno, puedes establecer una clase predeterminada o dejar vacío
            }
        }

        return {
            getPriorityColor,
            editEvent,
            answersData,
            latitud,
            longitud,
            headers
        }
    }
})
</script>
<style>
/* Clase para prioridad REGULAR */
.regular-color-class {
    background-color: #4ca0af;
    /* Color de fondo para prioridad REGULAR */
    color: white;
    /* Color del texto para prioridad REGULAR */
}

/* Clase para prioridad URGENTE */
.urgent-color-class {
    background-color: #ff9800;
    /* Color de fondo para prioridad URGENTE */
    color: white;
    /* Color del texto para prioridad URGENTE */
}

/* Clase para prioridad CRITICO */
.critical-color-class {
    background-color: #f44336;
    /* Color de fondo para prioridad CRITICO */
    color: white;
    /* Color del texto para prioridad CRITICO */
}</style>