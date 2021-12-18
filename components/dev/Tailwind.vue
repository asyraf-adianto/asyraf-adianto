<template>
    <div class="fixed top-0 right-0 flex flex-row">
        <div class="flex flex-col z-20">
            <label for="toggleColor" class="cursor-pointer w-fit mb-auto p-2 bg-gray-100 opacity-40 right-0 peer-checked:hidden">Color</label>
            <label for="toggleX" class="cursor-pointer w-fit mb-auto p-2 bg-gray-100 opacity-40 right-0 peer-checked:hidden">X</label>
        </div>  
        <div class="z-30"> 
            <label for="toggleColor" class="fixed top-0 cursor-pointer flex flex-row right-0">
                <input id="toggleColor" type="checkbox" class="hidden peer"/>
                <div class="mb-auto p-2 bg-gray-100 opacity-40 left-0 hidden peer-checked:block">Back</div>
                <div class="flex-col bg-white border border-gray-400 p-2 w-40 h-screen hidden peer-checked:flex">
                    <div class="text-sm pb-2 font-bold">Color Reference</div>
                    <ul class="overflow-auto">
                    <li v-for="color of colorClass" :key="color.id" class="flex flex-row items-center text-xs">
                        <div v-bind:class="[color.color]" class="w-6 h-6 mr-2 border border-gray-400 bg-inherit"></div>
                        <p>{{ color.text }}</p>
                    </li>
                    </ul>
                </div>
            </label>
            <label for="toggleX" class="fixed top-0 cursor-pointer flex flex-row right-0">
                <input id="toggleX" type="checkbox" class="hidden peer"/>
                <div class="mb-auto p-2 bg-gray-100 opacity-40 left-0 hidden peer-checked:block">Back</div>
                <div class="flex-col bg-white border border-gray-400 p-2 w-40 h-screen hidden peer-checked:flex">
                    <div class="text-sm pb-2 font-bold">X Reference</div>
                    <ul class="overflow-auto">
                    </ul>
                </div>
            </label>    
        </div>
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
        {id:1, color:'bg-transparent', text:'-transparent'},
        {id:2, color:'bg-current', text:'-current'},
        {id:3, color:'bg-black', text:'-black'},
        {id:4, color:'bg-white', text:'-white'},
        {id:5, color:'bg-gray-50', text:'-gray-50'},
        {id:6, color:'bg-gray-100', text:'-gray-100'},
        {id:7, color:'bg-gray-200', text:'-gray-200'},
        {id:8, color:'bg-gray-300', text:'-gray-300'},
        {id:9, color:'bg-gray-400', text:'-gray-400'},
        {id:10, color:'bg-gray-500', text:'-gray-500'},
        {id:11, color:'bg-gray-600', text:'-gray-600'},
        {id:12, color:'bg-gray-700', text:'-gray-700'},
        {id:13, color:'bg-gray-800', text:'-gray-800'},
        {id:14, color:'bg-gray-900', text:'-gray-900'},
        {id:15, color:'bg-red-50', text:'-red-50'},
        {id:16, color:'bg-red-100', text:'-red-100'},
        {id:17, color:'bg-red-200', text:'-red-200'},
        {id:18, color:'bg-red-300', text:'-red-300'},
        {id:19, color:'bg-red-400', text:'-red-400'},
        {id:20, color:'bg-red-500', text:'-red-500'},
        {id:21, color:'bg-red-600', text:'-red-600'},
        {id:22, color:'bg-red-700', text:'-red-700'},
        {id:23, color:'bg-red-800', text:'-red-800'},
        {id:24, color:'bg-red-900', text:'-red-900'},
        {id:25, color:'bg-yellow-50', text:'-yellow-50'},
        {id:26, color:'bg-yellow-100', text:'-yellow-100'},
        {id:27, color:'bg-yellow-200', text:'-yellow-200'},
        {id:28, color:'bg-yellow-300', text:'-yellow-300'},
        {id:29, color:'bg-yellow-400', text:'-yellow-400'},
        {id:30, color:'bg-yellow-500', text:'-yellow-500'},
        {id:31, color:'bg-yellow-600', text:'-yellow-600'},
        {id:32, color:'bg-yellow-700', text:'-yellow-700'},
        {id:33, color:'bg-yellow-800', text:'-yellow-800'},
        {id:34, color:'bg-yellow-900', text:'-yellow-900'},
        {id:35, color:'bg-green-50', text:'-green-50'},
        {id:36, color:'bg-green-100', text:'-green-100'},
        {id:37, color:'bg-green-200', text:'-green-200'},
        {id:38, color:'bg-green-300', text:'-green-300'},
        {id:39, color:'bg-green-400', text:'-green-400'},
        {id:40, color:'bg-green-500', text:'-green-500'},
        {id:41, color:'bg-green-600', text:'-green-600'},
        {id:42, color:'bg-green-700', text:'-green-700'},
        {id:43, color:'bg-green-800', text:'-green-800'},
        {id:44, color:'bg-green-900', text:'-green-900'},
        {id:45, color:'bg-blue-50', text:'-blue-50'},
        {id:46, color:'bg-blue-100', text:'-blue-100'},
        {id:47, color:'bg-blue-200', text:'-blue-200'},
        {id:48, color:'bg-blue-300', text:'-blue-300'},
        {id:49, color:'bg-blue-400', text:'-blue-400'},
        {id:50, color:'bg-blue-500', text:'-blue-500'},
        {id:51, color:'bg-blue-600', text:'-blue-600'},
        {id:52, color:'bg-blue-700', text:'-blue-700'},
        {id:53, color:'bg-blue-800', text:'-blue-800'},
        {id:54, color:'bg-blue-900', text:'-blue-900'},
        {id:55, color:'bg-indigo-50', text:'-indigo-50'},
        {id:56, color:'bg-indigo-100', text:'-indigo-100'},
        {id:57, color:'bg-indigo-200', text:'-indigo-200'},
        {id:58, color:'bg-indigo-300', text:'-indigo-300'},
        {id:59, color:'bg-indigo-400', text:'-indigo-400'},
        {id:60, color:'bg-indigo-500', text:'-indigo-500'},
        {id:61, color:'bg-indigo-600', text:'-indigo-600'},
        {id:62, color:'bg-indigo-700', text:'-indigo-700'},
        {id:63, color:'bg-indigo-800', text:'-indigo-800'},
        {id:64, color:'bg-indigo-900', text:'-indigo-900'},
        {id:65, color:'bg-purple-50', text:'-purple-50'},
        {id:66, color:'bg-purple-100', text:'-purple-100'},
        {id:67, color:'bg-purple-200', text:'-purple-200'},
        {id:68, color:'bg-purple-300', text:'-purple-300'},
        {id:69, color:'bg-purple-400', text:'-purple-400'},
        {id:70, color:'bg-purple-500', text:'-purple-500'},
        {id:71, color:'bg-purple-600', text:'-purple-600'},
        {id:72, color:'bg-purple-700', text:'-purple-700'},
        {id:73, color:'bg-purple-800', text:'-purple-800'},
        {id:74, color:'bg-purple-900', text:'-purple-900'},
        {id:75, color:'bg-pink-50', text:'-pink-50'},
        {id:76, color:'bg-pink-100', text:'-pink-100'},
        {id:77, color:'bg-pink-200', text:'-pink-200'},
        {id:78, color:'bg-pink-300', text:'-pink-300'},
        {id:79, color:'bg-pink-400', text:'-pink-400'},
        {id:80, color:'bg-pink-500', text:'-pink-500'},
        {id:81, color:'bg-pink-600', text:'-pink-600'},
        {id:82, color:'bg-pink-700', text:'-pink-700'},
        {id:83, color:'bg-pink-800', text:'-pink-800'},
        {id:84, color:'bg-pink-900', text:'-pink-900'}
      ]
    }
  },
}
</script>