<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Administrar tipo de eventos</h1>
            </div>
            <CreateEventsVue @create-item="onCreateItem" />
        </div>
        <TableEventsVue :desserts="listEventsData"/>
    </div>
</template>
<script>
import { findAllEventsApi } from '@/api/EventsService';
import CreateEventsVue from '@/components/events/CreateEvents.vue';
import TableEventsVue from '@/components/events/TableEvents.vue';
import { onMounted, ref } from 'vue';
import store from '@/store';

export default ({
    components: {
        CreateEventsVue,
        TableEventsVue
    },
    setup() {
        const listEventsData = ref([]);

        onMounted(() => {
            findAllEventsApi(store.state.codcuenta, store.state.codcliente)
                .then(response => {
                    listEventsData.value = response.data.data ? response.data.data[0].eventos : []
                })
        })

        const onCreateItem = (data) => {
            console.log(data)
        }

        return {
            onCreateItem,
            listEventsData
        }
    }
})
</script>