(function($) {
	$(function() {
	var myChart = echarts.init(document.getElementById('main'));
	var	option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['昨天', '今天']
			},

			calculable: true,
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
					name: '昨天',
					type: 'line',
					stack: '总量',
					data: [120, 132, 101, 134, 90, 230, 210]
				}, {
					name: '今天',
					type: 'line',
					stack: '总量',
					data: [220, 182, 191, 234, 290, 330, 310]
				}

			]
		};
		myChart.setOption(option);
	})
})(jQuery)