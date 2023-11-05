import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home/Home.vue';
import About from '../views/About/About.vue';
import Order from '../views/Order/Order.vue';
import History from '../views/History/History.vue';
import Login from '../views/Login/Login.vue';
import Register from '../views/Register/Register.vue';
import User from '../views/User/User.vue';
import EditProfile from '../views/EditProfile/EditProfile.vue';


import Test from '../views/Test/Test.vue'

// Layouts
import AuthLayout from '../layouts/AuthLayout/AuthLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.vue';


// router Admin
import Admin from '../views/Admin/Admin.vue';

const routes = [
    // AuthLayout
    {
        path: "/login",

        component: Login,
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: "/register",

        component: Register,
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: "/test",

        component: Test,
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: "/",

        component: Home,
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/about",

        component: About,
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/order",

        component: Order,
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/history",

        component: History,
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/profile",

        component: User,
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/editprofile",

        component: EditProfile,
        meta: {
            layout: DefaultLayout,
        },

    },
    {
        path: "/admin",

        component: Admin,
        meta: {
            layout: DefaultLayout,
        }
    },

]

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         component: About
//     },
//     {
//         path: '/order',
//         name: 'Order',
//         component: Order
//     },
//     {
//         path: '/history',
//         name: 'History',
//         component: History
//     },
//     {
//         path: '/profile',
//         name: 'Profile',
//         component: User
//     },
//     {
//         path: '/editprofile',
//         name: 'EditProfile',
//         component: EditProfile
//     },
//     // Admin routes
//     {
//         path: '/admin',
//         name: 'Admin',
//         component: Admin
//     },
//     // Auth
//     {
//         path: '/login',
//         name: 'Login',
//         component: Login

//     }

// ]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;