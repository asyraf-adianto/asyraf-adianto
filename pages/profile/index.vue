<template>   
  <!-- First Content -->
  <div style="font-family: 'Balsamiq Sans';" class="relative w-full">
    <!-- First Section - Who am I? -->
    <div class="container flex flex-col sm:flex-row px-6 pt-12 pb-4 mx-auto lg:h-128 lg:pt-32 lg:pb-8 gap-10">
        <div class="flex flex-col text-center items-center justify-center w-full ">
          <h1 class="text-3xl tracking-wide text-gray-800 lg:text-4xl">Who am I?</h1>
        </div>
    </div>
    <div class="container flex flex-col place-items-center sm:flex-row px-6 py-4 mx-auto lg:h-128 lg:pt-8 lg:pb-16 gap-10">
      <div class="relative flex-shrink flex items-end justify-end w-full h-96">
        <img class="absolute object-square w-auto h-full sm:w-full sm:h-auto right-0 max-h-md max-w-md rounded-md"
          src="https://res.cloudinary.com/dsipw0z3u/image/upload/ar_1:1,c_fill,g_auto,o_100,q_100,r_max,w_640,z_1.1/v1639960232/profile/62_822-3480-5590_20211220_072758_z1xued.png" 
        >
      </div>
      <div class="flex flex-col text-center sm:text-left items-center justify-center sm:justify-start w-full lg:flex-row ">
        <div class="max-w-lg">
            <h1 class="text-3xl tracking-wide text-gray-800 lg:text-4xl font-semibold">Asyraf N. Adianto</h1>
            <h2 class="text-lg tracking-wide text-gray-500 lg:text-xl font-semibold">Indonesian, 26 y.o, M.Eng Graduated</h2>
            <p class="mt-4  text-gray-600">
              Dedicated IT professional with a history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges with the new idea to best enhance the organizational brand.
            </p><p class="mt-8 text-lg text-gray-700 font-medium">
              But you might want to ask me like... is it true?
            </p>
        </div>
      </div>
    </div>

    <!-- Second Section - How well educated am I? -->
    <div class="container flex flex-col sm:flex-row px-6 pt-12 pb-4 mx-auto lg:h-128 lg:pt-32 lg:pb-8 gap-10">
      <div class="flex flex-col text-center items-center justify-center w-full ">
        <h1 class="text-3xl tracking-wide text-gray-800 lg:text-4xl">How well educated am I?</h1>
      </div>
    </div>
    <div class="container flex flex-col sm:flex-row px-6 py-4 mx-auto lg:h-128 lg:pt-8 lg:pb-16 gap-10">
      <div class="flex flex-col text-center sm:text-right items-center justify-start sm:justify-center w-full lg:flex-row lg:w-1/2">
        <div class="max-w-lg">
            <p class="mt-4  text-gray-600">
              I started my education journey in 2013 by enrolling in Institut Teknologi Sepuluh Nopember (Sepuluh Nopember Institute of Technology) in Surabaya, Indonesia. I have completed my studies up to my Master's degree which started at the same time as my Bachelor's degree graduation in 2017. 
            </p>
            <p class="mt-4  text-gray-600">
              During my studies, I had a high passion for analyzing the logic of the systems as well as designing and modeling AI and/or other digital products, from prototyping until developing actual code.
            </p>
            <p class="mt-8  text-xs text-gray-300">
              Pssst... you can hover the mouse into my education card to view my final GPA
            </p>
        </div>
      </div>
      <div class="flex-shrink flex flex-col items-center justify-center w-full h-96 lg:w-1/2 gap-4">
        <div class="relative group flex h-60 lg:h-32 border-6 items-center bg-white border-blue-300 shadow-lg rounded-xl p-4 gap-4">
          <img class="w-1/3"
            src="/its-logo-modified.svg" 
          >
          <div class="flex flex-col">
            <h1 class="text-lg tracking-wide text-gray-800 font-semibold">Master of Engineering</h1>
            <h2 class="text-sm tracking-wide text-gray-600 font-semibold">Industrial System Optimization - Industrial Engineering Department</h2>
            <div class="flex flex-col sm:flex-row mt-4 justify-between gap-1 sm:gap-4">
              <p class="text-sm text-gray-400">2017 - 2019</p>
              <p class="hidden sm:absolute group-hover:block sm:right-4 text-sm text-gray-400">GPA: 3.63 from 4.00</p>
            </div>
          </div>
        </div>
        <div class="relative group flex h-60 lg:h-32 border-6 items-center bg-white border-blue-300 shadow-lg rounded-xl p-4 gap-4">
          <img class="w-1/3"
            src="/its-logo-modified.svg" 
          >
          <div class="flex flex-col">
            <h1 class="text-lg tracking-wide text-gray-800 font-semibold">Bachelor of Engineering</h1>
            <h2 class="text-sm tracking-wide text-gray-600 font-semibold">Industrial Engineering Department</h2>
            <div class="flex flex-col sm:flex-row mt-4 justify-between gap-1 sm:gap-4">
              <p class="text-sm text-gray-400">2013 - 2017</p>
              <p class="hidden sm:absolute group-hover:block sm:right-4 text-sm text-gray-400">GPA: 3.36 from 4.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Third Section - Have I any working experience? -->
    <div class="container flex flex-col sm:flex-row px-6 pt-12 pb-4 mx-auto lg:h-128 lg:pt-32 lg:pb-8 gap-10">
      <div class="flex flex-col text-center items-center justify-center w-full ">
        <h1 class="text-3xl tracking-wide text-gray-800 lg:text-4xl">Have I any working experience?</h1>
      </div>
    </div>
  </div>

  <!-- Second Content -->
  <!-- <div class="relative bg-blue-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
      Project Management
  </div>
  <div class="relative bg-red-200 h-full flex flex-col text-center xl:flex-row xl:test-left">
      Whats next?
  </div> -->
</template>

<script>
export default {
  name: 'ProfilePage',
  head: {
    title: "Asyraf - Welcome to Asyraf's Website"
  }
}
</script>
