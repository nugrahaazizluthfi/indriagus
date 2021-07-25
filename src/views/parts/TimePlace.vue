<template>
  <div class="time-place">
    <h5
      class="title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      Waktu & Tempat
    </h5>

    <div
      class="time"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <h1>Akad</h1>
      <h5>Sabtu, 07 Agustus 2021</h5>
      <h5>08.00 s/d 10.00</h5>
      <h5>Lokasi: Rumah Mempelai Wanita</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.time-place {
  position: relative;
  padding: 5% 18px 5% 18px;
  overflow: hidden;

  @media screen and(max-width: 374px) {
    padding: 5% 18px 5% 18px;
  }

  .time {
    text-align: center;
    color: #4d517d;
    margin-bottom: 20px;
  }

  .title {
    font-family: 'Great Vibes', cursive;
    text-align: center;
    font-size: 30px;
    padding: 20px 0px;
    color: #4d517d;
  }

  .map-desc {
    text-align: center;
    font-size: 11px;

    a {
      position: relative;
      display: block;
      background: #4d517d;
      border-radius: 70px;
      color: #fff;
      font-size: 11px;
      width: 200px;
      margin: 0 auto;
    }
  }

  .gmap_canvas {
    text-align: center;
    iframe {
      position: relative;
      margin: 0 auto;
    }
  }
}
</style>
