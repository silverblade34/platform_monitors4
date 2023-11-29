<template>
  <v-data-table item-value="name" v-model="selected" :items="items" :headers="headers" show-select
    class="text-sm table_events">
  </v-data-table>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable';
export default {
  components: {
    VDataTable,
  },
  methods: {
    remove(key) {
      this.headers = this.headers.filter(header => header.key !== key)
    },
  },
  data() {
    return {
      selected: [],
      headers: [
        {
          title: 'Codigo evento',
          align: 'start',
          key: 'name',
          sortable: true,
        },
        {
          title: 'Placa',
          align: 'start',
          key: 'location',
          sortable: true,
        },
        {
          title: 'Fecha evento', align: 'start', key: 'dateEvent', sortable: true,
        },
        {
          title: 'Fecha recepción', align: 'start', key: 'dateReception', sortable: true,
        },
        {
          title: 'Velocidad', align: 'start', key: 'speed', sortable: true,
        },
        {
          title: 'Dirección', align: 'start', key: 'direction', sortable: true,
        },
        {
          title: 'Estado', align: 'start', key: 'state', sortable: true,
        },
        {
          title: 'Última acción', align: 'start', key: 'lastAction', sortable: true,
        },
        {
          title: 'Prioridad', align: 'start', key: 'priority', sortable: true,
        },
        {
          title: 'Acción', align: 'start', key: 'action', sortable: true,
        }
      ],
      items: [
        {
          name: '🍎 Apple',
          location: 'Washington',
          height: '0.1',
          base: '0.07',
          volume: '0.0001',
        },
        {
          name: '🍌 Banana',
          location: 'Ecuador',
          height: '0.2',
          base: '0.05',
          volume: '0.0002',
        },
        {
          name: '🍇 Grapes',
          location: 'Italy',
          height: '0.02',
          base: '0.02',
          volume: '0.00001',
        },
        {
          name: '🍉 Watermelon',
          location: 'China',
          height: '0.4',
          base: '0.3',
          volume: '0.03',
        },
        {
          name: '🍍 Pineapple',
          location: 'Thailand',
          height: '0.3',
          base: '0.2',
          volume: '0.005',
        },
        {
          name: '🍒 Cherries',
          location: 'Turkey',
          height: '0.02',
          base: '0.02',
          volume: '0.00001',
        },
        {
          name: '🥭 Mango',
          location: 'India',
          height: '0.15',
          base: '0.1',
          volume: '0.0005',
        },
        {
          name: '🍓 Strawberry',
          location: 'USA',
          height: '0.03',
          base: '0.03',
          volume: '0.00002',
        },
        {
          name: '🍑 Peach',
          location: 'China',
          height: '0.09',
          base: '0.08',
          volume: '0.0004',
        },
        {
          name: '🥝 Kiwi',
          location: 'New Zealand',
          height: '0.05',
          base: '0.05',
          volume: '0.0001',
        },
      ],
    }
  },
}
</script>
<style>
.table_events{
  color: #969696 !important;
}
.table_events table thead th {
  font-weight:bolder;
  color: #383838 !important
}
</style>