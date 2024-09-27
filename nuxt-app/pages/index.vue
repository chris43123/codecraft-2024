<template>
  <div>
    <div class="mainContent">
      <div>
        <div class="container mx-auto my-10">
          <h1 class="text-center text-3xl font-semibold mb-4">Mis tareas</h1>
          <div class="md:w-1/2 mx-auto">
            <div class="bg-white shadow-md rounded-lg p-6">
              <form id="todo-form">
                <div class="flex mb-4 space-x-20 ">
                  <div class="relative flex ">
                    <div class="w-full max-w-sm min-w-[200px]">
                      <input
                        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="buscar tareas"
                      />
                    </div>

                    <button
                      class="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                      data-twe-ripple-init
                      data-twe-ripple-color="white"
                      type="button"
                      id="button-addon3"
                    >
                      Buscar
                    </button>
                  </div>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Agregar
                  </button>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Agregar Etiquetas
                  </button>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Agregar Categories
                  </button>
                </div>
              </form>
             
              <ul id="todo-list">
                <li v-for="todo in todos" :key="todo.id">
                  <task :task="todo" />
                </li>
              </ul>

             
            </div>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
<script setup>
//add to do list connection 
import { ref } from 'vue';


</script>
