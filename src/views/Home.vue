<template>
  <div class="global-wrapper">
    <bride-screen></bride-screen>
    <bride-story></bride-story>
    <bride-greeting></bride-greeting>
    <time-place></time-place>
    <navigation v-if="navigation"></navigation
    ><audio id="audio-player">
      <source src="@/assets/itsu.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    <button class="btnControl" @click="toggleAudio()">
      <font-awesome-icon v-if="!toogle" icon="play" />
      <font-awesome-icon v-if="toogle" icon="pause" />
    </button>
  </div>
</template>

<script>
import BrideScreen from './parts/BrideScreen.vue';
import BrideGreeting from './parts/BrideGreeting.vue';
import BrideStory from './parts/BrideStory.vue';
import Navigation from './parts/Navigation.vue';
import TimePlace from './parts/TimePlace.vue';

export default {
  components: {
    BrideScreen,
    BrideGreeting,
    BrideStory,
    Navigation,
    TimePlace,
  },
  data() {
    return {
      navigation: 0,
      toogle: 1,
    };
  },
  methods: {
    toggleAudio() {
      var audio = document.getElementById('audio-player');

      if (this.toogle) {
        audio.pause();
      } else {
        audio.play();
      }

      this.toogle = !this.toogle;
    },
  },
  mounted() {
    var audio = document.getElementById('audio-player');
    audio.play();
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
  font-size: 11px;
  border-radius: 200px;
  text-align: center;
  line-height: 30px;
}
</style>
