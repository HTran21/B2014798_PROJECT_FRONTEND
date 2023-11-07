 
<!-- <template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template> -->
<template>
  <!-- <div class="app"> -->

  <!-- <Sidebar />

    <div class="d-block w-100">
      <AppHeader />
      <router-view />
    </div> -->
  <div>
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </div>
  <!-- </div> -->
</template>


<script setup>
import Sidebar from './components/SideBar/SideBar.vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --orange: #FFA16C;
  --sidebar-width: 230px;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }


  }
}
</style>