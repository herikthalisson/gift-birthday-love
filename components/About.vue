<template>
  <section id="sobre" class="py-16 px-6 bg-white text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
      {{ titulo }}
    </h2>

    <p class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
      <!-- Renderiza cada linha da mensagem -->
      <span v-for="(linha, index) in mensagem" :key="index">
        {{ linha }}<br/><br/>
      </span>
    </p>
  </section>
</template>

<script setup>
import { titulo, mensagem } from '~/data/about.js'
</script>
