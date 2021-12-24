<template>
    <!-- Main Container-->
    <div class="relative mx-auto w-full xl:w-8/12">
      <BackgroundLight />
      <DevTailwind class="hidden xl:block" />     
      
      <!-- Header Container-->
      <div class="fixed top-0 left-0 h-14 border-b border-gray-500 bg-white shadow z-50 w-full flex flex-col justify-center">
        <div 
          class="container mx-auto inset-x-0 flex flex-row justify-between px-4 w-full xl:w-8/12"
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
      </div>
      <div class="w-full h-14 bg-transparent"></div>
      <!-- Body Container-->
      <Nuxt />
      <div class="w-full h-0 xl:h-10 bg-transparent"></div>
      <!-- Footer Container-->
      <div class="relative xl:fixed xl:bottom-0 xl:left-0 xl:h-10 bg-white border-t border-gray-500 px-4 py-2 shadow xl:z-50 w-full ">
        <FooterDesktop />
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