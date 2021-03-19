<template>
  <div class="home">
    <video
      id="videoBackground"
      autoplay
      loop
      src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/Abstract02.mp4?alt=media&token=35c1656c-c8c8-42ef-818a-a36c41bdf213"
    ></video>
    <div class="homeContent">
      <v-container>
        <Me></Me>
      </v-container>
    </div>
  </div>
</template>

<script>
import Me from "../components/Me";

export default {
  name: "Home",
  components: { Me },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #010001;
  height: 100%;
  width: 100%;
}

#videoBackground {
  overflow: hidden;
}
.homeContent {
  background-color: rgba(1, 1, 1, 0.9);
  height: calc(100vh - 64px);
  width: 100%;
  position: absolute;
  overflow-y: auto;
  top: 0;
  left: 0;
}
</style>
