<template>
    <div>
      <header>
        <ul>
         
          <li v-if="!authenticated" class="loginBtn" style="float: right">
            <nuxt-link to="/login">Login</nuxt-link>
          </li>
        </ul>
      </header>
      <div class="mainContent">
        <slot />
      </div>
      <footer>
       
      </footer>
    </div>
  </template>

<script  setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const router = useRouter();


const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>