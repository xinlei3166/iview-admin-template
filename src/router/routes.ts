import Main from '../views/main/Main.vue'

const routes = [
    {
        path: '/login',
        meta: {
            auth: false,
            hidden: true,
            title: '登录',
            icon: 'md-home'
        },
        component: Main
    },
    {
        path: '/',
        redirect: '/home',
        meta: {
            auth: true,
            hidden: true,
            title: '首页',
            icon: 'md-home'
        },
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    auth: true,
                    hidden: true,
                    title: '开始',
                    icon: 'md-home'
                },
                component: () => import('../views/home/Home.vue')
            }
        ]
    },
    {
        path: '/pics',
        meta: {
            auth: true,
            hidden: false,
            title: '图片管理',
            icon: 'md-images'
        },
        component: Main,
        children: [
            {
                path: '',
                name: 'pics',
                meta: {
                    auth: true,
                    hidden: false,
                    title: '图片列表',
                    icon: 'ios-list-box'
                },
                component: () => import('../views/pic/Pic.vue')
            }
        ]
    },
    {
        path: '/videos',
        meta: {
            auth: true,
            hidden: false,
            title: '视频管理',
            icon: 'logo-youtube'
        },
        component: Main,
        children: [
            {
                path: '',
                name: 'videos',
                meta: {
                    auth: true,
                    hidden: false,
                    title: '视频列表',
                    icon: 'md-videocam'
                },
                component: () => import('../views/home/Home.vue')
            }
        ]
    },
    {
        path: '/settings',
        meta: {
            auth: true,
            hidden: false,
            title: '设置',
            icon: 'ios-cog'
        },
        component: Main,
        children: [
            {
                path: '',
                name: 'settings',
                meta: {
                    auth: true,
                    hidden: false,
                    title: '安全设置',
                    icon: 'ios-build'
                },
                component: () => import('../views/home/Home.vue')
            }
        ]
    },
]

export default routes
