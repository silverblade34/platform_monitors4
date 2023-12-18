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
        <div class="w-full rounded-lg bg-white shadow-md p-5 block lg:grid lg:grid-cols-2 gap-4">
            <div>
                <div class="font-bold text-blue-500 pb-3 block md:flex md:justify-between">
                    <span><v-icon>mdi-text-box-search-outline</v-icon> Detalles</span>
                    <v-btn variant="tonal" :class="getPriorityColor(editEvent.cod_evento)" class="mt-2 md:mt-0"> {{
                        editEvent.cod_evento }}
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
                        <div class="bg-gray-200 p-2 px-4 rounded-md">{{ editEvent.fecha }} {{ editEvent.hora }}</div>
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
                    <v-btn color="yellow-darken-4" size="small" @click="updateEventStatus('En Gestion')"
                        class="my-1 md:my-0">En gestión</v-btn>
                    <v-btn color="indigo" size="small" @click="updateEventStatus('Confirmado')"
                        class="my-1 md:my-0">Confirmado</v-btn>
                    <v-btn color="red" size="small" @click="updateEventStatus('Descartado')"
                        class="my-1 md:my-0">Descartado</v-btn>
                    <EscalateEventVue @send-email="onSendEmail" />
                </div>
                <v-textarea label="Agregue un comentario" variant="outlined" prepend-inner-icon="mdi-text-box-outline"
                    color="indigo" rows="3" v-model="comment"></v-textarea>
                <div class="block md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-1 pb-2">
                    <v-btn color="light-blue-darken-1" size="small" v-for="answer in answersData" :key="answer.codigo"
                        @click="insertComment(answer.text)">{{
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
import { addCommentEventsApi } from '@/api/NotificationsService';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { findAllAnswersApi } from '@/api/AnswersService';
import { findAllEventsApi } from '@/api/EventsService';
import { sendEmailsApi } from '@/api/EmailService';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import EventMapVue from '@/components/notifications/EventMap.vue';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import EscalateEventVue from '@/components/notifications/EscalateEvent.vue';
import store from '@/store';

export default ({
    components: {
        EventMapVue,
        VDataTableVirtual,
        EscalateEventVue
    },
    setup() {
        const editEvent = ref({});
        const latitud = ref('');
        const longitud = ref('');
        const listEventsData = ref([]);
        const answersData = ref([]);
        const comment = ref('')
        const currentDateTime = ref('');
        const router = useRouter();

        const headers = [
            { title: 'Comentario', align: 'start', key: 'comentario' },
            { title: 'Estado', align: 'start', key: 'descripcion_estado' },
            { title: 'Usuario', align: 'start', key: 'usuario' },
            { title: 'Fecha', align: 'start', key: 'fecha_envio' },
        ]

        const getCurrentDateTime = () => {
            const currentDate = new Date();
            const formattedDate = formatDate(currentDate);
            const formattedTime = formatTime(currentDate);
            currentDateTime.value = `${formattedDate} ${formattedTime}`;
        };

        const formatDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        };

        const formatTime = (date) => {
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        };

        onMounted(async () => {
            editEvent.value = store.state.eventAtended
            latitud.value = editEvent.value.latitud
            longitud.value = editEvent.value.longitud
            const [responseAnswer, responseEvents] = await Promise.all([
                findAllAnswersApi(store.state.codclienteAdmin),
                findAllEventsApi(store.state.codcuenta, store.state.codclienteAdmin)
            ])
            answersData.value = responseAnswer.data.data ? responseAnswer.data.data[0].respuestas : []
            listEventsData.value = responseEvents.data.data ? responseEvents.data.data[0].eventos : []
        })

        const getPriorityColor = (cod_evento) => {
            if (cod_evento && listEventsData.value.length > 0) {
                // Devuelve la clase CSS correspondiente según el valor de prioridad
                const evento = listEventsData.value.find(event => event.cod_evento == cod_evento)
                switch (evento.prioridad) {
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
        }

        const insertComment = (text) => {
            comment.value = text
        }

        const updateEventStatus = (status) => {
            getCurrentDateTime()
            const data = {
                "id": editEvent.value.ID,
                "comentario": comment.value,
                "fecha_envio": currentDateTime.value,
                "descripcion_estado": status,
                "rol": store.state.rol,
                "usuario": store.state.username
            }
            if (comment.value != "") {
                confirmBasic(async () => {
                    addCommentEventsApi(data)
                        .then(() => {
                            basicAlert(async () => {
                                router.push('/pendienteslistados');
                            }, 'success', 'Logrado', 'Se agrego el comentario correctamente')
                        })
                        .catch(() => {
                            basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro agregar el comentario')
                        })
                }, '¿Estás seguro de agregar este comentario?', 'Aceptar');
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'No se registro un comentario')
            }
        }

        const onSendEmail = (data) => {
            // Seleccionar los campos requeridos del objeto "data"
            // Construir el cuerpo del correo con los campos seleccionados en formato HTML
            const body = ` Código Evento: ${editEvent.value.cod_evento} \n Conductor: ${editEvent.value.conductor} \n Placa: ${editEvent.value.placa} \n Fecha de evento: ${editEvent.value.fecha_actual} \n`;
            // Crear el payload para enviar el correo
            const payload = {
                subject: 'Alerta de MONITORS4',
                body: body,
                to: data.email
            };
            sendEmailsApi(payload)
                .then(() => {
                    basicAlert(async () => { }, 'success', 'Logrado', 'Se escalo el evento correctamente')
                })
        }

        return {
            updateEventStatus,
            getPriorityColor,
            insertComment,
            onSendEmail,
            comment,
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
    background-color: #60a5fa;
    /* Color de fondo para prioridad REGULAR */
    color: white;
    /* Color del texto para prioridad REGULAR */
}

/* Clase para prioridad URGENTE */
.urgent-color-class {
    background-color: #fb923c;
    /* Color de fondo para prioridad URGENTE */
    color: white;
    /* Color del texto para prioridad URGENTE */
}

/* Clase para prioridad CRITICO */
.critical-color-class {
    background-color: #f87171;
    /* Color de fondo para prioridad CRITICO */
    color: white;
    /* Color del texto para prioridad CRITICO */
}
</style>