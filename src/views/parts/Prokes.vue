<template>
  <div class="global-wrapper splash-wrapper my-gradient">
    <div class="splash-logo">
      <div class="splash-tagline">
        <h4>
          Protokol Kesehatan <br />
          New Normal Event
        </h4>

        <p>
          Acara ini diselenggarakan dengan protokol kesehatan yang harus
          dipatuhi demi mencegah penyebaran COVID-19. Tanpa mengurangi rasa
          hormat, para tamu undangan yang bersedia menghadiri acara dimohon
          kesediaannya untuk:
        </p>

        <div class="img">
          <img src="@/assets/prokes1.jpg" alt="prokes1" />
        </div>

        <div
          class="btn btn-bride mt-5 mb-2"
          @click="() => this.$emit('showprokes', 0)"
        >
          Baik, Saya Akan Mematuhinya.
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

    .splash-image {
      width: 166pt;
      height: 51.84pt;
    }

    .splash-tagline {
      display: block;
      position: relative;
      margin-top: 10px;
      background: #fff;
      border-radius: 10px;
      padding: 30px 10px;
      h4 {
        font-size: 20px;
      }

      p {
        font-size: 13px;
      }

      img {
        width: 300px;
        max-width: 480px;
      }
    }
  }

  .splash-footer {
    position: absolute;
    overflow: hidden;
    bottom: 0px;
    width: 100%;

    img {
      position: relative;
      left: -650px;
    }
  }
}

.my-gradient {
  background-color: rgba($color: #000000, $alpha: 0.5);
  opacity: 1;
}

.btn-bride {
  background: #bda4d7;
  border-radius: 200px;
  font-size: 11px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 15px;
}
</style>
