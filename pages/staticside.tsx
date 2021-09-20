import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { animated, config, Spring } from "react-spring";
import fetcher, { URL, URL_CHART } from "../lib/fetcher";
import { Chart } from "../lib/types/chart.type";

type Pros = {
    chart: Chart[];
};

export function Page({ chart }: Pros) {
    const [chartMax, setChartMax] = useState(0);

    useEffect(() => {
        let maxHeight = 0;
        for (const chartItem of chart) {
            if (chartItem.count > maxHeight) {
                maxHeight = chartItem.count;
            }
        }

        setChartMax(maxHeight);
    }, [chart]);

    return (
        <Layout>
            <div className="flex w-full items-center flex-col">
                <h1 className="w-full flex items-start text-lg text-bold pb-20">
                    Home
                </h1>

                {chart && chartMax != 0 && (
                    <div className="flex flex-col bg-gray-50 rounded h-96 p-10 max-w-full overflow-x-auto">
                        <div className="pb-6 pl-3">
                            <p>Monthly chart example</p>
                        </div>

                        <div className="flex flex-row bg-gray-50 rounded h-full max-w-full overflow-x-auto">
                            {chart.map((item, index) => (
                                <div
                                    className="flex flex-col justify-center items-center mx-3 h-full w-16 p-0"
                                    key={item.id}
                                >
                                    <div className="flex flex-col justify-end items-end rounded bg-gray-100 h-5/6 w-16 p-0">
                                        <Spring
                                            config={config.wobbly}
                                            delay={index * 100}
                                            from={{ opacity: 0, height: "0%" }}
                                            to={{
                                                opacity: 1,
                                                height:
                                                    (item.count / chartMax) *
                                                        100 +
                                                    "%",
                                            }}
                                        >
                                            {(props) => (
                                                <animated.div
                                                    style={{
                                                        ...props,
                                                    }}
                                                    className="flex justify-center items-center rounded bg-yellow-300 min-w-full h-10 text-sm"
                                                >
                                                    {item.count || 0}
                                                </animated.div>
                                            )}
                                        </Spring>
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

export async function getStaticProps() {
    const data = await fetcher(URL + URL_CHART);

    return {
        props: {
            chart: data,
        },
        revalidate: 10,
    };
}

export default Page;
