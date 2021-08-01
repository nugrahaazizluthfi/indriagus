<template>
  <div class="global-wrapper splash-wrapper my-gradient">
    <div class="splash-logo">
      <div class="splash-overlay"></div>
      <div class="splash-tagline">
        <div class="title">Indri & Agus</div>
        <div class="notif">Pemberitahuan Akad</div>
        <div class="btn btn-primary btn-open">Open</div>
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
.splash-wrapper {
  background-image: url('~@/assets/newhandscreen.jpeg');
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 374px) {
    background-image: url('~@/assets/newhandscreen.jpeg');
    background-size: cover;
    background-position-x: -30px;
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
      padding: 30px 10px;
      right: 50px;
      top: 180px;
      margin: 0px;
      padding: 0px;
      @media screen and (max-width: 374px),
        (min-width: 375px) and (max-width: 480px) {
        right: 12px;
      }

      .title {
        font-size: 60px;
        font-family: 'Cormorant Garamond', serif;
        @media screen and (max-width: 374px),
          (min-width: 375px) and (max-width: 480px) {
          font-size: 25px;
        }
      }

      .notif {
        font-family: 'Cormorant Garamond', serif;
        font-size: 40px;
        margin-top: 10px;
        @media screen and (max-width: 374px),
          (min-width: 375px) and (max-width: 480px) {
          font-size: 18px;
        }
      }

      .btn-open {
        border-radius: 20px;
        margin: 0px;
        padding: 2px 10px;
        font-size: 11px;
        background: #fff;
        color: #000;
        margin-top: 30px;
        border: none;
      }
    }
  }
}
</style>
