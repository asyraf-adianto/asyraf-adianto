<template>
    <!-- Main Container-->
    <div class="w-screen h-screen flex justify-center py-2 px-2 lg:px-0">
      <BackgroundLight />
      <DevTailwind class="hidden xl:block" />     

      <!-- After Justify Center Container-->
      <div class="w-full flex flex-col gap-2 lg:w-8/12">
      
        <!-- Header Container-->
        <div class="flex-none flex flex-row items-center justify-between h-14 border border-gray-500 rounded-xl px-4 ">
          <LogoAsyraf />
          <div>
            <NuxtLink :to="{ path: '/profile' }">                         
              <p class="text-md text-gray-500">Profile</p>
            </NuxtLink>
          </div>
          <!-- <span>Upload to Cloudinary</span>
          <input
            type="file"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="upload image button"
            @change="selectFile"
          /> -->
        </div>

        <!-- Body Container-->
        <div class="flex-grow bg-white overflow-auto">
          <Nuxt />
        </div>

        <!-- Footer Container-->
        <div class="flex-none flex-row items-center justify-end h-10 border-t border-gray-500 gap-3 hidden lg:flex ">
          <p class="text-gray-500 xl:text-sm lg:text-xs">
            This project cannot be developed without using:
          </p>
          <a href="https://nuxtjs.org/">
            <img src="/nuxt-js-modified.svg" class="h-3 xl:h-4"/>
          </a>
          <a href="https://tailwindcss.com/">
            <img src="/tailwind-css-modified.svg" class="h-3 xl:h-4"/>
          </a>
          <a href="https://github.com/">
            <img src="/github-modified.svg" class="h-3 xl:h-4"/>
          </a>
          <a href="https://vercel.com/">
            <img src="/vercel-modified.svg" class="h-3 xl:h-4"/>
          </a>
          <a href="https://cloudinary.com/">
            <img src="/cloudinary-modified.svg" class="h-3 xl:h-4"/>
          </a>
          <a href="https://www.deta.sh/">
            <img src="/deta-cloud-modified.svg" class="h-3 xl:h-4"/>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    async selectFile(e) {
      const file = e.target.files[0];

      /* Make sure file exists */
      if (!file) return;

      /* create a reader */
      const readData = (f) =>  new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
      });

      /* Read data */
      const data = await readData(file);

      /* upload the converted data */
      const instance = this.$cloudinary.upload(data, 
        {
          uploadPreset: 'ml_default',
        }
      )
    }
  }  
}
</script>