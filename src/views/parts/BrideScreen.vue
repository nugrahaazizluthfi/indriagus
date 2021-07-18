<template>
  <div class="bride-screen">
    <div class="overlay"></div>
    <div class="bride-name-wrapper">
      <div class="bride-title">
        The Weeding Cellebration Of
      </div>
      <div class="bride-name">
        <div class="image-right"></div>
        <span class="indri">Indri Agustin</span>
        <span class="and">&</span>
        <span class="agus">Agus Aryanto</span>
        <div class="image-left"></div>
      </div>
      <div class="bride-time">
        Rabu, 07 Agustus 2021
      </div>
      <div class="bride-countdown">
        <timer></timer>
      </div>
      <div class="bride-button">
        <button type="button" class="btn btn-bride">BUKA UNDANGAN</button>
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
};
</script>

<style lang="scss" scoped>
.bride-screen {
  position: relative;
  background-image: url('~@/assets/indriagus.jpeg');
  background-size: cover;
  height: 100vh;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba($color: #2c2b3a, $alpha: 0.7);
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
    top: calc(100vh - 78%);
    padding: 20px;
    color: #ffa200;

    .bride-title {
      position: relative;
      top: -30px;
      font-size: 17px;
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
        font-size: 20px;
      }

      .indri,
      .agus {
        font-size: 1.8rem;
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
        background: #fff;
        border-radius: 200px;
        font-size: 11px;
        color: #4d517d;
        font-weight: bold;
        letter-spacing: 1px;
        padding: 10px 15px;
      }
    }
  }
}
</style>
