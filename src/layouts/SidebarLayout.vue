<template>
    <v-list>
        <div v-for="itemNavegation in itemsNavegation" :key="itemNavegation.value">
            <v-list-item v-if="itemNavegation.children.length == 0" :prepend-icon="itemNavegation.icon" :title="itemNavegation.title" :value="itemNavegation.value"></v-list-item>

            <v-list-group v-else :value="itemNavegation.value" fluid="true">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :prepend-icon="itemNavegation.icon" :title="itemNavegation.title"
                        active-class="bg-indigo-darken-2 rounded-lg"></v-list-item>
                </template>
                <div class="bg-indigo-darken-1 rounded-lg my-2">
                    <v-list-item v-for="item in itemNavegation.children" :key="item.value"  :prepend-icon="item.icon" :title="item.title"
                    :value="item.value"></v-list-item>
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