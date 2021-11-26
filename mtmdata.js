const mtmdata = 
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
	},
	{
		"id" : 1003,
		"name" : "禁呪の詠唱、燦爛",
		"rare" : "ssr",
		"character" : "霧雨魔理沙",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [5207,2309,5506],//em,co,ro
			"min_st" : [1262,393,1352],//em,co,ro
			"burst1" : //ダメージ、回復　スコアアップ、無敵、コンボ継続の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : //damage, heal, score, invinc, combo
			{
				"cat" : "invinc",
				"num" : [4,6,8] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "heal",
				"num" : [[6,26,3,3],[6,31,3.3,3],[6,36,3.6,4]]
			},
			"odekake" :
			{
				"cat" : "force",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [30,32,35]
			}
		}
	},
	{
		"id" : 1005,
		"name" : "逢魔刻、ふたり",
		"rare" : "ssr",
		"character" : "フランドール・スカーレット",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2802,3302,6908],//em,co,ro
			"min_st" : [541,691,1772],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[5,41,2.5,22],[5,51,3.5,23],[5,61,4.5,25]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [35,37,40]
			}
		}
	},
	{
		"id" : 1008,
		"name" : "ぜったいにとけない！",
		"rare" : "ssr",
		"character" : "チルノ",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [3302,2802,6908],//em,co,ro
			"min_st" : [691,541,1772],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[7,43,3.5,22],[7,53,4.9,23],[7,63,6.3,25]]
			},
			"odekake" :
			{
				"cat" : "bell",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [70,75,80]
			}
		}
	},
	{
		"id" : 1017,
		"name" : "ルナティック・ドリーマー",
		"rare" : "ssr",
		"character" : "宇佐見菫子",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2602,4406,6008],//em,co,ro
			"min_st" : [481,1022,1502],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "damage",
				"num" : [8,9,10] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[6,42,3,22],[6,52,4.2,23],[6,62,5.4,25]]
			},
			"odekake" :
			{
				"cat" : "time",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [16,17,18]
			}
		}
	},
	{
		"id" : 1018,
		"name" : "番頭神の過ごし方",
		"rare" : "ssr",
		"character" : "庭渡久侘歌",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2802,3302,6908],//em,co,ro
			"min_st" : [541,691,1772],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[6,42,3,22],[6,52,4.2,23],[6,62,5.4,25]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [35,37,40]
			}
		}
	},
	{
		"id" : 1028,
		"name" : "兎騒がせな月の姫",
		"rare" : "ssr",
		"character" : "蓬莱山輝夜",
		"attr" : "ro",
		"release_date" : "2021/09/10",
		"status" : 
		{
			"max_st" : [3302,2802,6908],//em,co,ro
			"min_st" : [691,541,1772],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[5,41,2.5,22],[5,51,3.5,23],[5,61,4.5,25]]
			},
			"odekake" :
			{
				"cat" : "bell",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [70,75,80]
			}
		}
	},
	{
		"id" : 1039,
		"name" : "遥か見渡すテレグノシス",
		"rare" : "ssr",
		"character" : "犬走椛",
		"attr" : "ro",
		"release_date" : "2021/10/29",
		"status" : 
		{
			"max_st" : [3302,2790,6920],//em,co,ro
			"min_st" : [691,537,1776],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "heal",
				"num" : [60,65,70] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[5,41,2.5,22],[5,51,3.5,23],[5,61,4.5,25]]
			},
			"odekake" :
			{
				"cat" : "bell",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [70,75,80]
			}
		}
	},
	{
		"id" : 1043,
		"name" : "粮を嘗したまひて",
		"rare" : "ssr",
		"character" : "博麗霊夢",
		"attr" : "ro",
		"release_date" : "2021/11/19",
		"status" : 
		{
			"max_st" : [2984,4740,6203],//em,co,ro
			"min_st" : [595,1122,1561],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "damage",
				"num" : [8,9,10] //レベル3での値
			},
			"burst2" : 
			{
				"cat" : "score",
				"num" : [[4,60],[6,65],[8,70]] //レベル3での値
			},
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[5,41,2.5,22],[5,51,3.5,23],[5,61,4.5,25]]
			},
			"odekake" :
			{
				"cat" : "piece",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [25,27,30]
			}
		}
	},
	{
		"id" : 2017,
		"name" : "わりと困ったちゃん",
		"rare" : "sr",
		"character" : "八雲紫",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2806,2382,5868],//em,co,ro
			"min_st" : [645,506,1656],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "score",
				"num" : [[4,40],[6,45],[8,50]] //レベル3での値
			},
			"burst2" : null,
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[8,43,4,17],[8,53,5.6,18],[8,63,7.2,20]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [25,27,30]
			}
		}
	},
	{
		"id" : 2022,
		"name" : "ポルターガイスト夜想曲 嬰ハ短調",
		"rare" : "sr",
		"character" : "ルナサ・プリズムリバー",
		"attr" : "ro",
		"release_date" : "2021/08/03",
		"status" : 
		{
			"max_st" : [2382,2806,5868],//em,co,ro
			"min_st" : [506,645,1656],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "score",
				"num" : [[4,40],[6,45],[8,50]] //レベル3での値
			},
			"burst2" : null,
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[6,42,3,17],[6,52,4.2,18],[6,62,5.4,20]]
			},
			"odekake" :
			{
				"cat" : "bell",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [50,55,60]
			}
		}
	},
	{
		"id" : 2028,
		"name" : "水配りの試練",
		"rare" : "sr",
		"character" : "庭渡久侘歌",
		"attr" : "ro",
		"release_date" : "2021/08/14",
		"status" : 
		{
			"max_st" : [2382,2806,5868],//em,co,ro
			"min_st" : [506,645,1656],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "score",
				"num" : [[4,40],[6,45],[8,50]] //レベル3での値
			},
			"burst2" : null,
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[7,43,3.5,17],[7,53,4.9,18],[7,63,6.3,20]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : [25,27,30]
			}
		}
	},
	{
		"id" : 2036,
		"name" : "愉快な忘れ傘",
		"rare" : "sr",
		"character" : "多々良小傘",
		"attr" : "ro",
		"release_date" : "2021/09/04",
		"status" : 
		{
			"max_st" : [2382,2806,5868],//em,co,ro
			"min_st" : [506,645,1656],//em,co,ro
			"burst1" : //ダメージ(damage)、回復(heal)　スコアアップ(score)、無敵(invinc)、コンボ継続(combo)の順
			{
				"cat" : "score",
				"num" : [[4,40],[6,45],[8,50]] //レベル3での値
			},
			"burst2" : null,
			"effect" : //回復、スコアアップ、判定強化(judge)、無敵、コンボ継続の順
			{
				"cat" : "score",
				"num" : [[7,43,3.5,17],[7,53,4.9,18],[7,63,6.3,20]]
			},
			"odekake" :
			{
				"cat" : "drop",//戦力(force)、雫(drop)、鈴(bell)、ピース(piece)、時間(time)
				"num" : 30
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

