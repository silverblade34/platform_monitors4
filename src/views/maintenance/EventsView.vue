<template>
    <div>
        <div class="flex justify-between w-full">
            <div>
                <h1 class="font-bold text-xl title_poppins pb-5">Administrar tipo de eventos</h1>
            </div>
            <CreateEvents @create-item="onCreateItem"/>
        </div>

    </div>
</template>
<script>
import CreateEvents from '@/components/events/CreateEvents.vue';
export default ({
    components: {
        CreateEvents
    },
    setup(){
        const onCreateItem = (data) => {
            console.log(data)
        }

        return{
            onCreateItem
        }
    }
})
</script>