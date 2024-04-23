<script lang="ts"
  setup>

</script>

<template>
  <header class="fixed w-full backdrop-blur-md z-50">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/#home"
        class="flex title-font font-medium items-center mb-4 md:mb-0">
        <img src="public/images/logo.webp"
          class="w-16 h-16" />
        <span class="ml-3 text-xl font-elmessiri font-bold text-base-10">CCSTMJSF</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base lg:text-xl justify-center space-x-5">
        <a class="hover:text-base-30 transition-colors"
          href="#home">Home</a>
        <a class="hover:text-base-30 transition-colors"
          href="#gallery">Galeria</a>
        <a class="hover:text-base-30 transition-colors"
          href="#our-job">Nosso trabalho</a>
        <a class="hover:text-base-30 transition-colors"
          href="#contact">Contato</a>
      </nav>
      <Button class="text-base px-4 ml-0 mt-4 lg:ml-5 lg:mt-0">
        Fale conosco!
      </Button>
    </div>
  </header>
</template>
