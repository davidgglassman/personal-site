export const getBooks = async () => {
  if (import.meta.server) {
    return { data: null, error: null };
  }

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

export const getCourses = async () => {
  if (import.meta.server) {
    return { data: null, error: null };
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/davidgglassman/personal-site-data/contents/courses.json",
    );

    const data = await response.json();

    if (data.content) {
      const decoded = atob(data.content);

      return { data: JSON.parse(decoded) as CourseData, error: null };
    }

    return { data: null, error: "No content found" };
  } catch (error) {
    console.error("Error fetching books:", error);

    return { data: null, error };
  }
};

export const getExperience = async () => {
  if (import.meta.server) {
    return { data: null, error: null };
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/davidgglassman/personal-site-data/contents/experience.json",
    );

    const data = await response.json();

    if (data.content) {
      const decoded = atob(data.content);

      return { data: JSON.parse(decoded) as ExperienceData, error: null };
    }

    return { data: null, error: "No content found" };
  } catch (error) {
    console.error("Error fetching experience:", error);

    return { data: null, error };
  }
};
