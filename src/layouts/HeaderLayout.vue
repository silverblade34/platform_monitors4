<template>
    <div class="w-full bg-white flex justify-between items-center px-3">
        <v-btn variant="text" icon="mdi-menu" color="blue-grey-lighten-1" class="cursor-pointer"
            @click.stop="onActionRail"></v-btn>
        <div class="flex items-center text-start text-xs">
            <v-btn icon="mdi-bell-ring" color="blue" size="small" variant="tonal"></v-btn>
            <v-list>
                <v-list-item class="text-start text-xs item-personalizado" :prepend-avatar="avatarPath"
                    :title="['Hola, ', username]" :subtitle="rol">
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
<script>
import store from '@/store'

export default ({
    props: {
        avatarPath: String
    },
    data() {
        return {
            username: store.state.username,
            rol: store.state.rol,
        }
    },
    emits: ['action-rail'],
    setup(_, { emit }) {

        const onActionRail = () => {
            emit('action-rail')
        }

        return {
            onActionRail
        }
    }
})
</script>