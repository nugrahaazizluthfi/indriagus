<template>
  <div>
    <vac :end-time="'2021-08-07 10:00:00'">
      <template v-slot:process="{ timeObj }">
        <div class="time">
          <span>
            <strong>{{ `${timeObj.d}` }}</strong>
            <br />Hari
          </span>
          <span>
            <strong>{{ `${timeObj.h}` }}</strong>
            <br />Jam
          </span>
          <span>
            <strong>{{ `${timeObj.m}` }}</strong>
            <br />Menit
          </span>
          <span>
            <strong>{{ `${timeObj.s}` }}</strong>
            <br />Detik
          </span>
        </div>
      </template>
      <template v-slot:finish>
        <span>Done!</span>
      </template>
    </vac>
  </div>
</template>

<script>
export default {
  name: 'Timer',
};
</script>

<style lang="scss" scoped>
.time {
  display: flex;
  span {
    flex-grow: 1;
    font-size: 12px;
    color: #fff;
    border-radius: 15px;
    padding: 5px;
    margin: 0px 5px;
    width: 25%;
    strong {
      font-size: 20px;
    }
  }
}
</style>
