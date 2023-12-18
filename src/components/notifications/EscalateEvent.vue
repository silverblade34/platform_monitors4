<template>
    <v-btn color="teal-lighten-2" size="small" class="my-1 md:my-0" @click="dialog = true">Escalar</v-btn>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-400 font-bold title_views">Escalar evento</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Correo" prepend-inner-icon="mdi-email"
                        color="indigo" v-model="email"></v-text-field>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="dialog = false">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="sendEmail">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref } from 'vue';

export default {
    emits: ['send-email'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const email = ref('');

        const sendEmail = () => {
            emit('send-email', {
                email: email.value
            })
            email.value = ""
            dialog.value = false
        }
        return {
            dialog,
            email,
            sendEmail
        }
    }
}
</script>