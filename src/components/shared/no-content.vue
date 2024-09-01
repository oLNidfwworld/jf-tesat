<template>
  <div class="no-content">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';

.no-content {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: $gray;
}
</style>
