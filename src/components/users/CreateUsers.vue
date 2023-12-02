<template>
    <v-btn size="small" color="blue" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Crear Nuevo</v-btn>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-indigo-500 font-bold title_views">Crear nuevo usuario</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Nombre" prepend-inner-icon="mdi-text-account" color="indigo"
                        v-model="name"></v-text-field>
                    <v-text-field variant="outlined" label="Usuario" prepend-inner-icon="mdi-clipboard-account"
                        color="indigo" v-model="username"></v-text-field>
                    <v-select label="Estado" :items="['Operador', 'Supervisor']" variant="outlined" class="col-span-2"
                        color="indigo" v-model="state"></v-select>
                    <v-text-field color="indigo" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" label="Ingrese su contraseña"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                        v-model="password"></v-text-field>
                    <v-text-field color="indigo" :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible2 ? 'text' : 'password'" label="Repetir contraseña"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible2 = !visible"
                        v-model="passwordRepeat"></v-text-field>
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
        const name = ref('');
        const direction = ref('');
        const visible = ref(false);
        const visible2 = ref(false);

        const createItem = () => {
            emit('create-item', {
                name: name.value,
                direction: direction.value
            })
            name.value = direction.value = ""
            dialog.value = false
        }
        return {
            visible,
            visible2,
            dialog,
            name,
            direction,
            createItem
        }
    }
}
</script>