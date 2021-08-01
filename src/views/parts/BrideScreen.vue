<template>
  <div class="bride-screen">
    <div class="bride-img"></div>
    <div class="bride-img-right"></div>
    <div class="bride-name-wrapper">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-offset="100"
        class="bride-title"
      >
        Akad Nikah
      </div>
      <div class="bride-name">
        <span
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="300"
          class="indri"
          >Indri & Agus</span
        >
      </div>
      <div data-aos="fade-in" data-aos-duration="3000" class="bride-time">
        Sabtu<br /><span>07 <i>/</i> Agustus <i>/</i> 2021</span>
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
          SAVE THE DATE
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
.bride-img {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 150px;
  height: 129px;
  background-image: url('~@/assets/mantra-2.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.bride-img-right {
  position: absolute;
  display: block;
  width: 150px;
  height: 129px;
  background-image: url('~@/assets/mantra-1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 40px;
  bottom: 0px;
  right: 0px;
}

.bride-screen {
  position: relative;
  background: #1d3742;
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
    top: calc(100vh - 79%);
    padding: 20px;
    color: #ffa200;

    .bride-title {
      position: relative;
      top: -20px;
      font-size: 23px;
      font-family: 'Cormorant Garamond', serif;
      color: #fff;
    }

    .bride-name {
      font-family: 'Cormorant Garamond', serif;
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
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: 6px;
        font-style: italic;
      }

      .indri {
        position: relative;
        color: #a9865b;
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
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px;
      position: relative;
      top: 40px;
      color: #fff;

      span {
        color: #a9865b;
        font-size: 29px;
      }

      i {
        font-size: 25px;
        font-size: 29px;
      }
    }
    .bride-countdown {
      position: relative;
      top: 60px;
    }
    .bride-button {
      position: relative;
      top: 120px;
      .btn-bride {
        background: #a9865b;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        padding: 10px 15px;
      }
    }
  }
}
</style>
