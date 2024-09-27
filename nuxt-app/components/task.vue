
<template>
  <div class="bg-white shadow-md rounded-lg p-6">
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


