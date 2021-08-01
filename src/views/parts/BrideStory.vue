<template>
  <div class="bride-story">
    <div class="flower-again"></div>
    <div class="title" data-aos="fade-in" data-aos-duration="3000">
      Our Journey
    </div>
    <div class="desc" data-aos="fade-in" data-aos-duration="3000">
      Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu, cerita
      yang akan kami kenang selalu, dan cerita itu kami bagi untuk anda
    </div>

    <carousel :items="1" :nav="false">
      <div class="box-meet" data-aos="fade-right" data-aos-duration="3000">
        <h3>Pertama Kali Berjumpa</h3>
        <h4><i>Tahun 2015</i></h4>
        <p>
          Kami diperkenalkan pada tahun 2015 oleh teman kami, pertama kali
          bertemu untuk berangkat kerja bersama. Akan tetapi, setelah pertemuan
          itu komunikasi kami tidak intens. Dan kami bertemu kembali pada bulan
          mei tahun 2019.
        </p>
      </div>
      <div class="box-meet" data-aos="fade-left" data-aos-duration="3000">
        <h3 class="right">Kali Pertama Berkunjung Ke Rumah</h3>
        <h4 class="right"><i>Agustus Tahun 2020</i></h4>
        <p class="right">
          Tanggal 9 Agustus 2020, Agus berkunjung kerumah tepat pada hari
          kelahiran Indri. Untuk pertama kalinya Agus berkunjung kerumah dan
          bertemu keluarga Indri.
        </p>
      </div>

      <div class="box-meet" data-aos="fade-right" data-aos-duration="3000">
        <h3>Pertemuan Keluarga</h3>
        <h4><i>Januari Tahun 2021</i></h4>
        <p>
          29 Januari 2021, adalah hari yang membahagiakan untuk kami berdua,
          kami melangsungkan pertemuan keluarga besar kami untuk membahas masa
          depan kami yang lebih serius.
        </p>
      </div>
    </carousel>

    <div class="title mt-5 mb-5" data-aos="fade-in" data-aos-duration="3000">
      Our Moment
    </div>
    <div class="video" data-aos="fade-in" data-aos-duration="3000">
      <video controls>
        <source src="@/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="text-pamungkas" data-aos="fade-in" data-aos-duration="1000">
      <p class="quotes">
        "Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai
        dibanding pernikahan"
        <br />
        <span>HR. Ibnu Majah</span>
      </p>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
export default { components: { carousel } };
</script>

<style lang="scss" scoped>
.text-pamungkas {
  position: relative;
  display: block;
  background-image: url('~@/assets/pamungkas.jpeg');
  width: 100%;
  height: 280px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  .quotes {
    font-family: 'Cormorant Garamond', serif;
    position: absolute;
    top: 110px;
    left: 45px;
    display: block;
    width: 140px;
    color: #1f3e4b;
    font-weight: bold;
    font-size: 12px;

    span {
      display: block;
      margin-top: 10px;
      font-size: 15px;
      font-weight: bold;
      font-style: normal;
    }
  }
}
.bride-story {
  position: relative;
  padding: 5% 18px 5% 18px;
  overflow: hidden;
  background: #1d3742;

  .flower-again {
    z-index: 0;
    position: absolute;
    display: block;
    top: -50px;
    left: -30px;
    width: 400px;
    height: 400px;
    opacity: 0.08;
    transform: rotate(45deg);
  }

  @media screen and(max-width: 374px) {
    padding: 5% 18px 5% 18px;
  }
  .title {
    position: relative;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    font-size: 40px;
    color: #fff;
    font-style: italic;
  }
  .desc {
    position: relative;
    font-size: 17px;
    text-align: center;
    padding: 20px 20px 30px 20px;
    color: #fff;
    font-family: 'Cormorant Garamond', serif;
  }
  .video {
    video {
      width: 100%;
      height: 400px;
    }
  }
}

.box-meet {
  padding: 10px;
  color: #fff;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  h3 {
    background: #fff;
    color: #a97d55;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
