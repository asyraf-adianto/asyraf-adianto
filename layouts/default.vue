<template>
    <div class="">
      <BackgroundGreenBlue />
      <div class="fixed right-0 top-0">
        <input id="toggle" type="checkbox" class="hidden peer"/>
        <label for="toggle" class="cursor-pointer flex flex-row right-0">
          <div class="mb-auto p-2 bg-gray-100 opacity-40 right-0 peer-checked:left-0"></div>
          <div class="flex-col rounded-xl bg-white border border-gray-400 p-2 w-40 h-screen hidden peer-checked:flex">
            <div class="text-sm pb-2 font-bold">Color Reference</div>
            <ul class="overflow-auto">
              <li v-for="color of colorClass" :key="color.id" class="flex flex-row items-center text-xs">
                <div v-bind:class="[color.color]" class="w-6 h-6 mr-2 border border-gray-400 bg-inherit"></div>
                <p>{{ color.color }}</p>
              </li>
            </ul>
          </div>
        </label>
      </div>
      Test
      <Nuxt />
    </div>
</template>
<script>
export default {
  head: {
    title: 'My awesome project', // Other meta information
    script: [
      { hid: 'stripe', src: 'https://js.stripe.com/v3/', defer: true },
      { hid: 'jit', src: 'https://unpkg.com/tailwindcss-jit-cdn', defer: true }
    ]
  },
  data() {
    return {
      colorClass:[
        {id:1, color:'bg-transparent'},
        {id:2, color:'bg-current'},
        {id:3, color:'bg-black'},
        {id:4, color:'bg-white'},
        {id:5, color:'bg-gray-50'},
        {id:6, color:'bg-gray-100'},
        {id:7, color:'bg-gray-200'},
        {id:8, color:'bg-gray-300'},
        {id:9, color:'bg-gray-400'},
        {id:10, color:'bg-gray-500'},
        {id:11, color:'bg-gray-600'},
        {id:12, color:'bg-gray-700'},
        {id:13, color:'bg-gray-800'},
        {id:14, color:'bg-gray-900'},
        {id:15, color:'bg-red-50'},
        {id:16, color:'bg-red-100'},
        {id:17, color:'bg-red-200'},
        {id:18, color:'bg-red-300'},
        {id:19, color:'bg-red-400'},
        {id:20, color:'bg-red-500'},
        {id:21, color:'bg-red-600'},
        {id:22, color:'bg-red-700'},
        {id:23, color:'bg-red-800'},
        {id:24, color:'bg-red-900'},
        {id:25, color:'bg-yellow-50'},
        {id:26, color:'bg-yellow-100'},
        {id:27, color:'bg-yellow-200'},
        {id:28, color:'bg-yellow-300'},
        {id:29, color:'bg-yellow-400'},
        {id:30, color:'bg-yellow-500'},
        {id:31, color:'bg-yellow-600'},
        {id:32, color:'bg-yellow-700'},
        {id:33, color:'bg-yellow-800'},
        {id:34, color:'bg-yellow-900'},
        {id:35, color:'bg-green-50'},
        {id:36, color:'bg-green-100'},
        {id:37, color:'bg-green-200'},
        {id:38, color:'bg-green-300'},
        {id:39, color:'bg-green-400'},
        {id:40, color:'bg-green-500'},
        {id:41, color:'bg-green-600'},
        {id:42, color:'bg-green-700'},
        {id:43, color:'bg-green-800'},
        {id:44, color:'bg-green-900'},
        {id:45, color:'bg-blue-50'},
        {id:46, color:'bg-blue-100'},
        {id:47, color:'bg-blue-200'},
        {id:48, color:'bg-blue-300'},
        {id:49, color:'bg-blue-400'},
        {id:50, color:'bg-blue-500'},
        {id:51, color:'bg-blue-600'},
        {id:52, color:'bg-blue-700'},
        {id:53, color:'bg-blue-800'},
        {id:54, color:'bg-blue-900'},
        {id:55, color:'bg-indigo-50'},
        {id:56, color:'bg-indigo-100'},
        {id:57, color:'bg-indigo-200'},
        {id:58, color:'bg-indigo-300'},
        {id:59, color:'bg-indigo-400'},
        {id:60, color:'bg-indigo-500'},
        {id:61, color:'bg-indigo-600'},
        {id:62, color:'bg-indigo-700'},
        {id:63, color:'bg-indigo-800'},
        {id:64, color:'bg-indigo-900'},
        {id:65, color:'bg-purple-50'},
        {id:66, color:'bg-purple-100'},
        {id:67, color:'bg-purple-200'},
        {id:68, color:'bg-purple-300'},
        {id:69, color:'bg-purple-400'},
        {id:70, color:'bg-purple-500'},
        {id:71, color:'bg-purple-600'},
        {id:72, color:'bg-purple-700'},
        {id:73, color:'bg-purple-800'},
        {id:74, color:'bg-purple-900'},
        {id:75, color:'bg-pink-50'},
        {id:76, color:'bg-pink-100'},
        {id:77, color:'bg-pink-200'},
        {id:78, color:'bg-pink-300'},
        {id:79, color:'bg-pink-400'},
        {id:80, color:'bg-pink-500'},
        {id:81, color:'bg-pink-600'},
        {id:82, color:'bg-pink-700'},
        {id:83, color:'bg-pink-800'},
        {id:84, color:'bg-pink-900'}
      ]
    }
  },
}
</script>