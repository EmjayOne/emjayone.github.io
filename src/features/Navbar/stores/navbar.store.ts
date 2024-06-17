import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbarStore", () => {
  const mobileNav = ref(false);

  const setMobileNavToTrue = () => {
    mobileNav.value = true;
  };

  const setMobileNavToFalse = () => {
    mobileNav.value = false;
  };

  return {
    mobileNav,
    setMobileNavToTrue,
    setMobileNavToFalse,
  };
});
