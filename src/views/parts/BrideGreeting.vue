<template>
  <div class="bride-greeting" ref="brideGreeting">
    <div class="word-greeting" data-aos="fade-in" data-aos-duration="3000">
      <h5 id="openundangan">
        Bismillahirohmanirohim
      </h5>
      <p class="word-normal">
        Maha Suci Allah, <br />
        <span>yang telah menciptakan makhluknya berpasang-pasangan</span>
      </p>
      <p class="word-normal mt-2">
        Ya Allah, <br />
        <span>jika engkau mempernikahkan kami</span>
      </p>
    </div>

    <div class="bride-section mt-5">
      <div class="profile" data-aos="fade-in" data-aos-duration="2000">
        <div class="img shadow-sm indri"></div>
      </div>
      <div class="name">
        <div class="text" data-aos="fade-left" data-aos-duration="1000">
          <h5>Indri Agustin Mardianur</h5>
          <p>Putri Bpk. Komarudi (Alm) & Ibu Ade Nurjanah</p>
        </div>
      </div>
    </div>
    <div class="and mt-2" data-aos="fade-in" data-aos-duration="3000">
      &
    </div>
    <div class="bride-section mt-2">
      <div class="name pt-4" data-aos="fade-right" data-aos-duration="1000">
        <div class="text right">
          <h5>Agus Aryanto</h5>
          <p>Putra Bpk. Muhlisin & Ibu Ardiah</p>
        </div>
      </div>
      <div class="profile" data-aos="fade-in" data-aos-duration="1000">
        <div class="img shadow-sm agus"></div>
      </div>
    </div>
    <div
      class="bride-word-invitaion mt-4"
      data-aos="fade-in"
      data-aos-duration="400"
    >
      <p>
        Dengan memohon rahmat dan <strong>ridho Allah SWT</strong>, kami
        mengundang Bapak/Ibu/Saudara/i untuk menghadiri
        <strong>resepsi pernikahan</strong> kami.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.bride-greeting {
  display: block;
  z-index: 2;
  overflow: hidden;
  background-image: url('~@/assets/flower2.png');
  background-repeat: repeat;
  padding: 5% 18px 5% 18px;
  background-color: #faf1ff;
  @media screen and(max-width: 374px) {
    padding: 5% 18px 5% 18px;
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
    display: flex;
    .profile {
      flex-grow: 0;
      .img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background: #ddd;
        @media screen and(max-width: 374px) {
          width: 80px;
          height: 80px;
        }
      }

      .indri {
        background-image: url('~@/assets/indri.jpeg');
        background-size: cover;
      }

      .agus {
        background-image: url('~@/assets/agus.jpeg');
        background-size: cover;
      }
    }

    .name {
      flex-grow: 1;
      padding: 0px 20px;
      .right {
        text-align: right;
      }
      .text {
        padding-top: 20px;
        @media screen and(max-width: 374px) {
          padding-top: 0px;
        }
        h5,
        p {
          padding: 0px;
          margin: 0px;
        }

        h5 {
          font-family: 'Great Vibes', cursive;
          font-size: 30px;
          color: #4d517d;
          @media screen and(max-width: 374px) {
            font-size: 28px;
            letter-spacing: 2px;
          }
        }
        p {
          font-size: 10px;
          color: #b5ae51;
          @media screen and(max-width: 374px) {
            font-size: 7px;
          }
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
