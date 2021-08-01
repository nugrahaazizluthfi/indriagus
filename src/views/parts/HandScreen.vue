<template>
  <div class="global-wrapper splash-wrapper my-gradient">
    <div class="bride-img"></div>
    <div class="bride-img-right"></div>
    <div class="splash-logo">
      <div class="splash-tagline">
        <div class="title">Indri & Agus</div>
        <div class="notif">Pemberitahuan Akad</div>
        <div
          class="btn btn-primary btn-open"
          @click="() => this.$emit('showscreen', 0)"
        >
          Open
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splash-screen',
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
.splash-wrapper {
  background-color: #1d3742;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 374px),
    (min-width: 375px) and (max-width: 480px) {
    background-color: #1d3742;
    background-size: cover;
    background-position-x: 0px;
    background-position-y: -30px;
    background-repeat: no-repeat;
  }
}
.splash-wrapper,
.splash-logo {
  position: fixed;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 100%;
}

.splash-wrapper {
  z-index: 10;

  .splash-logo {
    text-align: center;
    max-width: 480px;
    padding: 30px;

    .splash-overlay {
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0px;
      right: 0px;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }

    .splash-image {
      width: 166pt;
      height: 51.84pt;
    }

    .splash-tagline {
      display: block;
      position: absolute;
      border-radius: 10px;
      color: #fff;
      color: #a97d55;
      padding: 30px 10px;
      margin: 0px;
      padding: 0px;

      @media screen and (max-width: 374px),
        (min-width: 375px) and (max-width: 480px) {
        top: 300px;
        right: 0px;
        left: 0px;
      }

      .title {
        font-family: 'Cormorant Garamond', serif;
        @media screen and (max-width: 374px),
          (min-width: 375px) and (max-width: 480px) {
          font-size: 45px;
          font-weight: bold;
        }
      }

      .notif {
        font-family: 'Cormorant Garamond', serif;
        font-size: 40px;
        @media screen and (max-width: 374px),
          (min-width: 375px) and (max-width: 480px) {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          color: #fff;
        }
      }

      .btn-open {
        border-radius: 20px;
        margin: 0px;
        font-size: 15px;
        background: #fff;
        color: #000;
        margin-top: 30px;
        border: none;
      }
    }

    .splash-button {
      position: absolute;
      color: #fff;
      right: 40px;
      top: 250px;

      .btn-open {
        border-radius: 30px;
        background: #fff;
        border: none;
        color: #000;
      }
    }
  }
}
</style>
