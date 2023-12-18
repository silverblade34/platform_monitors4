<template>
  <v-data-table item-value="ID" v-model="selected" :items="desserts" :headers="listedHeaders"
    :sort-by="[{ key: 'fecha_actual', order: 'desc' }]" show-select class="text-sm table_events" :search="search">
    <template v-slot:[`item.fecha`]="{ item }">
      <span>
        {{ item.fecha }} {{ item.hora }}
      </span>
    </template>
    <template v-slot:[`item.prioridad`]="{ item }">
      <div class="flex justify-center">
        <div class="h-5 w-5 rounded-full mr-2" :class="{
          'bg-orange-400': item.prioridad === 'URGENTE',
          'bg-red-400': item.prioridad === 'CRITICO',
          'bg-blue-400': item.prioridad === 'REGULAR'
        }">
        </div>
      </div>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="flex gap-1">
        <span @click="editItem(item)">
          <v-btn icon="mdi-pencil" size="small" variant="text" color="green"></v-btn>
          <v-tooltip activator="parent" location="top">Atender</v-tooltip>
        </span>
        <div>
          <div v-if="item.link_video == '' && item.link_imagen == ''">
            <v-btn size="x-small" icon="mdi-video" color="grey">
            </v-btn>
            <v-tooltip activator="parent" location="top">No hay evidencias</v-tooltip>
          </div>
          <div v-else>
            <v-btn icon="mdi-video" size="x-small" color="indigo-lighten-2"
              @click="seeEvidence(item.link_imagen, item.link_video)">
            </v-btn>
            <v-tooltip activator="parent" location="top">Ver evidencias</v-tooltip>
          </div>
        </div>
      </div>
    </template>
  </v-data-table>
</template>
<script>
import ImgEvidencia from '@/assets/events/evidencias.jpg';
import { ref, watch } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import store from '@/store';

export default {
  props: {
    search: String,
    desserts: Array,
    listedHeaders: Array
  },
  components: {
    VDataTable,
  },
  emits: ['selected-events'],
  setup(_, { emit }) {
    const selected = ref([]);
    const router = useRouter();

    const seeEvidence = (link_img, link_video) => {
      // Función para mostrar el modal de imagen
      const showImageModal = () => {
        Swal.fire({
          html: `<img src="${link_img}" alt="" class=w-full>`,
          showCancelButton: true,
          cancelButtonText: 'Volver al menú',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#6D68B8',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Cerrar el modal de la imagen
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Volver al menú anterior (el modal principal)
            seeEvidence(link_img, link_video);
          }
        });
      };

      // Función para mostrar el modal de video
      const showVideoModal = () => {
        Swal.fire({
          html: `
              <div class="flex justify-center">
                <video width="400" height="320" controls>
                  <source src="${link_video}" type="video/mp4">
                </video>
              </div>
              `,
          showCloseButton: true,
          showCancelButton: true,
          cancelButtonText: 'Volver al menú',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#6D68B8',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Cerrar el modal del video
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Volver al menú anterior (el modal principal)
            seeEvidence(link_img, link_video);
          }
        });
      };

      // Crear el modal principal con opciones "Ver imagen" y "Ver video"
      Swal.fire({
        html: `<p class="text-xl font-bold pt-1 text-gray-500">Ver evidencias disponibles</p>
        <div class="w-full flex justify-center">
        <img src="${ImgEvidencia}" alt="" class=w-[50%]>
        </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Ver imagen',
        cancelButtonText: 'Ver video',
        reverseButtons: true,
        focusConfirm: false,
        confirmButtonColor: '#6D68B8',
        focusCancel: false,
      }).then((result) => {
        // Manejar la lógica según la opción seleccionada
        if (result.isConfirmed) {
          if (link_img !== '') {
            showImageModal(); // Mostrar modal de imagen
          } else {
            Swal.fire({
              html: `<p class="pt-4">No hay imagen disponible</p>`,
              showCancelButton: true,
              reverseButtons: true,
              confirmButtonColor: '#6D68B8',
              cancelButtonText: 'Volver al menú',
              confirmButtonText: 'Cerrar',
            }).then((result) => {
              if (result.isConfirmed) {
                // Cerrar el modal del video
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Volver al menú anterior (el modal principal)
                seeEvidence(link_img, link_video);
              }
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          if (link_video !== '') {
            showVideoModal(); // Mostrar modal de video
          } else {
            Swal.fire({
              html: `<p class="pt-4">No hay video disponible</p>`,
              showCancelButton: true,
              reverseButtons: true,
              confirmButtonColor: '#6D68B8',
              cancelButtonText: 'Volver al menú',
              confirmButtonText: 'Cerrar',
            }).then((result) => {
              if (result.isConfirmed) {
                // Cerrar el modal del video
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Volver al menú anterior (el modal principal)
                seeEvidence(link_img, link_video);
              }
            });
          }
        }
      });
    };

    watch(() => selected.value, (newVal) => {
      emit('selected-events', { selected: newVal })
    })

    const editItem = (data) => {
      store.commit('setEventAtended', data);
      router.push('/atenderevento');
    }

    return {
      selected, seeEvidence, editItem
    }
  }
}
</script>
<style>
.table_events {
  color: #797979 !important;
  font-size: 0.8rem;
}

.table_events table thead th {
  font-weight: bolder;
  color: #383838 !important
}
</style>