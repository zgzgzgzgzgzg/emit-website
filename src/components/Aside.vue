<template>
    <div class="menu">
        <div class="menu_bar">
            <h1 class="menu_title">EMIT OF SEBSITE</h1>
            <div  class="menu_hamburger" >
                <div id="b1" class="box" v-if="menuState==='menu'">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="i1" class="icon" viewBox="0 0 100 100" @click="menuClick">
                        <path id="top-line-1"     d="M30,37 L70,37 Z"></path>
                        <path id="middle-line-1" 	d="M30,50 L70,50 Z"></path>
                        <path id="bottom-line-1" 	d="M30,63 L70,63 Z"></path>
                    </svg>
                </div>
                <div id="b2" class="box" v-if="menuState==='arrow'">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="i1" class="icon" viewBox="0 0 100 100" @click="menuClick">
                        <path id="top-line-1"     d="M30,37 L70,70 Z"></path>
                        <path id="bottom-line-1" 	d="M30,70 L70,37 Z"></path>
                    </svg>
                </div>
            </div>
            <div class="menu_search" style="left: 90%;margin: 0px 0 0 -3px;">
                <el-button type="text" style="color: #232323"><i class="el-icon-search" @click="menuSearch"></i></el-button>
            </div>
        </div>
        <el-dialog :visible.sync="dialogSearchVisible" width="30%" style="margin-top:20vh;" class="searchMenu">
            <el-form ref="form" :model="searchMenuForm" :inline="true">
                <el-form-item>
                    <el-input v-model="searchMenuForm.input" placeholder="Search" style="width: 25vw"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="text" style="color: #232323"><i class="el-icon-search" @click="dialogSearch"></i></el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>



</template>
<script>
    import AJS from '../js/AJS'
    export default {
        name: "Aside",
        data(){
            return{
                menuState:'menu',
                dialogSearchVisible:false,
                searchMenuForm:{},
            }
        },
        methods: {
            menuClick:function () {
                if (this.menuState==='menu'){
                    this.menuState='arrow';
                }else if (this.menuState='arrow'){
                    this.menuState='menu';
                }
            },
            menuSearch:function () {
                this.dialogSearchVisible=true;
            },
            dialogSearch:function () {
                //后台查询
            }
        },
    }
</script>
<style lang="scss">
    .menu{
        .menu_bar{
            border-right: 1px solid currentColor;
            bottom: 26px;
            margin-left: 1px;
            width: 88px;
            left: 100%;
            top: 26px;
            .menu_title{
                font-size: 1.5em;
                line-height: 1;
                top: 50%;
                white-space: nowrap;
                width: 4%;
                transform: rotate(-90deg);
                position: absolute;
            }
            .menu_hamburger{
                width: 40px;
                height: 40px;
                display: block;
                margin: -6px auto 0;
                position: relative;
                top: 10px;
                .box{
                    .icon{
                        stroke-width:4;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        cursor: pointer;
                        stroke: #232323;
                        opacity: .95;
                    }
                }
            }
            .menu_search{
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                margin: 8px 0 0 -5px;
                padding: 5px 10px 5px 5px;
                transition: opacity .4s cubic-bezier(0.4, 0, 0, 1),transform .5s cubic-bezier(0.4, 0, 0, 1);
            }
        }
    }
</style>