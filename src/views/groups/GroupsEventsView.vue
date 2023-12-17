<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Grupo de usuarios</h1>
            </div>
            <CreateGroupVue @create-item="onCreateItem" />
        </div>
        <div class="w-full rounded-lg bg-white grid grid-cols-2 gap-3 p-4 shadow-md">
            <div>
                <v-alert color="#3b82f6" theme="dark" icon="mdi-account-details" density="compact" border>
                    Lista de usuarios
                </v-alert>
                <div class="p-3 border-2 border-blue-400 rounded-lg mt-3 min-h-[5rem]">
                    <v-alert color="#bfdbfe" theme="dark" icon="mdi-account" density="compact" class="my-1"
                        v-for="user in dataUsers" :key="user.usuario">
                        {{ user.usuario }}
                    </v-alert>
                </div>
            </div>
            <div>
                <v-alert color="#3b82f6" theme="dark" icon="mdi-account-group" density="compact" border>
                    Grupos de usuarios
                </v-alert>
                <div class="mt-3">
                    <v-expansion-panels multiple>
                        <v-expansion-panel v-for="group in dataGroupUsers" :key="group.codigo">
                            <v-expansion-panel-title color="blue-grey-lighten-5">
                                {{ group.nombre }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <!-- <div class="flex justify-end gap-2 pb-2">
                                    <v-btn density="compact" color="red">Quitar usuarios</v-btn>
                                    <v-btn density="compact" color="indigo">Guardar asignación</v-btn>
                                </div> -->
                                <div class="p-3 rounded-lg border min-h-[4rem]">
                                    <v-alert color="#bfdbfe" theme="dark" icon="mdi-account" density="compact"
                                        v-for="user in group.usuarios" :key="user.name">
                                        {{ user.name }}
                                    </v-alert>
                                </div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { findAllClientsApi } from '@/api/UsersService';
import { findAllGroupsUsersApi, createGroupsUsersApi } from '@/api/GroupUsersService';
import CreateGroupVue from '@/components/groups/users/CreateGroupUsers.vue';
import { basicAlert } from '@/helpers/SweetAlert';
import { onMounted, ref } from "vue";
import store from '@/store';

export default ({
    components: {
        CreateGroupVue
    },
    setup() {
        const dataUsers = ref([]);
        const dataGroupUsers = ref([]);

        onMounted(async () => {
            await loadData();
        })

        const loadData = async () => {
            const [responseUsers, responseGroupUsers] = await Promise.all([
                findAllClientsApi(store.state.codcuenta, store.state.empresa),
                findAllGroupsUsersApi(store.state.codcuenta, store.state.codcliente)
            ])
            dataUsers.value = responseUsers.data.data.filter(cliente => cliente.empresa == store.state.empresa && cliente.rol != "Administrador")
            dataGroupUsers.value = responseGroupUsers.data.data ? responseGroupUsers.data.data[0].grupos_usuarios : []
        }

        const onCreateItem = (data) => {
            if (data.nombre != "") {
                createGroupsUsersApi(data)
                    .then(() => {
                        basicAlert(async () => {
                            await loadData();
                        }, 'success', 'Logrado', 'Se ha creado el grupo correctamente')
                    })
                    .catch(() => {
                        basicAlert(() => { }, 'error', 'Hubo un error', 'No se logro crear el grupo')
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', 'Ingrese un nombre')
            }
        }

        return {
            dataUsers,
            dataGroupUsers,
            onCreateItem
        }
    }
})
</script>