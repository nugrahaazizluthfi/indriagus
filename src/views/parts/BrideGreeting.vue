<template>
  <div class="bride-greeting" ref="brideGreeting">
    <div class="bride-img"></div>
    <div class="bride-img-middle"></div>
    <div class="bride-img-bottom"></div>
    <div class="bride-section mt-5">
      <div class="profile" data-aos="fade-in" data-aos-duration="1000">
        <div class="img shadow-sm indri"></div>
        <div class="bride-img-curek"></div>
      </div>
      <div class="name">
        <div class="text" data-aos="fade-left" data-aos-duration="1000">
          <h5 class="mt-2">Indri Agustin Mardianur</h5>
          <p>
            Putri Pertama Dari Pasangan <br />
            <strong
              ><i
                >Bpk. Komarudi (Alm) <br />&<br />
                Ibu Ade Nurjanah</i
              ></strong
            >
          </p>
        </div>
      </div>
    </div>
    <div style="display:block; height:50px"></div>
    <div class="bride-section">
      <div class="profile" data-aos="fade-in" data-aos-duration="1000">
        <div class="img shadow-sm agus"></div>
      </div>
      <div class="name" data-aos="fade-right" data-aos-duration="1000">
        <div class="text right">
          <h5 class="mt-2">Agus Aryanto</h5>
          <p>
            Putra Dari Pasangan<br />
            <strong
              ><i
                >Bpk. Muhlisin <br />&<br />
                Ibu Ardiah</i
              ></strong
            >
          </p>
        </div>
      </div>
    </div>

    <div class="leaf">
      <img src="@/assets/leaf.svg" alt="" />
    </div>

    <div class="text" data-aos="fade-in" data-aos-duration="1000">
      <p class="arrum">
        Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya pasangan
        hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati, dan
        dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang
        demikian itu menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
        berfikir.
      </p>
      <p class="arrum-title">
        Q.S. Ar - Ruum :21
      </p>

      <div class="salam pt-50">
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </div>
      <p class="arrum mt-4">
        Dengan memohon rahmat dan ridho Allah SWT, Kami bermaksud
        menyelenggarakan Akad Nikah Putra Pertama Kami yang Insyaa Allah akan
        dilaksanakan pada:
      </p>

      <p class="arrum-title">
        Akad
      </p>

      <p class="arrum-text">
        Sabtu
      </p>

      <p class="arrum-title">
        <span>07 <i>/</i> Agustus <i>/</i> 2021</span>
      </p>
      <div class="hr mt-3 mb-3" />
      <p class="arrum-text">
        Pukul
      </p>

      <p class="arrum-title">
        09.00 wib s/d 12.00 wib
      </p>

      <p class="arrum mt-5">
        Dengan segala kerendahan hati, Kami sampaikan permohonan maaf yang
        sedalam-dalamnya terkait dengan Akad Nikah Putra dan Putri Kami, dimana
        dengan berat hati kami tidak bisa mengundang Bapak, Ibu, dan Saudara/i
        sekalian dikarenakan kondisi Pandemi COVID-19 yang mengharuskan
        pembatasan jumlah tamu dan acara hanya dihadiri oleh keluarga inti
        sesuai dengan protokol kesehatan, dan peraturan Pemerintah yang berlaku.
      </p>

      <p class="arrum">
        Maka dari itu, bersamaan dengan pemberitahuan ini kami bermaksud
        membagikan kabar bahagia sekaligus memohon doa dari Bapak, Ibu, dan
        Saudara/i sekalian agar Akad Nikah Putra dan Putri Kami diberikan
        kelancaran. Semoga kita selalu diberikan Kesehatan oleh Allah Subhanahu
        Wa Ta’ala, aamiin. Terima kasih.
      </p>
      <div class="salam mt-3">
        Wassalamu’alaikum Warahmatullahi Wabarakatuh
      </div>
      <br /><br />
      <div class="kamiberbahagia">
        Kami yang berbahagia

        <h1 class="mt-2">
          Kel. Bapak Komarudi (Alm)
        </h1>
        <h5>&</h5>
        <h1>
          Kel. Bapak Muhlisin
        </h1>
      </div>

      <div style="display:block; height:100px;"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.kamiberbahagia {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-style: italic;
  h1 {
    font-size: 23px;
  }
  h1,
  h5 {
    font-style: normal;
    font-weight: bold;
  }
}

