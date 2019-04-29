<template>
    <div id="projects">
        <v-container>
            <v-felx md12> 
                <message-console title="cursos.js" text="Página em desenvolvimento"></message-console>
            </v-felx>
        </v-container>
    </div>
</template>

<script>
import MessageConsole from '../components/MessageConsole'

export default {
    name: "courses",
    components: {
        MessageConsole
    }    
}
</script>

