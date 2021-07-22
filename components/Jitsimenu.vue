<template>
    <div>
      <div class="ml-2 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 class="pl-6 text-xl font-bold mb-4">Login Details</h2>
      </div>
      <div class = "p-1 m-1 gap-3 space-3">
        <form @submit.prevent>
            <div class="relative h-20 pb-2 input-component mb-5 space-y-8">
                
                <label for="name" class="absolute left-2 transition-all bg-white px-1">
                Name
                </label>
                <input 
                name="name"
                id="username"
                minlength="1"
                maxlength="50"
                type="text"
                placeholder="ชื่อ"
                v-model="name"
                
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-300 focus:ring-2">
                
            </div>
            <div class="relative h-20 pb-2 input-component mb-5 space-y-8">
                <label for="room" class="absolute left-2 transition-all bg-white px-1">
                    Room
                    </label>
                    <input 
                    name="room"
                    id="roomname"
                    minlength="1"
                    maxlength="40"
                    type="text"
                    placeholder="/ken/testroom"
                    v-model="room"
                    
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-300 focus:ring-2">
            </div>
            <button @click="onSubmited" class="py-6 px-20 mx-auto max-w-md rounded-xl shadow-md bg-red-400 flex items-center">Next</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  computed:{
    name:{
      get () {
        return this.$store.state.name
      },
      set(value){
        this.$store.commit('setName',value)
      }
    },
    room:{
      get () {
        return this.$store.state.room
      },
      set(value){
        this.$store.commit('setRoom',value)
      }
    }
  },
  methods:{
      onSubmited(){
        var data = {
          name:this.$store.state.name,
          room:this.$store.state.room,
        }

        console.log(data)
        //show the entered data in console

        //Link to next page
        this.$router.push('/videocall');
      }
    }
}
</script>
