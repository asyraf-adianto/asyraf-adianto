<template>
  <div class="w-full h-full flex flex-col">
      <div class="flex-none bg-green-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
          <div class="flex-none aspect-square h-10 rounded-full object-cover">
            <img 
              src="https://res.cloudinary.com/dsipw0z3u/image/upload/ar_1:1,c_fill,g_auto,o_100,q_100,r_max,w_640,z_1.1/v1639960232/profile/62_822-3480-5590_20211220_072758_z1xued.png" 
            />
          </div>
          <p class="text-3xl">
              Asyraf N. Adianto
          </p>
      
      </div>
      <div class="flex-none bg-blue-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
          Project Management
      </div>
      <div class="flex-none bg-red-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
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
