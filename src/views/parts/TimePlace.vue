<template>
  <div class="time-place">
    <h5 class="title">Waktu & Tempat</h5>

    <div class="time">
      <h1>Akad</h1>
      <h5>Sabtu, 07 Agustus 2021</h5>
      <h5>08.00 s/d 10.00</h5>
    </div>

    <div class="map-desc">
      Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini. atau
      anda bisa klik button ini.
      <a
        href="https://www.google.com/maps?q=-6.8865528,107.5359312"
        target="_blank"
        class="btn"
      >
        Pergi Ke Google Map
      </a>
    </div>

    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="275"
          height="200"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=PT.%20Gemilang%20Inti%20Cimahi&t=&z=19&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
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
      background: #4d517d;
      border-radius: 70px;
      color: #fff;
      font-size: 11px;
      margin: 20px 0px;
    }
  }
}
</style>
