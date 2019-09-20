<template>
    <div class="menu">
        <div class="menu_bar">
            <h1 class="menu_title">EMIT OF SEBSITE</h1>
            <div  class="menu_hamburger">
                <div class="u" style="background-color: currentColor;display: inline-block; width: 40px;height: 1px;margin: 0px 0px;position: relative;transform-origin: center;transform: translateY(0) rotate(0deg) scaleX(.7);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);"></div>
                <div class="u" style="background-color: currentColor;display: inline-block; width: 40px;height: 1px;margin: 0px 0px;position: relative;transform-origin: center;transform: translateY(0) rotate(0deg) scaleX(.7);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);"></div>
                <div class="u" style="background-color: currentColor;display: inline-block; width: 40px;height: 1px;margin: 0px 0px;position: relative;transform-origin: center;transform: translateY(0) rotate(0deg) scaleX(.7);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);"></div>
            </div>
            <el-button type="text" icon="el-icon-search" class="menu_search"></el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Aside"
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
                width: 6%;
                transform: rotate(-90deg);
                position: absolute;
            }
            .menu_hamburger{
                width: 40px;
                height: 40px;
                display: block;
                margin: -6px auto 0;
                background-color: aliceblue;
                .icon-menu{
                    position: relative;
                    display: block;
                    width: 28px;
                    margin: auto;
                    u{
                        display: inline-block;
                        background-color: currentColor;
                        width: 40px;
                        height: 1px;
                        margin: 7px -6px;
                        position: relative;
                        transform-origin: center;
                        transform: translateY(0) rotate(0deg) scaleX(.7);
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
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