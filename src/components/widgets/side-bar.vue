<script setup>
import { useFetch } from '@/composables/useFetch'
import UserCard from '../shared/user-card.vue'
import { ref, computed, onMounted } from 'vue'
import searchUser from '@/stores/search-user'
import { useVirtualList } from '@vueuse/core'
import { generateParamString } from '@/composables/generateParamString'
import { useRouter, useRoute } from 'vue-router'
import BaseInput from '../shared/base-input.vue'
const query = ref('')

const storeState = searchUser.state
const users = computed(() => storeState.users)
const isPending = ref(false)
const alreadySearched = ref(false)

const router = useRouter()
const route = useRoute()

const submit = async () => {
  if (query.value === '') {
    searchUser.dispatch('fillUsers', [])
    alreadySearched.value = false
    return
  }

  const queries = query.value.trim().split(',')
  isPending.value = true
  let { data, resultQuery } = await getData(queries, 'username')
  if (data?.length <= 0) {
    ;({ data, resultQuery } = await getData(queries, 'id'))
  }
  searchUser.dispatch('fillUsers', data)
  isPending.value = false
  alreadySearched.value = true
  router.push(resultQuery)
}

const getData = async (queriesAray, key) => {
  const resultQuery = generateParamString(queriesAray, key)
  return {
    data: await useFetch(`/${resultQuery}`, {
      method: 'GET'
    }),
    resultQuery
  }
}

const { list, containerProps, wrapperProps } = useVirtualList(users, {
  itemHeight: 72
})

onMounted(async () => {
  await router.isReady()
  const searchedObjectKey = Object.keys(route.query).find(
    (routeParams) => routeParams === 'username' || routeParams === 'id'
  )
  if (searchedObjectKey) {
    isPending.value = true
    const { data } = await getData(
      typeof route.query[searchedObjectKey] === 'string'
        ? [route.query[searchedObjectKey]]
        : route.query[searchedObjectKey],
      searchedObjectKey
    )
    if (searchedObjectKey) {
      searchUser.dispatch('fillUsers', data)
    }
    isPending.value = false
  }
})
</script>
<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <div class="sidebar__group">
        <span class="sidebar__title">Поиск сотрудников</span>
        <form @submit.prevent="submit">
          <BaseInput :is-pending-state="isPending" v-model="query" />
        </form>
      </div>
      <div class="sidebar__group">
        <span class="sidebar__title">Результаты</span>
      </div>
    </div>
    <div v-if="users?.length > 0" class="user-cards-list" v-bind="containerProps">
      <div class="user-cards-list__wrapper" v-bind="wrapperProps">
        <div v-for="item in list" :key="item.index">
          <UserCard :user-data="item.data" />
        </div>
      </div>
    </div>
    <div class="sidebar__wrapper" v-else-if="users === null">
      <p>Произошла непредвиденная ошибка</p>
    </div>
    <div class="sidebar__wrapper" v-else-if="alreadySearched">
      <p>Ничего не найдено</p>
    </div>
    <div class="sidebar__wrapper" v-else>
      <p>начните поиск</p>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
@import '#/vars.scss';

.user-cards-list {
  height: 500px;
  padding: 10px 30px 10px 20px;
  overflow-y: auto;
  overflow-x: visible;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}

.sidebar {
  background-color: $lightGray;
  padding: 27px 0px 27px 0px;

  &__wrapper {
    padding: 0 30px 0 20px;
  }

  &__group:not(:last-child) {
    margin-bottom: 29px;
  }

  &__title {
    display: block;
    color: $black;
    font-weight: 600;
    margin-bottom: 14px;
  }
}
</style>
