<template>
    <v-btn size="small" color="blue" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Crear Nuevo</v-btn>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-400 font-bold title_views">Crear tipo de evento</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Codigo de evento" prepend-inner-icon="mdi-qrcode" color="indigo"
                        v-model="cod_evento"></v-text-field>
                    <v-text-field variant="outlined" label="Descripción" prepend-inner-icon="mdi-text-box" color="indigo"
                        v-model="descripcion"></v-text-field>
                    <v-select prepend-inner-icon="mdi-priority-high" label="Prioridad" :items="['REGULAR', 'URGENTE', 'CRITICO']"
                        variant="outlined" class="col-span-2" color="indigo" v-model="prioridad"></v-select>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="dialog = false">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="createItem">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref } from 'vue'
export default {
    emits: ['create-item'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const cod_evento = ref('');
        const descripcion = ref('');
        const prioridad = ref('');

        const createItem = () => {
            emit('create-item', {
                cod_evento: cod_evento.value,
                descripcion: descripcion.value,
                prioridad: prioridad.value
            })
            cod_evento.value = descripcion.value = prioridad.value = ""
            dialog.value = false
        }
        return {
            dialog,
            cod_evento,
            descripcion,
            prioridad,
            createItem
        }
    }
}
</script>