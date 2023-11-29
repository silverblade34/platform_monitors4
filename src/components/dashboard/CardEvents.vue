<template>
    <div class="bg-white rounded-lg p-5 grid grid-cols-4 shadow-sm items-center">
        <div class="col-span-1 flex items-center justify-start">
            <div class="p-4 rounded-lg text-white" :class="BgCard">
                <v-icon size="large">{{ Icon }}</v-icon>
            </div>
        </div>
        <div class="col-span-3">
            <p>{{ Title }}</p>
            <p class="text-2xl font-bold pt-3 title_poppins">{{ Amount }}</p>
        </div>
    </div>
</template>
<script>
export default ({
    props: {
        BgCard: String,
        Icon: String,
        Amount: String,
        Title: String
    }
})
</script>