export default async function useShowBlog() {
  const showBlog = ref(false);

  const { data } = await useAsyncData("show-blog-posts", () => queryContent("/blog").find());

  showBlog.value = data.value.length > 0;

  return { showBlog };
}
