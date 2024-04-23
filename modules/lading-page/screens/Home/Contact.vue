<script lang="ts"
  setup>

</script>

<template>
  <section class="relative"
    id="contact">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-bold text-base-10 tracking-widest text-xs">ENDEREÇO</h2>
            <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-bold text-base-10 tracking-widest text-xs">EMAIL</h2>
            <a class="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 class="title-font font-bold text-base-10 tracking-widest text-xs mt-4">TELEFONE</h2>
            <p class="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-base-10 text-xl mb-1 font-bold font-elmessiri">Mande-nos uma mensagem</h2>
        <p class="leading-relaxed mb-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veritatis
          id nemo.</p>
        <div class="relative mb-4">
          <label for="name"
            class="leading-7 text-xl font-semibold">Nome</label>
          <input type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email"
            class="leading-7 text-xl font-semibold">Email</label>
          <input type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message"
            class="leading-7 text-xl font-semibold">Mensagem</label>
          <textarea id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <Button class="items-center justify-center">Enviar</Button>
        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
      </div>
    </div>
  </section>
</template>
