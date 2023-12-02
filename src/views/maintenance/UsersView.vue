<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Administrar usuarios</h1>
            </div>
            <CreateUsersVue />
        </div>
        <TableUsersVue :desserts="dataUsers" />
    </div>
</template>
<script>
import { findAllClientsToAccountApi } from '@/api/UsuariosService';
import { onMounted, ref } from 'vue';
import store from '@/store';
import TableUsersVue from '@/components/users/TableUsers.vue';
import CreateUsersVue from '@/components/users/CreateUsers.vue';

export default ({
    components: {
        TableUsersVue,
        CreateUsersVue
    },
    setup() {
        const dataUsers = ref([]);

        onMounted(() => {
            findAllClientsToAccountApi(store.state.codcuenta)
                .then(response => {
                    const clientes = response.data.data[0].clientes ? response.data.data[0].clientes : []
                    console.log("-CLIENTES-")
                    console.log(clientes)
                    console.log("-EMPRESA-")
                    console.log(store.state.empresa)
                    dataUsers.value = clientes.filter(cliente => cliente.empresa == store.state.empresa && cliente.rol != "Administrador")
                    console.log(dataUsers.value)
                })
        })

        return {
            dataUsers
        }
    }
})
</script>