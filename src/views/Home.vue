<template>
  <div class="global-wrapper">
    <bride-screen></bride-screen>
    <bride-story></bride-story>
    <bride-greeting></bride-greeting>
    <time-place></time-place>
    <navigation v-if="navigation"></navigation>
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
    };
  },
};
</script>
