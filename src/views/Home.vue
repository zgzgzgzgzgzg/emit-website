<template>
  <el-container>
    <el-aside class="menu" style="width: auto;height: 100vh;">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-main style="background-color: #42b983">
        中间部分
        <router-view></router-view>
      </el-main>
      <el-footer style="background-color: cadetblue">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from '../components/Aside';
  import Footer from '../components/Footer';
export default {
  name: 'home',
  components: {
    Footer,
    Aside
  }
}
</script>
