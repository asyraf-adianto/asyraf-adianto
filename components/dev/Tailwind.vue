<template>
    <label for="toggle" class="fixed top-0 cursor-pointer flex flex-row right-0 z-50">
        <input id="toggle" type="checkbox" class="hidden peer"/>
        <div class="mb-auto p-2 bg-gray-100 opacity-40 right-0 peer-checked:hidden">Color</div>
        <div class="mb-auto p-2 bg-gray-100 opacity-40 left-0 hidden peer-checked:block">Back</div>
        <div class="flex-col bg-white border border-gray-400 p-2 w-40 h-screen hidden peer-checked:flex">
          <div class="text-sm pb-2 font-bold">Color Reference</div>
          <ul class="overflow-auto">
            <li v-for="color of colorClass" :key="color.id" class="flex flex-row items-center text-xs">
              <div v-bind:class="[color.color]" class="w-6 h-6 mr-2 border border-gray-400 bg-inherit"></div>
              <p>{{ color.color }}</p>
            </li>
          </ul>
        </div>
      </label>
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
        {id:1, color:'-transparent'},
        {id:2, color:'-current'},
        {id:3, color:'-black'},
        {id:4, color:'-white'},
        {id:5, color:'-gray-50'},
        {id:6, color:'-gray-100'},
        {id:7, color:'-gray-200'},
        {id:8, color:'-gray-300'},
        {id:9, color:'-gray-400'},
        {id:10, color:'-gray-500'},
        {id:11, color:'-gray-600'},
        {id:12, color:'-gray-700'},
        {id:13, color:'-gray-800'},
        {id:14, color:'-gray-900'},
        {id:15, color:'-red-50'},
        {id:16, color:'-red-100'},
        {id:17, color:'-red-200'},
        {id:18, color:'-red-300'},
        {id:19, color:'-red-400'},
        {id:20, color:'-red-500'},
        {id:21, color:'-red-600'},
        {id:22, color:'-red-700'},
        {id:23, color:'-red-800'},
        {id:24, color:'-red-900'},
        {id:25, color:'-yellow-50'},
        {id:26, color:'-yellow-100'},
        {id:27, color:'-yellow-200'},
        {id:28, color:'-yellow-300'},
        {id:29, color:'-yellow-400'},
        {id:30, color:'-yellow-500'},
        {id:31, color:'-yellow-600'},
        {id:32, color:'-yellow-700'},
        {id:33, color:'-yellow-800'},
        {id:34, color:'-yellow-900'},
        {id:35, color:'-green-50'},
        {id:36, color:'-green-100'},
        {id:37, color:'-green-200'},
        {id:38, color:'-green-300'},
        {id:39, color:'-green-400'},
        {id:40, color:'-green-500'},
        {id:41, color:'-green-600'},
        {id:42, color:'-green-700'},
        {id:43, color:'-green-800'},
        {id:44, color:'-green-900'},
        {id:45, color:'-blue-50'},
        {id:46, color:'-blue-100'},
        {id:47, color:'-blue-200'},
        {id:48, color:'-blue-300'},
        {id:49, color:'-blue-400'},
        {id:50, color:'-blue-500'},
        {id:51, color:'-blue-600'},
        {id:52, color:'-blue-700'},
        {id:53, color:'-blue-800'},
        {id:54, color:'-blue-900'},
        {id:55, color:'-indigo-50'},
        {id:56, color:'-indigo-100'},
        {id:57, color:'-indigo-200'},
        {id:58, color:'-indigo-300'},
        {id:59, color:'-indigo-400'},
        {id:60, color:'-indigo-500'},
        {id:61, color:'-indigo-600'},
        {id:62, color:'-indigo-700'},
        {id:63, color:'-indigo-800'},
        {id:64, color:'-indigo-900'},
        {id:65, color:'-purple-50'},
        {id:66, color:'-purple-100'},
        {id:67, color:'-purple-200'},
        {id:68, color:'-purple-300'},
        {id:69, color:'-purple-400'},
        {id:70, color:'-purple-500'},
        {id:71, color:'-purple-600'},
        {id:72, color:'-purple-700'},
        {id:73, color:'-purple-800'},
        {id:74, color:'-purple-900'},
        {id:75, color:'-pink-50'},
        {id:76, color:'-pink-100'},
        {id:77, color:'-pink-200'},
        {id:78, color:'-pink-300'},
        {id:79, color:'-pink-400'},
        {id:80, color:'-pink-500'},
        {id:81, color:'-pink-600'},
        {id:82, color:'-pink-700'},
        {id:83, color:'-pink-800'},
        {id:84, color:'-pink-900'}
      ]
    }
  },
}
</script>