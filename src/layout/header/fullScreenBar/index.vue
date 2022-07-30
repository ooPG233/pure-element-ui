<template>
    <el-icon :size="20" class="fullScreenBar" @click="click">
        <FullScreen />
    </el-icon>
</template>

<script>
import screenfull from "screenfull";

export default {
    name: "FullScreenBar",
    data() {
        return {
            isFullscreen: false
        }
    },
    methods: {
        click() {
            if (!screenfull.isEnabled) {
                this.$baseMessage("开启全屏失败", "error");
                return false;
            }
            screenfull.toggle();
            // this.$emit("refresh");
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen;
            console.log('switch');
        },
        init() {
            if (screenfull.isEnabled) {
                screenfull.on("change", this.change);
            }
        },
        destroy() {
            if (screenfull.isEnabled) {
                screenfull.off("change", this.change);
            }
        },
    },
    mounted() {
        this.init();
    },
    beforeUnmount() {
        this.destroy();
    },
};
</script>

<style scoped>
.fullScreenBar {
    cursor: pointer
}
</style>