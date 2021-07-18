<template>
  <div class="bride-story">
    <div class="flower-again"></div>
    <div class="title">Our Journey</div>
    <div class="desc">
      Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu, cerita
      yang akan kami kenang selalu, dan cerita itu kami bagi untuk anda
    </div>

    <div class="box-meet">
      <div class="number-right">
        1
      </div>
      <h3>Pertama Kali Berjumpa</h3>
      <h4>Tahun 2015</h4>
      <p>
        Kami diperkenalkan di tahun 2015 oleh teman kami, pertama kali bertemu
        untuk bersama berangkat bekerja. Akan tetapi, setelah pertemuan itu
        komunikasi kami tidak intens seperti biasanya. Kami bertemu kembali &
        pergi bersama di bulan maret tahun 2019.
      </p>
    </div>

    <div class="box-meet">
      <div class="number-left">
        2
      </div>
      <h3 class="right">Kali Pertama Berkunjung Ke Rumah</h3>
      <h4 class="right">Agustus Tahun 2019</h4>
      <p class="right">
        Di Agustus 2019, saat Aku ( Indri ) bertemu dengan hari kelahiranku, Dia
        ( Mas Agus ) kerumah untuk pertama kalinya bertemu dan berkenalan dengan
        keluargaku.
      </p>
    </div>

    <div class="box-meet">
      <div class="number-right">
        3
      </div>
      <h3>Pertemuan Keluarga</h3>
      <h4>januari Tahun 2019</h4>
      <p>
        29 Januari 2021, adalah hari yang membahagiakan untuk kami berdua, kami
        melangsungkan pertemuan keluarga besar kami untuk membahas masa depan
        kami yang lebih serius.
      </p>
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
    font-size: 30px;
    color: #4d517d;
  }
  .desc {
    position: relative;
    font-size: 10px;
    text-align: center;
    padding: 20px 0px;
  }

  .box-meet {
    position: relative;
    padding: 10px;
    border: 1px solid #ddd;
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
      font-size: 16px;
      font-weight: bold;
    }

    h4 {
      font-size: 13px;
    }

    p {
      font-size: 10px;
    }

    .right {
      text-align: right;
    }

    .number-right,
    .number-left {
      position: absolute;
      top: -15px;
      border: 1px solid #fff;
      padding: 5px;
      margin: 0px;
      padding: 0px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #4d517d;
      color: #fff;
      border-radius: 15px;
      font-weight: bold;
    }
    .number-right {
      right: 10px;
    }
    .number-left {
      left: 10px;
    }
  }
}
</style>
