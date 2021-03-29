import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Page() {
	const [chart, setChart] = useState([]);
	const [chartMax, setChartMax] = useState(0);

	useEffect(() => {
		//Local URL: http://localhost:3000/api/v1/chart
		fetch("https://nextjs-typescript-tailwind-api-chart-example.vercel.app/api/v1/chart")
			.then((response) => {
				response.json().then((data) => {
					console.log("data", data);
					setChart(data || []);

					var maxHeight = 0;
					for (let i = 0; i < data.length; i++) {
						if (data[i].count > maxHeight) {
							maxHeight = data[i].count;
						}
					}

					setChartMax(maxHeight);
				});
			})
			.then((data) => console.log(data));
	}, []);

	return (
		<Layout>
			<div className="flex w-full items-center flex-col">
				<h1 className="w-full flex items-start text-lg text-bold pb-20">
					Home
				</h1>
				{chart && (
					<div className="flex flex-col bg-gray-50 rounded h-96 p-10 max-w-full overflow-x-auto">
						<div className="pb-6 pl-3">
							<p>Monthly chart example</p>
						</div>

						<div className="flex flex-row bg-gray-50 rounded h-full max-w-full overflow-x-auto">
							{chart.map((item) => (
								<div className="flex flex-col justify-center items-center mx-3 h-full w-16 p-0">
									<div className="flex flex-col justify-end items-end rounded bg-gray-100 h-5/6 w-16 p-0">
										<div
											style={{ height: (item.count / chartMax) * 100 + "%" }}
											className="flex justify-center items-center rounded bg-yellow-300 min-w-full h-10 text-sm"
										>
											{item.count || 0}%
										</div>
									</div>
									<label className="flex justify-center items-center h-1/6">
										{item.name || ""}
									</label>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}
