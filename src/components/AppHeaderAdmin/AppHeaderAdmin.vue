<!-- <script>
// export default {

// }
</script> -->
<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <form class="groupSearch" role="search">
                <input class="inputSearch" type="search" placeholder="Search" aria-label="Search">
                <span class="iconSearch"><i class="fa-solid fa-magnifying-glass"></i></span>
            </form>
            <div class="infoUser">
                <!-- <div class="btnLogin">Login</div> -->
                <div v-if="isUserLoggedIn()" class="contentInfo">
                    <img :src="imageUser" class="imageUser" alt="">
                    <span class="nameUser ml-1">
                        {{ username }}
                    </span>
                    <i class="fa-solid fa-user-tie iconHeader"></i>
                    <span class="nameUser mr-0 ml-1">
                        {{ position }}
                    </span>
                </div>
                <div v-else>
                    <button class="btnLogin">Đăng nhập</button>
                </div>
            </div>

        </div>
    </nav>
</template>

<script setup>
const isUserLoggedIn = () => {
    return localStorage.getItem("isLogin") === "true";
}

const username = localStorage.getItem("Username");
const avatar = localStorage.getItem("Avatar");
const position = localStorage.getItem("Position");
const imageUser = `http://localhost:3000/${avatar}`
</script>

<style lang="scss" scoped>
@import 'AppHeaderAdmin.scss';
</style>