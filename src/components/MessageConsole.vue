<template>
    <div class="message-console">
        <div class="message-console-header">
            <h3>@dev.ufal > grupo_de_estudos: {{ title }}<span>_</span></h3>
        </div>
        <div class="message-console-body">
            <p>
                {{text}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageConsole",
        props: ['title', 'text']
    }
</script>
