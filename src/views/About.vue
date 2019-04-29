<template>
    <div id="projects">
        <v-container>
            <v-felx md12> 
                <message-console title="sobre.js" text="Página em desenvolvimento"></message-console>
            </v-felx>
        </v-container>
    </div>
</template>

<script>
import MessageConsole from '../components/MessageConsole'

export default {
    name: "about",
    components: {
        MessageConsole
    }    
}
</script>