div.hr {
  border: none;
  border-bottom: 1px solid #fff;
  width: 100px;
  font-weight: bold;
  position: relative;
  margin: 0 auto;
}
.bride-img {
  position: absolute;
  top: 0px;
  right: 0px;
  display: block;
  width: 150px;
  height: 129px;
  background-image: url('~@/assets/mantra-5.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.bride-img-bottom {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: block;
  width: 200px;
  height: 200px;
  background-image: url('~@/assets/mantra-4.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bride-img-middle {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: block;
  top: 790px;
  width: 180px;
  height: 180px;
  background-image: url('~@/assets/mantra-4.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 0.7;
}

.text {
  .arrum {
    position: relative;
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    color: #fff;
    text-align: center;
    padding: 0px 30px;
    font-style: italic;
    z-index: 5;
  }
  .arrum-title {
    font-family: 'Cormorant Garamond', serif;
    color: #a97d55;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    margin: 0px;
  }

  .arrum-text {
    font-family: 'Cormorant Garamond', serif;
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    margin: 0px;
  }
  .salam {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    color: #a97d55;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    padding: 0px 50px;
  }

  .pt-50 {
    padding-top: 50px;
  }
}

.bride-greeting {
  position: relative;
  display: block;
  z-index: 2;
  overflow: hidden;
  min-height: 100vh;
  background-repeat: repeat;
  padding: 5% 18px 5% 18px;
  background-color: #1f3e4b;
  @media screen and(max-width: 374px) {
    padding: 5% 18px 5% 18px;
  }

  .leaf {
    text-align: center;
    color: #fff;
    margin: 50px 0px;
    img {
      position: relative;
      margin: 0 auto;
      width: 70px;
    }
  }

  .word-greeting {
    h5 {
      font-family: 'Great Vibes', cursive;
      text-align: center;
      font-size: 30px;
      padding: 20px 0px;
      color: #4d517d;
    }

    p.word-normal {
      margin: 0px;
      padding: 0px;
      text-align: center;
      color: #b5ae51;
      font-size: 12px;
      padding: 0px 36px;
      font-weight: bold;

      @media screen and(max-width: 374px) {
        font-size: 11px;
      }

      span {
        font-size: 11px;
        font-weight: normal;

        @media screen and(max-width: 374px) {
          font-size: 10px;
        }
      }
    }
  }

  .and {
    font-family: 'Great Vibes', cursive;
    text-align: center;
    font-size: 18px;
    color: #4d517d;
  }

  .bride-section {
    text-align: center;
    .profile {
      position: relative;
      .img {
        display: block;
        position: relative;
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border-radius: 100px;
        background: #ddd;
        border: 2px solid #a97d55;
        z-index: 2;
        @media screen and(max-width: 374px) {
          width: 80px;
          height: 80px;
        }
      }

      .bride-img-curek {
        z-index: 0;
        position: absolute;
        top: -120px;
        left: 0px;
        display: block;
        width: 200px;
        height: 200px;
        background-image: url('~@/assets/mantra-4.png');
        background-size: cover;
        background-repeat: no-repeat;
      }

      .indri {
        background-image: url('~@/assets/newindri.jpeg');
        background-size: cover;
      }

      .agus {
        background-image: url('~@/assets/newagus.jpeg');
        background-size: cover;
        background-position-y: -20px;
        background-repeat: no-repeat;
        filter: brightness(140%);
      }
    }

    .name {
      .text {
        @media screen and(max-width: 374px) {
          padding-top: 0px;
        }
        h5,
        p {
          padding: 0px;
          margin: 0px;
        }

        h5 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          color: #a97d55;
          font-style: italic;
          font-weight: bold;
          @media screen and(max-width: 374px) {
            font-size: 28px;
            letter-spacing: 2px;
          }
        }
        p {
          font-family: 'Cormorant Garamond', serif;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }

  .bride-word-invitaion {
    text-align: center;
    font-size: 11px;
    color: #b5ae51;
    @media screen and(max-width: 374px) {
      font-size: 10px;
    }
  }
}
</style>
