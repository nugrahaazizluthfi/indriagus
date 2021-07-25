<template>
  <div class="myform">
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="1000"
      data-aos-offset="100"
      class="bride-title"
    >
      Pesan <br />
      Untuk Kedua Mempelai
    </div>
    <form
      class="gform"
      @submit.prevent="submit"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="1000"
    >
      <div class="form-group" :class="{ 'form-group--error': $v.nama.$error }">
        <label for="name">Nama</label>
        <input
          type="text"
          class="form-control"
          name="nama"
          placeholder="Ketikan nama kamu disini"
          v-model="$v.nama.$model"
        />
        <div class="error" v-if="$v.nama.$dirty && !$v.nama.required">
          Nama tidak boleh <strong>Kosong</strong>
        </div>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.asal.$error }">
        <label for="Asal">Asal</label>
        <input
          type="text"
          class="form-control"
          name="asal"
          placeholder="Ketikan asal kamu disini"
          v-model="$v.asal.$model"
        />
        <div class="error" v-if="$v.asal.$dirty && !$v.asal.required">
          Asal tidak boleh <strong>Kosong</strong>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Nomor Handphone</label>
        <input
          type="text"
          class="form-control"
          name="phone"
          placeholder="Ketikan no handphone kamu disini"
          v-model="phone"
        />
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.asal.$error }">
        <label for="message">Message</label>
        <textarea
          name="pesan"
          id=""
          class="form-control"
          placeholder="Ketikan pesan kamu disini"
          v-model="$v.pesan.$model"
        ></textarea>
        <div class="error" v-if="$v.pesan.$dirty && !$v.pesan.required">
          Pesan <strong>Kosong</strong>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-bride" type="submit" :disabled="isSubmit">
          <font-awesome-icon v-if="isSubmit" icon="recycle" />
          <span v-if="isSubmit">Sedang Diproses</span>
          <span v-if="!isSubmit">Kirim Pesan Kamu Sekarang</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      nama: '',
      asal: '',
      phone: '',
      pesan: '',
      isSubmit: false,
    };
  },
  validations: {
    nama: {
      required,
    },
    asal: {
      required,
    },
    pesan: {
      required,
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log('error');
      } else {
        const scriptUrl =
          'https://script.google.com/macros/s/AKfycbzequM9XugA2mBJbOySExTzGZ5gGUwRCFZM1xtNNbocdVr_8w/exec';

        var bodyFormData = new FormData();

        bodyFormData.append('nama', this.nama);
        bodyFormData.append('asal', this.asal);
        bodyFormData.append('phone', this.phone);
        bodyFormData.append('pesan', this.pesan);

        this.isSubmit = true;

        const self = this;
        await axios({
          method: 'post',
          url: scriptUrl,
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then(function(response) {
            //handle success
            if (response.status === 200) {
              self.isSubmit = false;
              self.nama = '';
              self.asal = '';
              self.phone = '';
              self.pesan = '';
              Swal.fire('Pesan kamu berhasil dikirim');
            }
          })
          .catch(function(response) {
            console.log(response);
          });
        this.$nextTick(() => {
          this.$v.$reset();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.myform {
  background: #fff;
  padding: 15px;
  font-size: 12px;

  .form-group {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  textarea {
    height: 100px;
  }

  label {
    color: #6000bf;
    font-weight: bold;
  }

  button {
    width: 100%;
  }
}

.bride-title {
  position: relative;
  font-family: 'Great Vibes', cursive;
  text-align: center;
  font-size: 30px;
  color: #4d517d;
}

.btn-bride {
  background: #6000bf;
  border-radius: 10px;
  font-size: 11px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 15px;
}

.form-group--error {
  color: red;
}
</style>
