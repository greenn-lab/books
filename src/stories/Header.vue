<template>
  <header>
    <div class="storybook-header">
      <div>
        <h1>하이</h1>
      </div>
      <div>
        <span class="welcome" v-if="user"
          >Welcome, <b>{{ user.name }}</b
          >!</span
        >
        <BaseButton size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <BaseButton size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <BaseButton
          primary
          size="small"
          @click="$emit('createAccount')"
          label="Sign up"
          v-if="!user"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import './header.css'
import BaseButton from '../components/BaseButton.vue'

defineProps<{ user: { name: string } | null }>()

defineEmits<{
  (event: 'createAccount'): void
  (event: 'login'): void
  (event: 'logout'): void
}>()
</script>
