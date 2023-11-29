<template>
    <div class="col-span-1 shadow-sm bg-white rounded-lg">
        <p class="border-b p-3 font-medium text-gray-600 text-center">
            Notificaciones por vehiculos
        </p>
        <div class="container_items container_scroll">
            <div class="p-4 flex items-center" v-for="i in 10" :key="i">
                <span class="px-2">
                    <v-icon size="large" color="cyan-lighten-1">mdi-truck</v-icon>
                </span>
                <span class="w-full pl-2 text-gray-500">
                    AXX908 - LEOVAL
                </span>
                <span class="font-bold text-indigo-800 text-xl pr-2">
                    {{ i + 15 }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.container_items {
    max-height: 30rem;
    overflow-y: auto;
}

</style>