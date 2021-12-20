<template>
    <!-- Main Container-->
    <div class="w-screen h-screen">
      <BackgroundLight />
      <DevTailwind class="hidden xl:block" />     
      
      <!-- Header Container-->
      <div 
        class="fixed container mx-auto inset-x-0 top-0 flex flex-row items-center justify-between h-14 border border-gray-500 bg-white px-4 shadow z-50 w-full xl:w-8/12"
      >
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
      <div class="relative container mx-auto flex flex-col justify-end w-full xl:w-8/12">
        <Nuxt />
      </div>

      <!-- Footer Container-->
      <div class="relative container xl:fixed inset-x-0 bottom-0 mx-auto w-full xl:w-8/12">
        <div class="flex flex-col xl:flex-row items-center justify-center xl:justify-end mt-4 xl:h-10 border-t border-gray-500 gap-3 ">
          <p class="text-gray-500 xl:text-sm">
            This project cannot be developed without 
          </p>
          <div class="flex flex-row flex-wrap items-center justify-center xl:justify-end gap-2">
            <a href="https://nuxtjs.org/">
              <img src="/nuxt-js-modified.svg" class="h-6 xl:h-4"/>
            </a>
            <a href="https://tailwindcss.com/">
              <img src="/tailwind-css-modified.svg" class="h-6 xl:h-4"/>
            </a>
            <a href="https://github.com/">
              <img src="/github-modified.svg" class="h-6 xl:h-4"/>
            </a>
            <a href="https://vercel.com/">
              <img src="/vercel-modified.svg" class="h-6 xl:h-4"/>
            </a>
            <a href="https://cloudinary.com/">
              <img src="/cloudinary-modified.svg" class="h-6 xl:h-4"/>
            </a>
            <a href="https://www.deta.sh/">
              <img src="/deta-cloud-modified.svg" class="h-6 xl:h-4"/>
            </a>
          </div>
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