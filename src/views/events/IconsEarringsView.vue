<template>
    <div>
        <h1 class="font-bold text-xl title_poppins pb-5">Eventos pendientes</h1>
        <div class="w-full rounded-lg bg-white shadow-md">
            <DataIteratorsVue />
        </div>
    </div>
</template>
<script>
import DataIteratorsVue from '@/components/events/iconsEarrings/DataIterators.vue';

export default ({
    name: "IconsEarringsView",
    components: {
        DataIteratorsVue
    }
})

</script>