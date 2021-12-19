<template>
    <!-- Main Container-->
    <div class="w-screen h-screen flex justify-center py-2">
      <BackgroundLight />
      <DevTailwind />     

      <!-- After Justify Center Container-->
      <div class="flex flex-col gap-2 w-8/12">
      
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
        <div class="flex-grow bg-white">
          2
          <Nuxt />
        </div>

        <!-- Footer Container-->
        <div class="flex-none flex flex-row items-center justify-right h-10 border-t border-gray-500">
          <p class="text-gray-500">This project cannot be developed without using:</p>
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