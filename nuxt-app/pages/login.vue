<template>
     <div>
    <div class="flex items-center justify-center min-h-screen bg-sky-950">
      <div class="w-full max-w-sm p-4 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold text-center">Inicio de Sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="mt-4">
            <label for="email" class="block text-sm">Correo</label>
            <input
              v-model="user.username"
              type="text"
       
              placeholder="Ingrese su correo"
              name="uname"
              required
              class="w-full p-2 mt-2 border rounded"
             
            />
          </div>
          <div class="mt-4">
            <label for="password" class="block text-sm">Contraseña</label>
            <input
           v-model="user.password"
        type="password"
              class="w-full p-2 mt-2 border rounded"
              placeholder="Ingrese su contraseña"
        name="psw"
        required
            />
          </div>
          <button
            type="submit"
            @click.prevent="login"
            @onclick="login"
            class="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created


const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: '', 
  password: '',
});

const router = useRouter();

console.log(authenticated.value)
const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  console.log(authenticated.value)
  if (authenticated.value) {
    router.push('/');
  }
};
</script>