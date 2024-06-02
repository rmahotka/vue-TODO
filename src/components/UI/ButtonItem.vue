<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
button {
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  font-size: 20px;
  padding: 8px 12px;
  transition: 0.2s;
  background-color: #fff;
}

button:hover {
  background-color: #00c16a;
  color: #fff;
}

.btn-active {
  background-color: #00c16a;
  color: #fff;
}
</style>
