<template>
  <Transition name="fade">
    <div class="alert-item" v-if="errorStatus">
      <i class="pi pi-info alert-item-icon"></i>
      <p>Adding error, the text field is empty</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  errorStatus: boolean
}>()
</script>

<style scoped>
.alert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 50px;
  right: 50%;
  transform: translateX(50%);
  border: 3px solid rgb(185, 61, 61);
  border-radius: 8px;
  background-color: rgba(145, 69, 69, 0.747);
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.alert-item-icon {
  border: 3px solid;
  padding: 7px;
  border-radius: 50%;
}
</style>
