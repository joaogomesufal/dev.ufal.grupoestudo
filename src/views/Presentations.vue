<template>
    <div id="projects">
        <v-container>
            <v-felx md12> 
                <message-console title="apresentacoes.js" text="Página em desenvolvimento"></message-console>
            </v-felx>
        </v-container>
    </div>
</template>

<script>
import MessageConsole from '../components/MessageConsole'

export default {
    name: "presentations",
    components: {
        MessageConsole
    }    
}
</script>

