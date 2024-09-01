<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  userData: Object
})
</script>

<template>
  <RouterLink :to="`${userData.id}`" class="user-card">
    <div class="user-card__image-wrapper">
      <picture>
        <source srcset="i/placeholder.png" />
        <img class="user-card__image" alt="Bret" />
      </picture>
    </div>
    <div class="user-card__content">
      <h3 class="user-card__name">
        {{ userData.username }}
      </h3>
      <span class="user-card__additional">
        {{ userData.email }}
      </span>
    </div>
  </RouterLink>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';

.user-card {
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: 70px auto;
  filter: drop-shadow($baseShadow);
  border-radius: 10px;
  line-height: 17.07px;
  overflow: hidden;

  border: 1px solid transparent;
  border-right: 0px;
  transition: 0.3s ease-out border-color;

  &__content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    border-left: 1px solid $borderGray;
    overflow: hidden;
    background-color: $white;
    overflow: hidden;
    transition: 0.3s ease-out background-color;
  }

  &__name {
    font-size: 14px;
    font-weight: 600;
    color: $black;
  }

  &__additional {
    font-size: 14px;
    color: $gray;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  &__image {
    aspect-ratio: 1/1;
    background-color: $white;
  }

  &:hover,
  &.router-link-active {
    border-color: $borderGray;

    .user-card__content {
      background-color: $borderGray;
    }
  }
}
</style>
