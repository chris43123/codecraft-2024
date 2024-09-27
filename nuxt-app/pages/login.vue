<template>
     <div>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-sm p-4 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold text-center">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mt-4">
            <label for="email" class="block text-sm">Email</label>
            <input
              v-model="email"
              id="email"
              type="email"
              class="w-full p-2 mt-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="block text-sm">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              class="w-full p-2 mt-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const user = ref({
  username: '',
  password: '',
});

const login = async () => {
  // TODO send user Data to the login endpoint and redirect if  successful 
};
</script>