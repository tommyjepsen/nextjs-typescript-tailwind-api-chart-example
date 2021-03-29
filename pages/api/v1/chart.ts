// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function chart(req, res) {
	var chart = [
		{
			name: "Dec",
			count: 23,
		},
		{
			name: "Feb",
			count: 53,
		},
		{
			name: "Mar",
			count: 98,
		},
		{
			name: "Apr",
			count: 32,
		},
		{
			name: "May",
			count: 64,
		},
		{
			name: "June",
			count: 86,
		},
		{
			name: "July",
			count: 15,
		},
		{
			name: "Aug",
			count: 12,
		},
		{
			name: "Sep",
			count: 95,
		},
		{
			name: "Oct",
			count: 75,
		},
		{
			name: "Nov",
			count: 32,
		},
		{
			name: "Dec",
			count: 52,
		},
	];
	res.status(200).json(chart);
}
