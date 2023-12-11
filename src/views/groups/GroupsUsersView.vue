<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Grupo de usuarios</h1>
            </div>
            <CreateProceduresVue @create-item="onCreateItem" />
        </div>
        <div class="w-full rounded-lg bg-white grid grid-cols-2 gap-3 p-4 shadow-md">
            <div>
                <v-alert color="#2A3B4D" theme="dark" icon="mdi-account-details" density="compact" border>
                    Lista de usuarios
                </v-alert>
                <div class="p-3 border-2 border-blue-400 rounded-lg mt-3">
                    <v-alert color="#bfdbfe" theme="dark" icon="mdi-account" density="compact">
                        bryan.ope1
                    </v-alert>
                </div>
            </div>
            <div>
                <v-alert color="#2A3B4D" theme="dark" icon="mdi-account-group" density="compact" border>
                    Grupos de usuarios
                </v-alert>
                <div class="mt-3">
                    <v-expansion-panels multiple>
                        <v-expansion-panel color="blue" v-for="i in 3" :key="i">
                            <v-expansion-panel-title color="blue-lighten-1">
                                Pruebitaa
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-alert color="#bfdbfe" theme="dark" icon="mdi-account" density="compact">
                                    bryan.ope1
                                </v-alert>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { findAllProceduresApi, createProceduresApi, deleteProceduresApi } from '@/api/ProceduresService';
import CreateProceduresVue from '@/components/procedures/CreateProcedures.vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { onMounted, ref } from "vue";
import store from '@/store';

export default ({
    components: {
        CreateProceduresVue,
    },
    setup() {
        const listAnswersData = ref([]);

        onMounted(async () => {
            await loadData();
        })

        const loadData = async () => {
            findAllProceduresApi(store.state.codcuenta, store.state.codcliente)
                .then(response => {
                    listAnswersData.value = response.data.data[0].procedimientos
                })
        }

        const onCreateItem = (data) => {
            if (data.cod_evento != "" && data.descripcion != "" && data.detalles != "") {
                createProceduresApi(data)
                    .then(() => {
                        basicAlert(async () => {
                            await loadData();
                        }, 'success', 'Logrado', 'Se ha creado el procedimiento correctamente')
                    })
                    .catch(() => {
                        basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro crear el procedimiento')
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Rellene todos los campos')
            }
        }

        const onDeleteItem = (item) => {
            const data = {
                "cod_evento": item.item.cod_evento,
                "cod_cuenta": store.state.codcuenta,
                "cod_cliente": store.state.codcliente
            }
            confirmBasic(async () => {
                await deleteProceduresApi(data)
                    .then(() => {
                        basicAlert(async () => {
                            await loadData();
                        }, 'success', 'Logrado', 'Se ha eliminado el procedimiento correctamente')
                    })
                    .catch(error => {
                        console.log(error)
                        basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro eliminar')
                    })
            }, '¿Estás seguro de eliminar este procedimiento?', 'Aceptar');
        }

        return {
            listAnswersData,
            onDeleteItem,
            onCreateItem,
        }
    }
})
</script>