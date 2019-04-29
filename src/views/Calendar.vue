<template>
    <div id="projects">
        <v-container>
            <v-felx md12> 
                <message-console title="calendario.js" text="Página em desenvolvimento"></message-console>
            </v-felx>
        </v-container>
    </div>
</template>

<script>
import MessageConsole from '../components/MessageConsole'

export default {
    name: "calendar",
    components: {
        MessageConsole
    }    
}
</script>

