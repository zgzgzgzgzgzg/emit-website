<template>
  <el-container>
    <el-aside class="menu" style="width: auto;height: 100vh;overflow: hidden;">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: auto">
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
  },
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>
<style lang="scss">

</style>
