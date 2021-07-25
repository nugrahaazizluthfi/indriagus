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

    <div class="box-meet" data-aos="fade-right" data-aos-duration="3000">
      <div class="number-right">
        1
      </div>
      <h3>Pertama Kali Berjumpa</h3>
      <h4><i>Tahun 2015</i></h4>
      <p>
        Kami diperkenalkan di tahun 2015 oleh teman kami, pertama kali bertemu
        untuk berangkat kerja bersama. Akan tetapi, setelah pertemuan itu
        komunikasi kami tidak intens. Dan kami bertemu kembali pada bulan maret
        tahun 2019.
      </p>
    </div>

    <div class="box-meet" data-aos="fade-left" data-aos-duration="3000">
      <div class="number-left">
        2
      </div>
      <h3 class="right">Kali Pertama Berkunjung Ke Rumah</h3>
      <h4 class="right"><i>Agustus Tahun 2020</i></h4>
      <p class="right">
        Tanggal 9 Agustus 2020, Agus berkunjung kerumah tepat pada hari
        kelahiran Indri. Untuk pertama kalinya Agus berkunjung kerumah dan
        bertemu keluarga Indri.
      </p>
    </div>

    <div class="box-meet" data-aos="fade-right" data-aos-duration="3000">
      <div class="number-right">
        3
      </div>
      <h3>Pertemuan Keluarga</h3>
      <h4><i>Januari Tahun 2019</i></h4>
      <p>
        29 Januari 2021, adalah hari yang membahagiakan untuk kami berdua, kami
        melangsungkan pertemuan keluarga besar kami untuk membahas masa depan
        kami yang lebih serius.
      </p>
    </div>

    <div class="title mb-5" data-aos="fade-in" data-aos-duration="3000">
      Our Video
    </div>
    <div class="video" data-aos="fade-in" data-aos-duration="3000">
      <video controls>
        <source src="@/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bride-story {
  position: relative;
  padding: 5% 18px 5% 18px;
  overflow: hidden;

  .flower-again {
    z-index: 0;
    position: absolute;
    display: block;
    background-image: url('~@/assets/flower-again.png');
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
    font-family: 'Great Vibes', cursive;
    text-align: center;
    font-size: 40px;
    color: #4d517d;
  }
  .desc {
    position: relative;
    font-size: 12px;
    text-align: center;
    padding: 20px 0px;
  }

  .box-meet {
    background: #faf1ff;
    position: relative;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    border-top-left-radius: 18px;
    border-bottom-right-radius: 18px;
    margin-bottom: 40px;
    h3,
    h4,
    p {
      padding: 3px 0px;
      margin: 0px;
    }

    h3 {
      font-size: 18px;
      font-weight: bold;
      color: #ff03ff;
    }

    h4 {
      font-size: 14px;
      color: #ab13ab;
    }

    p {
      font-size: 13px;
    }

    .right {
      text-align: right;
    }

    .number-right,
    .number-left {
      position: absolute;
      top: -15px;
      border: 3px solid #fff;
      padding: 5px;
      margin: 0px;
      padding: 0px 10px;
      line-height: 30px;
      text-align: center;
      background: #4d517d;
      color: #fff;
      border-radius: 15px;
      font-weight: bold;
      font-size: 20px;
    }
    .number-right {
      right: 15px;
    }
    .number-left {
      left: 15px;
    }
  }

  .video {
    video {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
