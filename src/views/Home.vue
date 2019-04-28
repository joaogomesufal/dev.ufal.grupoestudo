<template>
    <div id="home">
        <v-container>
            <v-layout row>
                <v-flex md12>
                    <message-console class="purple" :title="messages[0].title" :text="messages[0].text"></message-console>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import MessageConsole from '../components/MessageConsole'

    export default {
        name: "Home",
        components: {
            MessageConsole
        },

        data () {
            return {
                messages: [
                    {
                        title: 'objetivos.js',
                        text: 'De forma objetiva procuramos botar a mão na massa! Desenvolver projetos que solucione algum tipo de necessidade relacionado a realidade do grupo, compartilhar conhecimento através de mini-cursos, palestras e conversas.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>