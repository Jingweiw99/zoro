import { defineStore } from 'pinia'

const useNavbar = defineStore('navbar', {
  state: () => {
    return {
      isCollapse: false,
    }
  },
})

export default useNavbar
