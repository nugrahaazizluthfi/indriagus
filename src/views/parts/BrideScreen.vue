<template>
  <div class="bride-screen">
    <div class="overlay"></div>
    <div class="bride-name-wrapper">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-offset="100"
        class="bride-title"
      >
        The Weeding Cellebration Of
      </div>
      <div class="bride-name">
        <div
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-offset="200"
          class="image-right"
        ></div>
        <span
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="300"
          class="indri"
          >Indri Agustin</span
        >
        <span data-aos="fade-in" data-aos-duration="3000" class="and">&</span>
        <span data-aos="fade-left" data-aos-duration="3000" class="agus"
          >Agus Aryanto</span
        >
        <div
          data-aos-duration="3000"
          data-aos="fade-up"
          class="image-left"
        ></div>
      </div>
      <div data-aos="fade-in" data-aos-duration="3000" class="bride-time">
        Rabu, 07 Agustus 2021
      </div>
      <div data-aos="fade-in" data-aos-duration="3000" class="bride-countdown">
        <timer></timer>
      </div>
      <div data-aos="fade-in" data-aos-duration="3000" class="bride-button">
        <a
          type="button"
          class="btn btn-bride"
          href="#openundangan"
          v-smooth-scroll
          @click="playSong"
        >
          BUKA UNDANGAN
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '../../components/Timer.vue';
export default {
  components: {
    Timer,
  },
  methods: {
    playSong() {
      var audio = document.getElementById('audio-player');
      audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.bride-screen {
  position: relative;
  background-image: url('~@/assets/bg.jpeg');
  background-size: cover;
  height: 100vh;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba($color: #2c2b3a, $alpha: 0.5);
    z-index: 1;
  }

  .bride-name-wrapper {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
    top: calc(100vh - 85%);
    padding: 20px;
    color: #ffa200;

    .bride-title {
      position: relative;
      top: -20px;
      font-size: 20px;
      font-family: 'Great Vibes', cursive;
      color: #fff;
    }

    .bride-name {
      font-family: 'Great Vibes', cursive;
      position: relative;
      .indri,
      .and,
      .agus {
        display: block;
        letter-spacing: 5px;
        // font-weight: bold;
      }

      .and {
        font-size: 1.2rem;
      }

      .indri,
      .agus {
        font-size: 1.9rem;
        font-weight: bold;
        letter-spacing: 6px;
      }

      .indri {
        position: relative;
        padding-right: 70px;
      }

      .agus {
        position: relative;
        padding-left: 70px;
      }

      .image-right,
      .image-left {
        position: absolute;
        height: 35px;
        width: 35px;
      }

      .image-right {
        background-image: url('~@/assets/pattern.svg');
        background-size: cover;
        transform: rotate(270deg);
        top: -10px;
        right: 40px;
      }

      .image-left {
        background-image: url('~@/assets/pattern.svg');
        background-size: cover;
        bottom: -10px;
        left: 40px;
        transform: rotate(90deg);
      }
    }
    .bride-time {
      font-size: 14px;
      position: relative;
      top: 40px;
      color: #fff;
    }
    .bride-countdown {
      position: relative;
      top: 60px;
    }
    .bride-button {
      position: relative;
      top: 80px;
      .btn-bride {
        background: #bda4d7;
        border-radius: 200px;
        font-size: 11px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        padding: 10px 15px;
      }
    }
  }
}
</style>
