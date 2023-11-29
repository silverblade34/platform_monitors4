<template>
    <v-list>
        <div v-for="itemNavegation in itemsNavegation" :key="itemNavegation.value">
            <router-link :to="itemNavegation.to" v-if="itemNavegation.children.length == 0">
                <v-list-item :prepend-icon="itemNavegation.icon" :title="itemNavegation.title"
                    :value="itemNavegation.value"></v-list-item>
            </router-link>
            <v-list-group v-else :value="itemNavegation.value" fluid>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :prepend-icon="itemNavegation.icon" :title="itemNavegation.title"
                        active-class="bg-indigo-lighten-1 rounded-lg"></v-list-item>
                </template>
                <div class="bg-indigo-darken-2 rounded-lg my-2">
                    <router-link :to="item.to" v-for="item in itemNavegation.children" :key="item.value">
                        <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
                    </router-link>
                </div>
            </v-list-group>
        </div>
    </v-list>
</template>
<script>
export default ({
    props: {
        itemsNavegation: Array
    },
})
</script>