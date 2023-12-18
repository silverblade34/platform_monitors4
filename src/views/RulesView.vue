<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Reglas</h1>
            </div>
            <CreateRulesVue @create-item="onCreateItem" :dataGroupUnitsProps="dataGroupUnits"
                :dataGroupUsersProps="dataGroupUsers" :dataGroupEventsProps="dataGroupEvents" />
        </div>
        <TableRulesVue :desserts="listRulesData" :dataGroupUnitsProps="dataGroupUnits" :dataGroupUsersProps="dataGroupUsers"
            :dataGroupEventsProps="dataGroupEvents" />
    </div>
    <EditAnswersVue :openModal="editDialog" :itemEdit="editItem" @cancel-item="editDialog = false"
        @edit-item="onUpdateItem" />
</template>
<script>
import { findAllRulesApi, updateAnswersApi, deleteAnswersApi } from '@/api/RulesService';
import { findAllGroupsUsersApi } from '@/api/GroupUsersService';
import { findAllGroupsEventsApi } from '@/api/GroupEventsService';
import { findAllGroupsUnitsApi } from '@/api/GroupUnitsService';
import CreateRulesVue from '@/components/rules/CreateRules.vue';
import EditAnswersVue from '@/components/answers/EditAnswers.vue';
import TableRulesVue from '@/components/rules/TableRules.vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { onMounted, ref } from "vue";
import store from '@/store';


export default ({
    components: {
        CreateRulesVue,
        EditAnswersVue,
        TableRulesVue
    },
    setup() {
        const dataGroupUnits = ref([]);
        const dataGroupUsers = ref([]);
        const dataGroupEvents = ref([]);
        const listRulesData = ref([]);
        const editItem = ref({});
        const editDialog = ref(false);

        onMounted(async () => {
            await loadData();
        })

        const loadData = async () => {
            const [responseRules, responseGroupUsers, reponseGroupEvents, responseGroupUnits] = await Promise.all([
                findAllRulesApi(store.state.codcuenta, store.state.codcliente),
                findAllGroupsUsersApi(store.state.codcuenta, store.state.codcliente),
                findAllGroupsEventsApi(store.state.codcuenta, store.state.codcliente),
                findAllGroupsUnitsApi(store.state.codcuenta, store.state.codcliente)
            ])
            listRulesData.value = responseRules.data.data ? responseRules.data.data[0].reglas : []
            dataGroupUnits.value = responseGroupUnits.data.data ? responseGroupUnits.data.data[0].grupos_unidades : []
            dataGroupUsers.value = responseGroupUsers.data.data ? responseGroupUsers.data.data[0].grupos_usuarios : []
            dataGroupEvents.value = reponseGroupEvents.data.data ? reponseGroupEvents.data.data[0].grupos_tiposdeventos : []
        }

        const onCreateItem = (data) => {
            console.log(data)
            if (data.regla != "" && data.cod_grupotiposdeventos.length > 0 && data.cod_grupounidades.length > 0 && data.cod_grupousuarios.length > 0) {
                console.log(data)
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Rellene todos los campos, se debe asignar al menos un grupo por cada tipo')
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
            dataGroupUnits,
            dataGroupUsers,
            dataGroupEvents,
            listRulesData,
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