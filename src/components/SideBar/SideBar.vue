<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
            <span class="titleWeb">COFF<span class="text-dark">EE</span></span>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons"><i class="fa-solid fa-angles-right fa-xs"></i></span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons"><i class="fa-solid fa-house icon"></i></span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/about" class="button">
                <span class="material-icons"><i class="fa-solid fa-bell-concierge"></i></span>
                <span class="text">Menu</span>
            </router-link>
            <router-link to="/order" class="button">
                <span class="material-icons"><i class="fa-solid fa-bookmark icon"></i></span>
                <span class="text">Oders <span class="numberOrders">10</span></span>
            </router-link>
            <router-link to="/history" class="button">
                <span class="material-icons"><i class="fa-solid fa-clock"></i></span>
                <span class="text">History</span>
            </router-link>
            <router-link to="/profile" class="button">
                <span class="material-icons"><i class="fa-solid fa-user"></i></span>
                <span class="text">Profile</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/login" class="button">
                <span class="material-icons"><i class="fa-solid fa-right-from-bracket"></i></span>
                <span class="text">Logout</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>

import { ref } from 'vue'
import logoURL from '../../assets/coffee-cup.png';



const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
@import 'SideBar.scss';
</style>