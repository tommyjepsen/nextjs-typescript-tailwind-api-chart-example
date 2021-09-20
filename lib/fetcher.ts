const fetcher = (url) => fetch(url).then((res) => res.json());

export const URL = "http://localhost:3000/api/"; //https://nextjs-typescript-tailwind-api-chart-example.vercel.app/api/v1/chart
export const URL_CHART = "v1/chart";

export default fetcher;
