
<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ task.tags }}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ task.categories }}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
    <h2 class="text-xl font-semibold text-gray-800">{{ task.title }}</h2>
    <p class="text-gray-700 mt-2">{{ task.description }}</p>
    <div class="flex items">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="editTask">
        Editar
    </button>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" @click="completeTask">
        Completar
    </button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" @click="deleteTask">
        Eliminar
    </button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const task = {
            title: 'Tarea 1',
            description: 'Esta es la tarea 1',
            tags: 'Tag 1',
            categories: 'Categoria 1'
        }

        const editTask = () => {
            console.log('Editando tarea')
        }

        const completeTask = () => {
            console.log('Completando tarea')
        }

        const deleteTask = () => {
            console.log('Eliminando tarea')
        }

        return {
            task,
            editTask,
            completeTask,
            deleteTask
        }
    },
})
</script>



