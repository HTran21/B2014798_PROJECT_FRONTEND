import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home/Home.vue';
import About from '../views/About/About.vue';
import Order from '../views/Order/Order.vue';
import History from '../views/History/History.vue';
import Login from '../views/Login/Login.vue';
import Register from '../views/Register/Register.vue';
import User from '../views/User/User.vue';
import EditProfile from '../views/EditProfile/EditProfile.vue';
import Error from '../views/Error/Error.vue';


import Test from '../views/Test/Test.vue'

// Layouts
import AuthLayout from '../layouts/AuthLayout/AuthLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.vue';
import ErrorLayout from '../layouts/ErrorLayout/ErrorLayout.vue';
import AdminLayout from '../layouts/AdminLayout/AdminLayout.vue';


// router Admin
import Admin from '../views/Admin/Admin.vue';
import RegisterAdmin from '../views/RegisterAdmin/RegisterAdmin.vue';
import LoginAdmin from '../views/LoginAdmin/LoginAdmin.vue';
import AboutAdmin from '../views/AboutAdmin/AboutAdmin.vue';

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
    // router Admin
    {
        path: "/admin/home",

        component: Admin,
        meta: {
            layout: AdminLayout,
        }
    },
    {
        path: "/admin/about",

        component: AboutAdmin,
        meta: {
            layout: AdminLayout,
        }
    },
    {
        path: "/admin/register",

        component: RegisterAdmin,
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: "/admin/login",

        component: LoginAdmin,
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: "/:slug",

        component: Error,
        meta: {
            layout: ErrorLayout,
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