<template>
  <header>
    <div class="wrapper">
      <p class="logo">TODO</p>
      <nav class="nav">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.wrapper {
  background-color: #c70074;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #fefefe;
  font-weight: bold;
  font-size: 20px;
}

.nav {
  display: flex;
  gap: 10px;
}

.nav-link {
  position: relative;
  padding: 8px 8px 1px 8px;
  font-size: 18px;
  text-decoration: none;
  color: #fefefe;
}

.nav-link:hover {
  border-bottom: 1px solid #fff;
}
</style>
