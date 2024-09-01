<script setup>
import { RouterView } from 'vue-router'
import BaseHeader from './components/widgets/base-header.vue'
import SideBar from './components/widgets/side-bar.vue'
</script>
<template>
  <div class="app-wrapper">
    <BaseHeader />
    <div class="dashboard">
      <SideBar />
      <main class="dashboard__content">
        <RouterView />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';

.app-wrapper {
  height: 100dvh;
  padding: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dashboard {
  flex: 1 0 auto;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 291px auto;
  height: auto;
  box-shadow: $baseShadow;

  &__content {
    border-left: 1px solid #dededd;
  }
}
</style>
