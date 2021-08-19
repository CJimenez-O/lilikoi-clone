const data = {
	labels: [
		"TV",
		"SEO",
		"Pay For Performance",
		"Google PPC",
		"Radio",
		"Facebook",
		"Instagram",
		"TV Production",
		"Website",
		"Nextdoor",
		"Social Media",
		"Yelp",
	],
	datasets: [
		{
			backgroundColor: [
				"rgba(156,144,197,0.75)",
				"rgba(87,143,156,0.5)",
				"rgba(202,133,41,0.5)",
				"rgba(46,189,188,0.5)",
				"rgba(246,196,20,0.5)",
				"rgba(24,71,155,0.5)",
				"rgba(184,64,151,0.5)",
				"rgba(91,69,92,0.7))",
				"rgba(77,169,185,0.5)",
				"rgba(33,170,52,0.5)",
				"rgba(246,196,20,0.5)",
				"rgba(208,18,18,0.5)",
			],
			borderColor: "#f5f4f4",
			data: [8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3],
			hoverOffset: 4,
			borderWidth: 1,
		},
	],
};

const config = {
	type: "pie",
	data,
	options: {
		plugins: {
			legend: {
				display: false,
			},
		},
	},
};

var myChart = new Chart(document.getElementById("myChart"), config);
