<template>
  <div id="menu" :class="status ? 'expanded' : ''">

   

    <div id="menuTitle" role="banner">
      <router-link to="/"><h1>@dev.ufal > </h1></router-link>
      <h2>grupo_de_estudos &leftarrow; <v-icon>fa-code-fork</v-icon> &lang; master &rangle; </master> <span>_</span></h2>
    </div>

    <v-btn fab absolute dark small left :color="voiceMode ? 'green' : 'red'">
      <v-icon dark v-if="voiceMode" @click="voiceMode = false">fa-volume-up</v-icon>
      <v-icon dark v-else @click="voiceMode = true">fa-volume-off</v-icon>
    </v-btn>

    <div id="menuLinks" role="navigation">
      <button id="collapseUp" v-if="status" @click="hidden()"> 
        <v-icon left> fa-arrow-up</v-icon> Esconder menu
      </button>
      <button id="collapseDown" v-if="!status" @click="show()"> 
        <v-icon left> fa-arrow-down</v-icon> Expandir menu
      </button>
      <transition name="fade" enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
        <nav v-if="status">
          <li  v-for="(navbar_link, index) in navbar_links" v-bind:key="index">
            <router-link :to="navbar_link.url" v-on:focus.native="speek(navbar_link.title)" v-if="voiceMode">
              <v-icon dark left>{{navbar_link.icon}}</v-icon>
              <span>{{ navbar_link.title }} </span>
            </router-link>

            <router-link :to="navbar_link.url" v-else>
              <v-icon dark left>{{navbar_link.icon}}</v-icon>
              <span>{{ navbar_link.title }} </span>
            </router-link>
          </li>
        </nav>
      </transition>
     
    </div>
  </div>
</template>

<div class="fa-codepen"></div>

<script>
const msg = new SpeechSynthesisUtterance()
let voices = window.speechSynthesis.getVoices()
msg.voice = voices[16]
msg.rate = 1
msg.pitch = 1

export default {
    data () {
        return {
            navbar_links: [
                {title: 'Início', url: '/', icon: 'fa-home'},
                {title: 'Apresentações', url: '/presentations', icon: 'fa-codepen'},
                {title: 'Projetos', url: '/projects', icon: 'fa-code-fork'},
                {title: 'Cursos', url: '/courses', icon: 'fa-book'},
                {title: 'Calendário', url: '/calendar', icon: 'fa-calendar'},
                {title: 'Equipe', url: '/team', icon: 'fa-users'},
                {title: 'Sobre', url: '/about', icon: 'fa-question'},
            ],
            status: true,
            voiceMode: false
        }
    },

    methods: {
      show() {
        this.status = true
      },

      hidden() {
        this.status = false
      },

      speek(message) {
          msg.text = message;
          speechSynthesis.speak(msg);
      }

    }
}
</script>
