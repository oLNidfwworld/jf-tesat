<script setup></script>
<template>
  <header class="header">
    <div class="header__wrapper">
      <span class="header__title">Жилфонд</span>
      <span class="header__user-placeholder">Пользователь</span>
    </div>
  </header>
</template>
<style scoped lang="scss">
@import '#/vars.scss';

.header {
  flex: 0 0 auto;
  margin-bottom: 26px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: $red;
    font-size: 32px;
    font-weight: 700;
  }
}
</style>
