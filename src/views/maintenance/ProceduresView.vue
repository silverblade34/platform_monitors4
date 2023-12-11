<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Procedimientos</h1>
            </div>
            <CreateProceduresVue @create-item="onCreateItem" />
        </div>
        <TableProceduresVue :desserts="listAnswersData" @edit-item="onEditItem" />
    </div>
    <EditProceduresVue :openModal="editDialog" :itemEdit="editItem" @cancel-item="editDialog = false"
        @edit-item="onUpdateItem" />
</template>
<script>
import { findAllProceduresApi, createProceduresApi, updateProceduresApi } from '@/api/ProceduresService';
import TableProceduresVue from "@/components/procedures/TableProcedures.vue";
import CreateProceduresVue from '@/components/procedures/CreateProcedures.vue';
import EditProceduresVue from '@/components/procedures/EditProcedures.vue';
import { basicAlert } from '@/helpers/SweetAlert';
import { onMounted, ref } from "vue";
import store from '@/store';


export default ({
    components: {
        TableProceduresVue,
        CreateProceduresVue,
        EditProceduresVue
    },
    setup() {
        const listAnswersData = ref([]);
        const editItem = ref({});
        const editDialog = ref(false);

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

        // const onDeleteItem = (item) => {
        //     const data = {
        //         "codigo": item.item.codigo,
        //         "cod_cuenta": store.state.codcuenta,
        //         "cod_cliente": store.state.codcliente
        //     }
        //     console.log(data)
        //     confirmBasic(async () => {
        //         await deleteAnswersApi(data)
        //             .then(() => {
        //                 basicAlert(async () => {
        //                     await loadData();
        //                 }, 'success', 'Logrado', 'Se ha eliminado la respuesta predefinida correctamente')
        //             })
        //             .catch(error => {
        //                 console.log(error)
        //                 basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro eliminar')
        //             })
        //     }, '¿Estás seguro de eliminar esta respuesta predefinida?', 'Aceptar');
        // }

        const onEditItem = (data) => {
            editItem.value = data
            editDialog.value = true
        }

        const onUpdateItem = (data) => {
            updateProceduresApi(data)
                .then(() => {
                    basicAlert(async () => {
                        await loadData();
                    }, 'success', 'Logrado', 'Se ha editado el turno correctamente')
                })
                .catch(() => {
                    basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro editar el turno')
                })
        }

        return {
            listAnswersData,
            editDialog,
            editItem,
            onUpdateItem,
            // onDeleteItem,
            onCreateItem,
            onEditItem
        }
    }
})
</script>