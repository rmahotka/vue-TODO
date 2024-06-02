<template>
  <header>
    <div class="wrapper">
      <p class="logo">
        <span class="logo-title">TODO</span> <span class="logo-subtitle">list</span>
      </p>
      <div>
        <nav class="nav">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.wrapper {
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #00dc82;
}

.logo-title {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding-right: 3px;
}

.logo-subtitle {
  font-size: 23px;
}

.nav {
  display: flex;
  gap: 10px;
}

.nav-link {
  position: relative;
  padding: 8px 8px 4px 8px;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  transition: all ease 0.3s;
}

.nav-link:hover {
  color: #00c16a;
}

.nav-link::after {
  content: '';
  position: absolute;
  background: #00c16a;
  height: 2px;
  border-radius: 1px;
  width: 0;
  bottom: 0;
  left: 0;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
