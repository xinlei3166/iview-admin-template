<template>
    <Layout class="layout">
        <Sider class="layout-sider" ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
            <div class="layout-logo">
                <router-link to="/">
                    <h1 v-if="!isCollapsed">仙灵小屋</h1>
                    <img v-else src="../../assets/images/logo.png" alt="logo"/>
                </router-link>
            </div>
            <Menu mode="vertical" active-name="home" theme="dark" width="auto" accordion
                  :class="menuitemClasses">
                <MenuItem name="home" :style="{display: 'none'}" :to="{name: 'home'}">
                    <Icon type="ios-people" :style="{marginTop: '-3px'}"></Icon>
                    <span :style="{marginLeft: '5px'}">首页</span>
                </MenuItem>
                <template v-if="isCollapsed">
                    <template v-for="item in getSlideMenus">
                        <MenuItem v-if="item.meta.hidden === false" :name="item.meta.title">
                            <Dropdown placement="right-start">
                                <Icon class="layout-meun-icon" :type="item.meta.icon"></Icon>
                                <DropdownMenu slot="list" v-for="child in item.children">
                                    <router-link :to="child.name" style="text-decoration: none; color: inherit;">
                                        <DropdownItem>
                                            {{ child.meta.title }}
                                        </DropdownItem>
                                    </router-link>
                                </DropdownMenu>
                            </Dropdown>
                        </MenuItem>
                    </template>
                </template>
                <template v-else>
                    <template v-for="item in getSlideMenus">
                        <Submenu v-if="item.meta.hidden === false" :name="item.meta.title ">
                            <template slot="title">
                                <Icon class="layout-meun-icon" :type="item.meta.icon"
                                      :style="{marginTop: '-2.5px'}" size="17"></Icon>
                                {{ item.meta.title }}
                            </template>
                            <template v-for="child in item.children">
                                <MenuItem :name="child.meta.title" :to="child.name" :style="{}">
                                    <Icon class="layout-meun-icon" :type="child.meta.icon"
                                          :style="{marginTop: '-3.0px'}" size="17"></Icon>
                                    {{ child.meta.title }}
                                </MenuItem>
                            </template>
                        </Submenu>
                    </template>
                </template>
            </Menu>
        </Sider>
        <Layout>
            <Header :style="{padding: 0, marginLeft: '0.8px'}" class="layout-header">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                      color="#fff" size="24"></Icon>
                <div class="head-bar-content" :style="{float: 'right', paddingRight: '50px'}">
                    <Badge :count="6" type="error" :offset="[13, 0]" :style="{top: '3px', marginRight: '30px'}">
                        <Icon type="ios-notifications-outline" color="white" size="28"></Icon>
                    </Badge>
                    <div class="user-avator-dropdown" :style="{float: 'right'}">
                        <Avatar src="https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"/>
                        <Dropdown>
                            <a href="javascript:void(0)">
                                <Icon type="md-arrow-dropdown" :style="{fontSize: '18px'}"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>个人信息</DropdownItem>
                                <DropdownItem>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </Header>
            <Content class="layout-content">
                <Layout class="layout-content-layout">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <template v-for="item in $route.matched">
                            <BreadcrumbItem>{{ item.meta.title }}</BreadcrumbItem>
                        </template>
                    </Breadcrumb>
                    <Content class="layout-content-content">
                        <router-view/>
                    </Content>
                </Layout>
            </Content>
            <!--<Footer class="layout-footer">&copy; 2018 君惜. All Rights Reserved</Footer>-->
        </Layout>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {State, Getter, Action, Mutation, namespace} from "vuex-class"

    // const someModule = namespace('path/to/module')

    @Component
    export default class Main extends Vue {
        isCollapsed = false

        @Getter getSlideMenus: any

        mounted() {
            console.log(this.$route.matched)
        }

        get rotateIcon() {
            return [
                "menu-icon",
                this.isCollapsed ? "rotate-icon" : ""
            ];
        }

        get menuitemClasses() {
            return this.isCollapsed ? ["menu-item", this.isCollapsed ? "collapsed-menu" : ""] : ["layout-meun"]
        }

        collapsedSider() {
            this.isCollapsed = !this.isCollapsed
        }
    }
</script>

<style lang="stylus" scoped>
    head-nav-color = #242F42

    .layout
        background: #f5f7f9;
        position: relative;
        /*border-radius: 4px;*/
        overflow: hidden;
        height 100%

        .layout-sider
            height 100%

    .layout-logo
        width 100%
        height: 64px
        color: white
        /*border-radius: 3px*/
        background head-nav-color
        display flex
        align-items center
        justify-content center

        h1
            color #fff

        img
            height 48px

    .layout-meun
        margin-top 15px

    .ivu-menu-item
        a
            color rgba(255, 255, 255, .7)

            &:hover
                color #fff

        .ivu-dropdown
            width 100%

    .ivu-menu-item-active
        a
            color: #fff

    .menu-icon
        transition: all .3s

    .rotate-icon
        transform: rotate(-90deg)

    .menu-item
        span
            display: inline-block
            overflow: hidden
            width: 69px
            text-overflow: ellipsis
            white-space: nowrap
            vertical-align: bottom
            transition: width .2s ease .2s

        i
            transform: translateX(0px)
            transition: font-size .2s ease, transform .2s ease
            vertical-align: middle
            font-size: 16px

    .collapsed-menu
        span
            width: 0
            transition: width .2s ease

        i
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 21px;

    .layout-header
        background head-nav-color;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

    .layout-content
        height calc(100% - 60px)
        overflow hidden
        padding 0 24px 0 24px

        .layout-content-layout
            height 100%
            overflow hidden

        .layout-content-content
            padding 5px 20px 20px 0
            height calc(100% - 80px)
            overflow auto

    .layout-footer
        margin-top 10px
        text-align center
</style>
