import Vue from 'vue';
import './components/hkcinematab';
import "./components/floor-plan/floor-plan";
import './components/seat/seat'

new Vue({
	el: '#app',
	data: {
		message: 'Hello world!',
		header: 'Cinema WTF',
		plan: {
		  "screenPos": "bottom",
		  "rows": [
		    {
		      "name": "A",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": "3", "score": 0},
		        {"seat": "4", "score": 0},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "B",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "C",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "D",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "E",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "F",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "G",
		      "columns": [
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "H",
		      "columns": [
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "I",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "J",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "K",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "L",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "M",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "N",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "O",
		      "columns": [
		        {"seat": "1", "score": 0},
		        {"seat": "2", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "P",
		      "columns": [
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "15", "score": 0},
		        {"seat": "16", "score": 0},
		        {"seat": "17", "score": 0},
		        {"seat": "18", "score": 0},
		        {"seat": "19", "score": 0},
		        {"seat": "20", "score": 0}
		      ]
		    },
		    {
		      "name": "Q",
		      "columns": [
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": "disabled", "score": 0},
		        {"seat": "disabled", "score": 0},
		        {"seat": "disabled", "score": 0},
		        {"seat": "disabled", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    },
		    {
		      "name": "R",
		      "columns": [
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": "5", "score": 0},
		        {"seat": "6", "score": 0},
		        {"seat": "7", "score": 0},
		        {"seat": "8", "score": 0},
		        {"seat": "9", "score": 0},
		        {"seat": "10", "score": 0},
		        {"seat": "11", "score": 0},
		        {"seat": "12", "score": 0},
		        {"seat": "13", "score": 0},
		        {"seat": "14", "score": 0},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null},
		        {"seat": null, "score": null}
		      ]
		    }
		  ]
		},
		cinemaList: [
			{
				region: '港島',
				list: [
					'AMC 太古廣場', 'L Cinema', 'MCL JP', 'MCL 康怡戲院', 'MCL 海怡戲院', 'MCL 皇室戲院', 'UA Cine Times', 'UA 銀河影院 Director\'s Club',
					'新寶 總統戲院', '百老匯 PALACE ifc', '百老匯 數碼港'
				]
			},
			{
				region: '九龍',
				list: [
					'Cinema City 朗豪坊', 'FESTIVAL GRAND CINEMA ', 'MCL 德福戲院', 'The Grand Cinema', 'UA Cine Moko', 'UA Cine Moko IMAX',
					'UA iSQUARE', 'UA iSQUARE IMAX', 'UA iSQUARE 鳳凰影院', 'UA MegaBox', 'UA MegaBox BEA IMAX',
					'嘉禾 the sky', '嘉禾 海運戲院', '嘉禾 黃埔', '寶石戲院', '影藝戲院', '新寶 新寶戲院', '新寶 豪華戲院', '星影匯', '百老匯 PALACE apm',
					'百老匯 The ONE', '百老匯 旺角', '百老匯 荷里活', '百老匯電影中心'
				]

			},
			{
				region: '新界',
				list: [
					'MCL新都城戲院', 'MCL粉嶺戲院', 'STAR Cinema', 'UA 屯門市廣場',
					'UA 機場IMAX', '元朗戲院', '嘉禾 粉嶺', '嘉禾 荃新天地', '嘉禾 青衣', '巴黎倫敦紐約米蘭', '新寶 凱都', '百老匯 嘉湖銀座', '百老匯 荃灣',
					'百老匯 葵芳', '馬鞍山戲院'
				]
			},

		],
	}
});
