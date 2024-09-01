<script setup>
defineProps({
  isPendingState: {
    type: Boolean,
    default: false
  }
})
const model = defineModel()
</script>
<template>
  <div class="inpt__outer">
    <input v-model="model" class="inpt" />
    <transition name="fading">
      <svg
        v-if="isPendingState"
        class="inpt__preloader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <circle fill="#333" stroke="#333" stroke-width="15" r="15" cx="40" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle fill="#333" stroke="#333" stroke-width="15" r="15" cx="100" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle fill="#333" stroke="#333" stroke-width="15" r="15" cx="160" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';
@import '#/ui/transitionAnimations.scss';

.inpt {
  background-color: $white;
  padding: 14.5px 16px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  color: $gray;
  font-size: 14px;
  width: 100%;

  &__outer {
    position: relative;
    width: 100%;
    height: fit-content;
  }

  &__preloader {
    position: absolute;
    width: 30px;
    right: 15px;
    top: 0;
    bottom: 0;
    z-index: 0;
    margin: auto 0 auto 0;
  }
}
</style>
