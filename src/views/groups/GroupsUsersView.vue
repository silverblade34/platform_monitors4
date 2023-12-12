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
                <v-alert color="#3b82f6" theme="dark" icon="mdi-account-details" density="compact" border>
                    Lista de usuarios
                </v-alert>
                <div class="p-3 border-2 border-blue-400 rounded-lg mt-3">
                    <v-alert color="#bfdbfe" theme="dark" icon="mdi-account" density="compact" class="my-1" v-for="user in dataUsers" :key="user.usuario">
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
                        <v-expansion-panel v-for="i in 3" :key="i">
                            <v-expansion-panel-title color="blue-grey-lighten-5">
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
import { findAllClientsApi } from '@/api/UsersService';
import CreateProceduresVue from '@/components/procedures/CreateProcedures.vue';
import { onMounted, ref } from "vue";
import store from '@/store';

export default ({
    components: {
        CreateProceduresVue,
    },
    setup() {
        const dataUsers = ref([]);

        onMounted(async () => {
            await loadData();
        })

        const loadData = async () => {
            findAllClientsApi(store.state.codcuenta, store.state.empresa)
                .then(response => {
                    dataUsers.value = response.data.data.filter(cliente => cliente.empresa == store.state.empresa && cliente.rol != "Administrador")
                })
        }

        return {
            dataUsers,
        }
    }
})
</script>