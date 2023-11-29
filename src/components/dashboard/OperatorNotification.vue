<template>
    <div class="shadow-sm bg-white rounded-lg">
        <p class="border-b p-3 font-medium text-gray-600 text-center">
            Not. atendidas por operador
        </p>
        <div class="container_items container_scroll">
            <div class="p-4 flex items-center" v-for="i in 5" :key="i">
                <span class="px-3">
                    <v-icon size="large" color="light-green-darken-1">mdi-account-tie-voice-outline</v-icon>
                </span>
                <span class="w-full pl-2 text-gray-500">
                    Operador {{ i }}
                </span>
                <span class="font-bold text-indigo-800 text-xl pr-3">
                    {{ i + 15 }}
                </span>
            </div>
        </div>
    </div>
</template>
<script></script>