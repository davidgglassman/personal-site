export default function useFormattedDateTime(dateTimeString) {
  const date = ref("");
  const time = ref("");

  const formatDateTime = () => {
    let dt = new Date(dateTimeString);

    // Format date as MM-DD-YYYY with leading zeros for single-digit months and days
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day = dt.getDate().toString().padStart(2, "0");
    let year = dt.getFullYear();
    let formattedDate = `${month}-${day}-${year}`;
    date.value = formattedDate;

    // Format time as 12-hour time with AM/PM
    let hours = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
    let minutes = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
    let ampm = dt.getHours() >= 12 ? "PM" : "AM";
    let formattedTime = `${hours}:${minutes} ${ampm}`;
    time.value = formattedTime;
  };

  formatDateTime();

  return { date, time };
}
