<template>
    <v-menu bottom right>
        <v-btn icon slot="activator" dark>
            <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile @click.native="logout">
                <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: 'MenuMoreVert',
        methods: {
            logout() {
                this.$storage.removeItem('webchat_profile')
                
                this.$socket.emit('agent-disconnected', this.$store.state.user)
                this.$store.dispatch('changeUser', {})

                this.$router.push('/login')
            }
        }
    }
</script>