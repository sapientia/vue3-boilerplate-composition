import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: "TestName",
    email:"TestEmail",
  })

  const website = computed(() =>
  user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
  )

  function changeName(newName:string) {
    user.value.name = newName;
  }

  return { user,website,changeName  }
})  
