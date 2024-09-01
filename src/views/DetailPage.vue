<script setup lang="ts">
import DetailUser from '@/components/widgets/detail-user.vue'
import { useFetch } from '@/composables/useFetch'
import searchUser from '@/stores/search-user'
import { shallowRef, ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const detailUserData = shallowRef({})

const router = useRouter()
const route = useRoute()
const isPending = ref(false)

const getUserById = async () =>
  (
    await useFetch(`/?id=${route.params.id}`, {
      method: 'GET'
    })
  )[0]

onMounted(async () => {
  isPending.value = true
  detailUserData.value = await getUserById()
  isPending.value = false
})

watch(
  () => route.params.id,
  async () => {
    detailUserData.value = {}
    isPending.value = true
    detailUserData.value = await getUserById()
    isPending.value = false
  }
)

watch(
  () => searchUser.state.users,
  () => {
    if (searchUser.state.users.length <= 0) {
      router.replace('/')
    }
  }
)
</script>
<template>
  <DetailUser :is-pending="isPending" :user-data="detailUserData" />
</template>
<style></style>
