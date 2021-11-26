let testdata = 
[
	{
		"id" : 1001,
		"name" : "御魂鎮めし、清浄なる神楽",
		"rare" : "ssr",
		"character" : "博麗霊夢",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2440,4064,5506],//em,co,ro
			"min_st" : [475,1011,1487],//em,co,ro
			"burst1" : //ダメージ、回復　スコアアップ、無敵、コンボ継続の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : //damage, heal, score, invinc, combo
			{
				"cat" : "combo",
				"num" : [4,6,8] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "judge",
				"num" : [[6,42,3],[6,52,4.2],[6,62,5.4]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [35,37,40]
			}
		}
	},
	{
		"id" : 0,
		"name" : null,
		"rare" : null,
		"character" : null,
		"attr" : null,
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [0,0,0],
			"min_st" : [0,0,0],
			"burst1" : null,
			"burst2" : null,
			"effect" : null,
			"odekake" : null
		}
	},
];
const new_data = 
{
	"id" : 1002,
	"name" : "幻想の結界・安寧",
	"rare" : "ssr",
	"character" : "博麗霊夢",
	"attr" : "co",
	"release_date" : "2021/08/03",
	"status" : 
	{
		"max_st" : [2309,5506,5207],//em,co,ro
		"min_st" : [393,1352,1262],//em,co,ro
		"burst1" : //ダメージ、回復　スコアアップ、無敵、コンボ継続の順
		{
			"cat" : "heal",
			"num" : [60,65,70] //レベル3での値
		},
		"burst2" : //damage, heal, score, invinc, combo
		{
			"cat" : "combo",
			"num" : [4,6,8] //レベル3での値
		},
		"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
		{
			"cat" : "judge",
			"num" : [[5,41,2.5],[5,51,3.5],[5,61,4.5]]
		},
		"odekake" :
		{
			"cat" : "force",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
			"num" : [30,32,35]
		}
	}
};

let testtext = '[{"id":1001,"name":"御魂鎮めし、清浄なる神楽","rare":"ssr","character":"博麗霊夢","attr":"ro","release_date":"2021/08/03","status":{"max_st":[2440,4064,5506],"min_st":[475,1011,1487],"burst1":{"cat":"heal","num":[60,65,70]},"burst2":{"cat":"combo","num":[4,6,8]},"effect":{"cat":"judge","num":[[6,42,3],[6,52,4.2],[6,62,5.4]]},"odekake":{"cat":"drop","num":[35,37,40]}}},{"id":0,"name":null,"rare":null,"character":null,"attr":null,"release_date":"2021/08/03","status":{"max_st":[0,0,0],"min_st":[0,0,0],"burst1":null,"burst2":null,"effect":null,"odekake":null}}]';