<template>
    <div id="projects">
        <v-container>
            <v-felx md12> 
                <message-console title="equipe.js" text="Página em desenvolvimento"></message-console>
            </v-felx>
        </v-container>
    </div>
</template>

<script>
import MessageConsole from '../components/MessageConsole'

export default {
    name: "team",
    components: {
        MessageConsole
    }    
}
</script>

