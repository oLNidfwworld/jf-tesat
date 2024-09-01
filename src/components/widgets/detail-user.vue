<script setup>
import NoContent from '@/components/shared/no-content.vue'
defineProps({
  userData: Object,
  isPending: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <transition name="fading" mode="out-in">
    <div v-if="isPending" class="user-detail">
      <div class="skeleton" style="width: 100%; height: 300px"></div>
      <div>
        <div class="skeleton-bound-group">
          <div class="skeleton" style="width: 100%; height: 40px"></div>
          <div class="skeleton" style="width: 100%; height: 40px"></div>
          <div class="skeleton" style="width: 100%; height: 40px"></div>
        </div>
        <div class="skeleton-bound-group">
          <div class="skeleton" style="width: 100%; height: 40px"></div>
          <div class="skeleton" style="width: 100%; height: 150px"></div>
        </div>
      </div>
    </div>
    <NoContent
      v-else-if="!isPending && (userData === undefined || Object.keys(userData).length <= 0)"
    >
      Неправильная ссылка
    </NoContent>
    <div v-else class="user-detail">
      <div class="user-detail__image-wrapper">
        <picture>
          <source srcset="i/placeholder.png" />
          <img :alt="userData.name" />
        </picture>
      </div>
      <div class="user-detail__content">
        <div class="user-detail__main-info">
          <h1 class="user-detail__title">{{ userData.name }}</h1>
          <div clas="user-detail__additional-info">
            <span class="user-detail__additional-info-termin">email: </span>
            <span class="user-detail__additional-info-description"> {{ userData.email }} </span>
          </div>
          <div clas="user-detail__additional-info">
            <span class="user-detail__additional-info-termin">phone: </span>
            <span class="user-detail__additional-info-description">{{ userData.phone }} </span>
          </div>
        </div>

        <h2 class="user-detail__title user-detail__exceptional-margin">О себе:</h2>
        <p class="user-detail__description">
          {{ userData.address.city }}, {{ userData.address.street }}, {{ userData.address.suite }}
        </p>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';
@import '#/ui/skeleton.scss';
@import '#/ui/transitionAnimations.scss';

.user-detail {
  height: 100%;
  background: $lightGray;
  padding: 30px 30px 30px 21px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 61px;

  &__additional-info {
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }

  &__additional-info-termin {
    font-weight: 600;
    color: $black;
  }

  &__additional-info-description {
    color: $gray;
  }

  &__image-wrapper {
    border: 1px solid $borderGray;
    height: fit-content;
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  &__title {
    color: $black;
    line-height: 1.4;
    font-weight: 600;
  }

  &__description {
    color: $gray;
    font-size: 14px;
    line-height: 1.29;
  }

  &__exceptional-margin {
    margin-bottom: 25px;
  }
}

@keyframes skeletonShine {
  100% {
    background-position: right -40px top 0;
  }
}
</style>
