import { ref } from "vue";

export function useShowContent() {
  const isVisible = ref(false);

  const toggleVisible = () => {
    isVisible.value = !isVisible.value;
  };

  return { isVisible, toggleVisible };
}
