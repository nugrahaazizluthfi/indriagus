<template>
  <div class="navigation">
    <div class="navigation-box">
      <a href="javascript:void(0)">
        <div class="icon"></div>
        Beranda
      </a>
    </div>
    <div class="navigation-box">
      <a href="javascript:void(0)">
        <div class="icon"></div>
        Cerita
      </a>
    </div>
    <div class="navigation-box">
      <a href="javascript:void(0)">
        <div class="icon"></div>
        Mempelai
      </a>
    </div>
    <div class="navigation-box">
      <a href="javascript:void(0)">
        <div class="icon"></div>
        Gallery
      </a>
    </div>
    <div class="navigation-box">
      <a href="javascript:void(0)">
        <div class="icon"></div>
        Lokasi
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  position: fixed;

  width: 100%;
  max-width: 480px;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0px;

  bottom: 0px;
  width: 100%;
  z-index: 3;
  height: 50px;
  background: #fff;

  .navigation-box {
    flex-grow: 1;
    width: 20%;
    text-align: center;
    a {
      display: block;
      font-size: 10px;
      text-decoration: none;
      margin: 0px;
      padding: 0px;
      color: #000;

      .icon {
        display: block;
        height: 20px;
        width: 20px;
        margin: 0 auto;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
