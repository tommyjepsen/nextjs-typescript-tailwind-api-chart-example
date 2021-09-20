const fetcher = (url) => fetch(url).then((res) => res.json());

// export const URL = "http://localhost:3000/api/";
export const URL = "https://nextjs-typescript-tailwind-api-chart-example.vercel.app/api/";
export const URL_CHART = "v1/chart";

export default fetcher;
