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