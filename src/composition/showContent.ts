import { ref } from "vue";

export function useShowContent() {
  const isVisible = ref(false);

  const onVisible = () => {
    isVisible.value = true;
  };

  const offVisible = () => {
    isVisible.value = false;
  };

  return { isVisible, onVisible, offVisible };
}
