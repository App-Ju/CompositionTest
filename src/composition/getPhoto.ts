import { ref, onMounted } from "vue";
import { getPhoto } from "@/api/unsplashAPI";

export function useGetPhoto(photoName: string) {
  const requestPhoto = ref("");

  async function request(query: string) {
    try {
      const resultRequest = await getPhoto(query);
      requestPhoto.value = resultRequest.data.results[0].urls.regular;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    request(photoName);
  });

  return { requestPhoto };
}
