export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // This can be a mockup of an API call, for now, we can just resolve it immediately
      resolve("API response");
  });
}
