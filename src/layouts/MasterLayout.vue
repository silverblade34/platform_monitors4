<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="indigo-darken-1"
                class="border-2 border-sky-500">
                <div class="p-2 py-8 flex items-center justify-center">
                    <img :src="logoBusiness" class="w-[6rem] bg-white p-3 rounded-md" />
                </div>
                <SidebarLayout :itemsNavegation="ItemsNavegation" />
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-100">
                <HeaderLayout :avatarPath="avatarPath" @action-rail="rail = !rail" />
                <section class="overflow-y-auto section_main p-8">
                    <router-view />
                </section>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import avatarImage from "@/assets/iconuser_hombre.png";
import logoBusiness from "@/assets/signia_logo.png";
import HeaderLayout from "./HeaderLayout.vue";
import SidebarLayout from './SidebarLayout.vue';
import { ref } from 'vue';

export default {
    components: {
        HeaderLayout,
        SidebarLayout
    },
    data() {
        return {
            avatarPath: avatarImage,
            logoBusiness: logoBusiness,
            drawer: true,
            rail: true,
        }
    },
    setup() {
        const ItemsNavegation = ref([
            {
                icon: "mdi-home",
                title: "Dashboard",
                value: "Dashboard",
                to: "home",
                children: []
            },
            {
                icon: "mdi-bell",
                title: "Eventos",
                value: "Eventos",
                to: "",
                children: [
                    {
                        icon: "mdi-format-list-bulleted",
                        title: "Pendientes listados",
                        value: "Pendientes listados",
                        to: "pendienteslistados",
                        children: []
                    },
                    {
                        icon: "mdi-image",
                        title: "Pendientes iconos",
                        value: "Pendientes iconos",
                        to: "pendientesiconos",
                        children: []
                    },
                    {
                        icon: "mdi-account-check",
                        title: "Confirmados",
                        value: "Confirmados",
                        to: "confirmados",
                        children: []
                    },
                    {
                        icon: "mdi-bell-remove",
                        title: "Descartados",
                        value: "Descartados",
                        to: "descartados",
                        children: []
                    }
                ]
            },
            {
                icon: "mdi-file-table",
                title: "Reportes",
                value: "Reportes",
                to: "reportes",
                children: []
            },
            {
                icon: "mdi-cog",
                title: "Mantenimientos",
                value: "Mantenimientos",
                to: "",
                children: [
                    {
                        icon: "mdi-account",
                        title: "Usuarios",
                        value: "Usuarios",
                        to: "usuarios",
                        children: []
                    },
                    {
                        icon: "mdi-bell-plus-outline",
                        title: "Tipo eventos",
                        value: "Tipo eventos",
                        to: "tipoeventos",
                        children: []
                    },
                    {
                        icon: "mdi-forum",
                        title: "Respuestas predefinidas",
                        value: "Respuestas predefinidas",
                        to: "respuestaspredefinidas",
                        children: []
                    },
                    {
                        icon: "mdi-account-clock",
                        title: "Turnos",
                        value: "Turnos",
                        to: "turnos",
                        children: []
                    },
                    {
                        icon: "mdi-form-select",
                        title: "Procedimientos",
                        value: "Procedimientos",
                        to: "procedimientos",
                        children: []
                    },
                    {
                        icon: "mdi-car-estate",
                        title: "Unidades",
                        value: "Unidades",
                        to: "unidades",
                        children: []
                    }
                ]
            },
            {
                icon: "mdi-group",
                title: "Grupos",
                value: "Grupos",
                to: "",
                children: [
                    {
                        icon: "mdi-account-multiple",
                        title: "Usuarios",
                        value: "GUsuarios",
                        to: "grupousuarios",
                        children: []
                    },
                    {
                        icon: "mdi-car-estate",
                        title: "Unidades",
                        value: "GUnidades",
                        to: "grupounidades",
                        children: []
                    },
                    {
                        icon: "mdi-bell-alert",
                        title: "Eventos",
                        value: "GEventos",
                        to: "grupoeventos",
                        children: []
                    }
                ]
            },
            {
                icon: "mdi-account-lock",
                title: "Reglas",
                value: "Reglas",
                to: "reglas",
                children: []
            }
        ]);

        return {
            ItemsNavegation
        }
    }
}
</script>
<style>
.v-list-item-title {
    font-size: 14px !important;
}

.v-list-item-subtitle {
    font-size: 13px !important;
}

.section_main {
    overflow-y: auto !important;
    height: 100%;
    padding-bottom: 5rem !important;
}

</style>