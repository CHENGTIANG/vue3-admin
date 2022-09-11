<template>
  <div class="ma-4 video-player-page">
    <video class="video-js" ref="player"></video>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import videojs from "video.js";

export default {
  mounted() {
    this.player = videojs(this.$refs.player, {
      autoplay: true,
      controls: true,
      poster: "//vjs.zencdn.net/v/oceans.png",
      sources: [
        {
          src: "//vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4",
        },
      ],
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
.video-player-page {
  position: relative;
}
</style>
