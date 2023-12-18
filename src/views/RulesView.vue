<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Reglas</h1>
            </div>
            <CreateAnswersVue @create-item="onCreateItem" />
        </div>
        <div class="w-full rounded-lg bg-white gap-3 p-4 shadow-md">
            <div class="w-full bg-orange-400 text-white rounded-lg p-3">
                Regla 1
            </div>
        </div>
    </div>
    <EditAnswersVue :openModal="editDialog" :itemEdit="editItem" @cancel-item="editDialog = false"
        @edit-item="onUpdateItem" />
</template>
<script>
import { findAllRulesApi, createAnswersApi, updateAnswersApi, deleteAnswersApi } from '@/api/RulesService';
import CreateAnswersVue from '@/components/answers/CreateAnswers.vue';
import EditAnswersVue from '@/components/answers/EditAnswers.vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { onMounted, ref } from "vue";
import store from '@/store';


export default ({
    components: {
        CreateAnswersVue,
        EditAnswersVue
    },
    setup() {
        const listAnswersData = ref([]);
        const editItem = ref({});
        const editDialog = ref(false);

        onMounted(async () => {
            await loadData();
        })

        const loadData = async () => {
            findAllRulesApi(store.state.codcuenta, store.state.codcliente)
                .then(response => {
                    listAnswersData.value = response.data.data[0].respuestas
                })
        }

        const onCreateItem = (data) => {
            if (data.sigla != "" && data.text != "") {
                createAnswersApi(data)
                    .then(() => {
                        basicAlert(async () => {
                            await loadData();
                        }, 'success', 'Logrado', 'Se ha creado la respuesta predefinida correctamente')
                    })
                    .catch(() => {
                        basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro crear el evento')
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Rellene todos los campos')
            }
        }

        const onDeleteItem = (item) => {
            const data = {
                "codigo": item.item.codigo,
                "cod_cuenta": store.state.codcuenta,
                "cod_cliente": store.state.codcliente
            }
            confirmBasic(async () => {
                await deleteAnswersApi(data)
                    .then(() => {
                        basicAlert(async () => {
                            await loadData();
                        }, 'success', 'Logrado', 'Se ha eliminado la respuesta predefinida correctamente')
                    })
                    .catch(error => {
                        console.log(error)
                        basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro eliminar')
                    })
            }, '¿Estás seguro de eliminar esta respuesta predefinida?', 'Aceptar');
        }

        const onEditItem = (data) => {
            editItem.value = data
            editDialog.value = true
        }

        const onUpdateItem = (data) => {
            updateAnswersApi(data)
                .then(() => {
                    basicAlert(async () => {
                        await loadData();
                    }, 'success', 'Logrado', 'Se ha editado la respuesta predefinida correctamente')
                })
                .catch(() => {
                    basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro editar la respuesta predifinida')
                })
        }

        return {
            listAnswersData,
            editDialog,
            editItem,
            onUpdateItem,
            onDeleteItem,
            onCreateItem,
            onEditItem
        }
    }
})
</script>