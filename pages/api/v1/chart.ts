export default function chart(req, res) {
	var chart = [
		{
			id: 1,
			name: "Dec",
			count: 23,
		},
		{
			id: 2,
			name: "Feb",
			count: 53,
		},
		{
			id: 3,
			name: "Mar",
			count: 98,
		},
		{
			id: 4,
			name: "Apr",
			count: 32,
		},
		{
			id: 5,
			name: "May",
			count: 64,
		},
		{
			id: 6,
			name: "June",
			count: 86,
		},
		{
			id: 7,
			name: "July",
			count: 15,
		},
		{
			id: 8,
			name: "Aug",
			count: 12,
		},
		{
			id: 9,
			name: "Sep",
			count: 95,
		},
		{
			id: 10,
			name: "Oct",
			count: 75,
		},
		{
			id: 11,
			name: "Nov",
			count: 32,
		},
		{
			id: 12,
			name: "Dec",
			count: 52,
		},
	];
	res.status(200).json(chart);
}
