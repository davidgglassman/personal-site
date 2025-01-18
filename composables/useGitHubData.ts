export const getBooks = async () => {
  if (import.meta.server) {
    return { data: null, error: null };
  }

  //console.log("Fetching books from:", import.meta.client ? "client" : "server");

  try {
    const response = await fetch(
      "https://api.github.com/repos/davidgglassman/personal-site-data/contents/books.json",
    );
    const data = await response.json();

    if (data.content) {
      const decoded = atob(data.content);
      return { data: JSON.parse(decoded) as BookData, error: null };
    }

    return { data: null, error: "No content found" };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { data: null, error };
  }
};
