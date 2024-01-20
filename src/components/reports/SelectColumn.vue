<template>
    <v-dialog v-model="dialog" width="500" @click:outside="cancelItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center">Seleccionar columnas a mostrar</span>
            </v-toolbar>
            <v-card-text>
                <div class="w-full rounded-md my-2 flex gap-2 px-3 text-xs" v-for="column in columnList"
                    :key="column.key">
                    <v-checkbox :label="column.title" color="indigo" :value="column.key" hide-details class="text-xs"
                        v-model="selectedColumn" density="small"></v-checkbox>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="cancelItem">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="onGenerateColumn">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref, watch } from 'vue';

export default {
    props: {
        dataColumn: Object,
        openModal: Boolean
    },
    emits: ['cancel-item', 'generate-column'],
    setup(props, { emit }) {
        const columnList = ref([]);
        const dialog = ref(false);
        const selectedColumn = ref([]);

        watch(() => props.openModal, (newVal) => {
            dialog.value = newVal
            selectedColumn.value = props.dataColumn.map(column => column.key)
            columnList.value = props.dataColumn

        })

        const onGenerateColumn = () => {
            emit('generate-column', {selectedColumn: selectedColumn.value})
            cancelItem();
        }

        const cancelItem = () => {
            emit('cancel-item')
        }

        return {
            dialog,
            columnList,
            selectedColumn,
            cancelItem,
            onGenerateColumn
        }
    }
}
</script>