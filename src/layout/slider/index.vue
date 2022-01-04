<template>
  <el-scrollbar height="100vh" class="slider-bar">
    <el-menu
      class="el-menu-vertical"
      :collapse="collapse"
      router
      background-color="#F5F5F5"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1-1">选项1</el-menu-item>
          <el-menu-item index="1-1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-2-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-2-2">
          <template #title>分组一</template>
          <el-menu-item index="/menu/test">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/menu/test">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="/menu/test">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-menu-item index="/menu/test2">
        <i class="el-icon-setting"></i>
        <template #title>导航五</template>
      </el-menu-item>
      <el-menu-item index="/menu/test3">
        <i class="el-icon-setting"></i>
        <template #title>导航六</template>
      </el-menu-item>
      <el-menu-item index="/menu/test4">
        <i class="el-icon-setting"></i>
        <template #title>导航七</template>
      </el-menu-item>
      <!-- <el-menu-item index="/menu/test9">
                <i class="el-icon-setting"></i>
                <template #title>导航十二</template>
            </el-menu-item>
            <el-menu-item index="/menu/test10">
                <i class="el-icon-setting"></i>
                <template #title>导航十三</template>
            </el-menu-item>
            <el-menu-item index="/menu/test11">
                <i class="el-icon-setting"></i>
                <template #title>导航十四</template>
            </el-menu-item>
            <el-menu-item index="/menu/test12">
                <i class="el-icon-setting"></i>
                <template #title>导航十五</template>
            </el-menu-item>
            <el-menu-item index="/menu/test13">
                <i class="el-icon-setting"></i>
                <template #title>导航十六</template>
            </el-menu-item>
            <el-menu-item index="/menu/test14">
                <i class="el-icon-setting"></i>
                <template #title>导航十七</template>
            </el-menu-item>
            <el-menu-item index="/menu/test15">
                <i class="el-icon-setting"></i>
                <template #title>导航十八</template>
            </el-menu-item>
            <el-menu-item index="/menu/test16">
                <i class="el-icon-setting"></i>
                <template #title>导航十九</template>
            </el-menu-item> -->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Slider",
  data() {
    return {
      isCollapse: true,
      // open: null,
    };
  },
  computed: {
    ...mapGetters({
      collapse: "settings/collapse",
    }),
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

<style scoped lang='less'>
.fold-unfold {
  cursor: pointer;
  font-size: 20px;
  position: relative;
  top: 0;
  left: 10px;
  /* z-index: 999; */
}
/* .el-menu-vertical{
    overflow: auto;
    height:100vh;
} */
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  /* overflow: auto; */
}
.slider-bar {
  background-color: whitesmoke;
}
// .el-menu {
//     background-color: whitesmoke;
//     border: none;
// }
.el-menu-item {
  background-color: whitesmoke;
}
// ::v-deep {
//     .el-menu-item-group__title,
//     .el-submenu__title,
//     // .el-menu,
//     .el-menu--popup-right-start {
//         background-color: whitesmoke;
//     }
// }
// ::v-deep {
//     ul.el-menu {
//         background-color: whitesmoke;
//     }
// }
</style>