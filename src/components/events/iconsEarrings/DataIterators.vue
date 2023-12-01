<template>
  <v-card class="elevation-0">
    <v-container class="pa-2" fluid>
      <div class="grid gap-3" :class="gridClass">
        <v-card class="pb-3" border flat v-for="(item, index) in paginatedDesserts" :key="index">
          <div style="position: relative;">
            <!-- Checkbox -->
            <input type="checkbox" style="position: absolute; top: 10px; right: 10px; z-index: 2; transform: scale(1.3);"
              :value="item.ID" @change="toggleSelection(item.ID)" />
            <!-- Imagen -->
            <v-img :src="item.link_imagen || require('@/assets/events/imagen_vacia.jpg')"
              :max-height="item.link_imagen ? '' : '200'"></v-img>
          </div>

          <v-list-item class="mb-2" :subtitle="item.placa + ' - ' + item.conductor">
            <template v-slot:title>
              <strong class="text-h6 mb-2">{{ item.cod_evento }}</strong>
            </template>
          </v-list-item>

          <div class="d-flex justify-space-between px-4">
            <div class="d-flex align-center text-caption text-medium-emphasis me-1">
              <v-icon icon="mdi-clock" start></v-icon>
              <div class="text-truncate">{{ item.hora }}</div>
            </div>
            <v-btn border flat size="small" class="text-none" color="indigo" text="Atender"></v-btn>
          </div>
        </v-card>
      </div>
      <v-pagination v-model="currentPage" :length="totalPages" rounded="circle"></v-pagination>
    </v-container>
  </v-card>
</template>
  
<script>
import { ref, computed, watch, onMounted } from 'vue';
export default {
  props: {
    dataEvents: Array,
  },
  emits: ['selected-events'],
  setup(props, { emit }) {
    const search = ref('');
    const currentPage = ref(1);
    const itemsPerPage = ref(18);
    const desserts = ref([])
    const selectedDiscardEvents = ref(new Set());

    onMounted(() => {
      desserts.value = props.dataEvents
    })

    watch(() => props.dataEvents, (newVal) => {
      desserts.value = newVal
    })

    const paginatedDesserts = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return desserts.value.slice(startIndex, endIndex);
    });

    const totalPages = computed(() => {
      return Math.ceil(desserts.value.length / itemsPerPage.value);
    });

    const goToPage = (pageNumber) => {
      currentPage.value = pageNumber;
    };

    const toggleSelection = (itemId) => {
      // Verifica si el elemento ya está seleccionado
      if (selectedDiscardEvents.value.has(itemId)) {
        // Si ya está seleccionado, lo elimina de la lista
        selectedDiscardEvents.value.delete(itemId);
      } else {
        // Si no está seleccionado, lo agrega a la lista
        selectedDiscardEvents.value.add(itemId);
      }
      emit('selected-events', { selected: Array.from(selectedDiscardEvents.value) })
    };


    return {
      search,
      desserts,
      currentPage,
      itemsPerPage,
      paginatedDesserts,
      totalPages,
      toggleSelection,
      goToPage,
    };
  },
}
</script>
<style>
/* CSS para pantallas muy pequeñas (menos de 1250px) */
@media (max-width: 1249px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* CSS para pantallas pequeñas (entre 1250px y 1549px) */
@media (min-width: 1250px) and (max-width: 1549px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* CSS para pantallas medianas (entre 1550px y 1649px) */
@media (min-width: 1550px) and (max-width: 1649px) {
  .grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

/* CSS para pantallas grandes (1650px o más) */
@media (min-width: 1650px) {
  .grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

/* CSS para teléfonos móviles */
@media (max-width: 599px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>