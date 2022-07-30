<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <el-icon :size="20" class="fold-unfold"  @click="handleCollapse" >
            <Expand v-if="collapse" />
            <Fold v-if="!collapse" />
          </el-icon>
          <!-- <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" :title="collapse ? '展开' : '收起'"
            class="fold-unfold" @click="handleCollapse"></i> -->
          <Breadcrumbs class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <FullScreenBar></FullScreenBar>
          <Avatar></Avatar>
        </div>
      </el-col>
    </el-row>
  </div>
  <Tabs></Tabs>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Breadcrumbs from "@/layout/header/breadcrumbs/index.vue";
import Avatar from "@/layout/header/avatar/index.vue";
import Tabs from "./tabs/index.vue";
import FullScreenBar from "@/layout/header/fullScreenBar/index.vue";
// import { Fold, Expand } from "@element-plus/icons-vue";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      collapse: "settings/collapse",
    }),
  },
  components: {
    Breadcrumbs,
    Avatar,
    Tabs,
    FullScreenBar,
  },
  methods: {
    ...mapActions({
      changeCollapse: "settings/changeCollapse",
    }),
    handleCollapse() {
      this.changeCollapse();
      // console.log(this.collapse);
    },
  },
};
</script>

<style>
.nav-bar-container {
  /* display: flex; */
  height: 60px;
  /* align-items: center; */
  overflow: hidden;
  background-color: white;
  line-height: 60px;
  padding: 0 20px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
}

.left-panel {
  display: flex;
  height: 60px;
  align-items: center;
}

.fold-unfold {
  cursor: pointer;
}

.right-panel {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
}
</style>