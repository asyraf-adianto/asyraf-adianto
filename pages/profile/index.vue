<template>
  <div class="relative px-4">
    <div class="w-full h-16 bg-transparent"></div>
    
    <!-- First Content -->
    <div class="relative bg-green-200 h-full flex flex-col text-center xl:flex-row justify-between">
      <div class="flex-none flex flex-col items-center justify-end h-2/6">
        <div class="aspect-square h-1/3 w-1/3 rounded-full object-cover">
          <img 
            src="https://res.cloudinary.com/dsipw0z3u/image/upload/ar_1:1,c_fill,g_auto,o_100,q_100,r_max,w_640,z_1.1/v1639960232/profile/62_822-3480-5590_20211220_072758_z1xued.png" 
          />
        </div>
      </div>
      <div class="flex-none flex flex-col h-1/6 xl:text-left text-3xl justify-center font-bold">
        <p class="">
          Asyraf N. Adianto
        </p>
      </div>
      <div class="flex-none flex flex-col h-3/6 xl:text-left justify-start">
        <p class="">
          Working in the blabla blablabla bla blabla duruduruduru lorem ipsum opo meneh iki wes dowo durung yo aku kesel soale ngetik terus then when we should stop this unbearable text to keep being added
        </p>
      </div>
    </div>

    <!-- Second Content -->
    <div class="relative bg-blue-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
        Project Management
    </div>
    <div class="relative bg-red-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
        Whats next?
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  head: {
    title: "Asyraf - Welcome to Asyraf's Website"
  }
}
</script>
