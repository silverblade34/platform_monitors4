<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="indigo-darken-1"
                class="border-2 border-sky-500">
                <div class="p-2 py-8 flex items-center justify-center">
                    <img :src="logoBusiness" class="w-[7rem] bg-white p-2 rounded-md" />
                </div>
                <SidebarLayout :itemsNavegation="filteredItems" />
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-100 block">
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
import logoBusiness from "@/assets/duragas_logo.png";
import HeaderLayout from "./HeaderLayout.vue";
import SidebarLayout from './SidebarLayout.vue';
import { ref, onMounted, computed } from 'vue';
import store from "@/store";

export default {
    components: {
        HeaderLayout,
        SidebarLayout
    },
    data() {
        return {
            avatarPath: avatarImage,
            logoBusiness: logoBusiness
        }
    },
    setup() {
        const drawer = ref(true);
        const rail = ref(true);
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
                        icon: "mdi-bell-check",
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
                        icon: "mdi-truck",
                        title: "Vehiculos",
                        value: "Vehiculos",
                        to: "vehiculos",
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
                        icon: "mdi-truck",
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

        const filteredItems = computed(() => {
            // Lógica para filtrar los ítems según el rol
            if (store.state.rol === 'Administrador') {
                return ItemsNavegation.value; // Muestra todos los ítems para el rol de administrador
            } else if (store.state.rol === 'Operador') {
                // Filtra la lista para mostrar solo ciertos ítems para el rol de usuario
                return ItemsNavegation.value.filter(item => item.value === 'Dashboard' || item.value === 'Eventos');
            } else {
                return []; // Si el rol no coincide con ninguna condición, muestra una lista vacía
            }
        });

        const handleResize = () => {
            rail.value = window.innerWidth <= 1000; // Define aquí el ancho máximo para considerar como pantalla pequeña
        };
        onMounted(() => {
            // Llama a la función handleResize al cargar la página y en cada cambio de tamaño de la ventana
            handleResize();
            window.addEventListener("resize", handleResize);
        })
        return {
            filteredItems,
            ItemsNavegation,
            drawer,
            rail
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