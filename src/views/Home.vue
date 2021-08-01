<template>
  <div class="global-wrapper">
    <hand-screen v-if="showScreen" @showscreen="updateScreen"></hand-screen>
    <prokes-screen v-if="showProkes" @showprokes="updateProkes"></prokes-screen>
    <bride-screen></bride-screen>
    <bride-greeting></bride-greeting>
    <bride-story></bride-story>
    <navigation v-if="navigation"></navigation>
    <form-indri></form-indri>
    <audio id="audio-player" src="@/assets/itsu.mp3">
      Your browser does not support the audio tag.
    </audio>
    <button class="btnControl" @click="toggleAudio()">
      <font-awesome-icon v-if="toogle" icon="music" />
      <font-awesome-icon v-if="!toogle" icon="pause" />
    </button>
  </div>
</template>

<script>
import FormIndri from './parts/Form.vue';
import ProkesScreen from './parts/Prokes.vue';
import BrideScreen from './parts/BrideScreen.vue';
import BrideGreeting from './parts/BrideGreeting.vue';
import BrideStory from './parts/BrideStory.vue';
import Navigation from './parts/Navigation.vue';
// import TimePlace from './parts/TimePlace.vue';
import HandScreen from './parts/HandScreen.vue';

export default {
  components: {
    BrideScreen,
    BrideGreeting,
    BrideStory,
    Navigation,
    // TimePlace,
    ProkesScreen,
    FormIndri,
    HandScreen,
  },
  data() {
    return {
      navigation: 0,
      toogle: 0,
      showProkes: 0,
      showScreen: 1,
    };
  },
  methods: {
    updateProkes(value) {
      this.showProkes = value;
    },
    updateScreen(value) {
      this.showScreen = value;
      var audio = document.getElementById('audio-player');
      audio.play();
    },
    toggleAudio() {
      var audio = document.getElementById('audio-player');

      if (!this.toogle) {
        audio.pause();
      } else {
        audio.play();
      }

      this.toogle = !this.toogle;
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.showScreen == 0) {
        this.showProkes = 1;
      }
    }, 15000);
  },
};
</script>
<style lang="scss" scoped>
.btnControl {
  border: none;
  border: 0px solid black;
  width: 30px;
  height: 30px;
  background: #4d517d;
  color: #fff;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 5;
  font-size: 10px;
  border-radius: 200px;
  text-align: center;
  line-height: 30px;
}
</style>
