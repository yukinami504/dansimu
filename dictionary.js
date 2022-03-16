//静的なので辞書オブジェクトはいらない、はず

const chara_name = {
	"博麗霊夢" : {"id" : 1, "name" : "霊夢"},
	"霧雨魔理沙" : {"id" : 2, "name" : "魔理沙"},
	"八雲紫" : {"id" : 3, "name" : "紫"},
	"高麗野あうん" : {"id" : 4, "name" : "あうん"},
	"パチュリー・ノーレッジ" : {"id" : 5, "name" : "パチュリー"},
	"十六夜咲夜" : {"id" : 6, "name" : "咲夜"},
	"レミリア・スカーレット" : {"id" : 7, "name" : "レミリア"},
	"宇佐見菫子" : {"id" : 8, "name" : "董子"},
	"古明地こいし" : {"id" : 9, "name" : "こいし"},
	"アリス・マーガトロイド" : {"id" : 10, "name" : "アリス"},
	"古明地さとり" : {"id" : 11, "name" : "さとり"},
	"チルノ" : {"id" : 12, "name" : "チルノ"},
	"フランドール・スカーレット" : {"id" : 13, "name" : "フラン"},
	"上白沢慧音" : {"id" : 14, "name" : "慧音"},
	"魂魄妖夢" : {"id" : 15, "name" : "妖夢"},
	"因幡てゐ" : {"id" : 16, "name" : "てゐ"},
	"鈴仙・優曇華院・イナバ" : {"id" : 17, "name" : "鈴仙"},
	"蓬莱山輝夜" : {"id" : 18, "name" : "輝夜"},
	"河城にとり" : {"id" : 19, "name" : "にとり"},
	"射命丸文" : {"id" : 20, "name" : "文"},
	"東風谷早苗" : {"id" : 21, "name" : "早苗"},
	"村紗水蜜" : {"id" : 22, "name" : "村紗"},
	"聖白蓮" : {"id" : 23, "name" : "聖"},
	"豊聡耳神子" : {"id" : 24, "name" : "神子"},
	"庭渡久侘歌" : {"id" : 25, "name" : "久侘歌"},
	"鬼人正邪" : {"id" : 26, "name" : "正邪"},
	"少名針妙丸" : {"id" : 27, "name" : "針妙丸"},
	"ルーミア" : {"id" : 28, "name" : "ルーミア"},
	"ルナサ・プリズムリバー" : {"id" : 29, "name" : "ルナサ"},
	"メルラン・プリズムリバー" : {"id" : 30, "name" : "メルラン"},
	"リリカ・プリズムリバー" : {"id" : 31, "name" : "リリカ"},
	"リグル・ナイトバグ" : {"id" : 32, "name" : "リグル"},
	"伊吹萃香" : {"id" : 33, "name" : "萃香"},
	"洩矢諏訪子" : {"id" : 34, "name" : "諏訪子"},
	"比那名居天子" : {"id" : 35, "name" : "天子"},
	"星熊勇儀" : {"id" : 36, "name" : "勇儀"},
	"火焔猫燐" : {"id" : 37, "name" : "お燐"},
	"物部布都" : {"id" : 38, "name" : "布都"},
	"二ツ岩マミゾウ" : {"id" : 39, "name" : "マミゾウ"},
	"秦こころ" : {"id" : 40, "name" : "こころ"},
	"赤蛮奇" : {"id" : 41, "name" : "蛮奇"},
	"依神紫苑" : {"id" : 42, "name" : "紫苑"},
	"丁礼田舞" : {"id" : 43, "name" : "舞"},
	"爾子田里乃" : {"id" : 44, "name" : "里乃"},
	"杖刀偶磨弓" : {"id" : 45, "name" : "磨弓"},
	"多々良小傘" : {"id" : 46, "name" : "小傘"},
	"西行寺幽々子" : {"id" : 47, "name" : "幽々子"},
	"封獣ぬえ" : {"id" : 48, "name" : "ぬえ"},
	"八意永琳" : {"id" : 49, "name" : "永琳"},
	"姫海棠はたて" : {"id" : 50, "name" : "はたて"},
	"藤原妹紅" : {"id" : 51, "name" : "妹紅"},
	"風見幽香" : {"id" : 52, "name" : "幽香"},
	"クラウンピース" : {"id" : 53, "name" : "ピース"},
	"犬走椛" : {"id" : 54, "name" : "椛"},
	"秋穣子" : {"id" : 55, "name" : "穣子"},
	"秋静葉" : {"id" : 56, "name" : "静葉"},
	"ヘカーティア・ラピスラズリ" : {"id" : 57, "name" : "ヘカテ"},
	"紅美鈴" : {"id" : 58, "name" : "美鈴"},
	"摩多羅隠岐奈" : {"id" : 59, "name" : "隠岐奈"},
	"寅丸星" : {"id" : 60, "name" : "星"},
	"ナズーリン" : {"id" : 61, "name" : "ナズ"},
	"橙" : {"id" : 62, "name" : "橙"},
	"依神女苑" : {"id" : 63, "name" : "女苑"},
	"茨木華扇" : {"id" : 64, "name" : "華扇"},
	"水橋パルスィ" : {"id" : 65, "name" : "パルスィ"},
	"鍵山雛" : {"id" : 66, "name" : "雛"},
	"リリーホワイト" : {"id" : 67, "name" : "リリー"},
}

const music_name = {
	"幻想に咲いた花" : {"id" : "theme1", "attr" : "all"},
	"幽霊楽団　～ Phantom Ensemble" : {"id" : "yurei", "attr" : "all"},
	"Bad Apple!! feat.nomico" : {"id" : "bapple", "attr" : "all"},
	"チルノのパーフェクトさんすう教室" : {"id" : "cirno", "attr" : "ro"},
	"マツヨイナイトバグ" : {"id" : "mtyi", "attr" : "ro"},
	"幻想郷ふしぎ大発見V2" : {"id" : "fsgv2", "attr" : "ro"},
	"明星ロケット" : {"id" : "akbs", "attr" : "em"},
	"Sweets Time" : {"id" : "sweets", "attr" : "ro"},
	"月に叢雲華に風" : {"id" : "tukini", "attr" : "em"},
	"紅星ミゼラブル～廃憶編" : {"id" : "kousei", "attr" : "ro"},
	"フラグメンツ" : {"id" : "fragm", "attr" : "em"},
	"ゆけむり魂温泉Ⅱ" : {"id" : "tmonsn", "attr" : "ro"},
	"有頂天ドリーマーズ" : {"id" : "uchou", "attr" : "em"},
	"HANIPAGANDA" : {"id" : "hanipa", "attr" : "ro"},
	"嘘と慟哭" : {"id" : "liar", "attr" : "em"},
	"絡繰りドール" : {"id" : "doll", "attr" : "co"},
	"郷愁のロンド" : {"id" : "rondo", "attr" : "em"},
	"儚きもの人間" : {"id" : "hknkmn", "attr" : "co"},
	"黄金航路" : {"id" : "kouro", "attr" : "em"},
	"ひとつよがりの逃避行" : {"id" : "hitotu", "attr" : "em"},
	"下克上々" : {"id" : "gekoku", "attr" : "co"},
	"断罪は遍く人間の元に" : {"id" : "danzai", "attr" : "co"},
	"POKER FACE" : {"id" : "poker", "attr" : "co"},
	"Scream out!" : {"id" : "scream", "attr" : "co"},
	"レザマリでもつらくないっ！" : {"id" : "lazer", "attr" : "ro"},
	"ナイト・オブ・ナイツ" : {"id" : "knight", "attr" : "co"},
	"待チ人ハ来ズ。" : {"id" : "mtbt", "attr" : "em"},
	"Against, Perfect Cherry Blossom" : {"id" : "agnst", "attr" : "ro"},
	"Paranoia" : {"id" : "parano", "attr" : "co"},
	"SAMURAI GHOST GIRL, KILL! KILL!" : {"id" : "smrigg", "attr" : "em"},
	"Sadistic Love" : {"id" : "sadist", "attr" : "em"},
	"Help me, ERINNNNNN!!" : {"id" : "erin", "attr" : "ro"},
	"トランスダンスアナーキー" : {"id" : "trance", "attr" : "ro"},
	"The Karasu Wind" : {"id" : "karasu", "attr" : "em"},
	"drizzly rain" : {"id" : "drizz", "attr" : "ro"},
	"ウサテイ20XX" : {"id" : "usatei", "attr" : "ro"},
	"Lotus Love" : {"id" : "lotus", "attr" : "em"},
	"ソリッド" : {"id" : "solid", "attr" : "co"},
	"無生命サーフェス" : {"id" : "msimi", "attr" : "co"},
	"flanticnight" : {"id" : "flntic", "attr" : "em"},
	"フォールオブフォール" : {"id" : "fof", "attr" : "ro"},
	"far away" : {"id" : "far", "attr" : "co"},
	"神霊廟秋祭りっ！" : {"id" : "sinrei", "attr" : "em"},
	"聖徳伝説　～ True Administrator（深秘録Version）" : {"id" : "syoutk", "attr" : "co"},
	"巡るHarvest" : {"id" : "harvst", "attr" : "ro"},
	"響縁" : {"id" : "kyoen", "attr" : "ro"},
	"PanneDemonology" : {"id" : "panne", "attr" : "em"},
	"Christmas Bomb!!" : {"id" : "chrisb", "attr" : "co"},
	"エピクロスの虹はもう見えない" : {"id" : "epkrs", "attr" : "co"},
	"レイセン・オカルティア [東方深秘録 Re: Arrange]" : {"id" : "reisen", "attr" : "co"},
	"23145EASONS" : {"id" : "23145", "attr" : "em"},
	"あうんどばいみー" : {"id" : "aund", "attr" : "ro"},
	"あいつはイカサマをしている" : {"id" : "cheat", "attr" : "co"},
	"Unprivileged Access" : {"id" : "unpriv", "attr" : "co"},
	"Spring of Dreams" : {"id" : "sod", "attr" : "em"},
	"White Lotus…" : {"id" : "white", "attr" : "em"},
	"SEE YOU AGAIN!" : {"id" : "seeyou", "attr" : "ro"},
	"Starlight Dance Floor (D.M.K. edit)" : {"id" : "sdf", "attr" : "co"},
	"Ⓤチルノのパーフェクトさんすう教室" : {"id" : "cirno_u", "attr" : "ro"},
	"ファビュラス" : {"id" : "fabu", "attr" : "co"},
	"悪戯センセーション" : {"id" : "itasen", "attr" : "co"},
	"解けないように" : {"id" : "hodoke", "attr" : "all"},
	"ハルトマンの妖怪少女" : {"id" : "hrtmn", "attr" : "all"},
	"キング・オブ・ザ・説教" : {"id" : "sekkyo", "attr" : "em"},
	"愛き夜道 feat.ランコ(豚乙女),雨天決行" : {"id" : "ukiyo", "attr" : "em"},
	"ⓊScream out!" : {"id" : "scream_u", "attr" : "co"},
	"Ilias" : {"id" : "ilias", "attr" : "co"},
	"Rainy, rainy days" : {"id" : "rainy", "attr" : "em"},
	"ⓊParanoia" : {"id" : "parano_u", "attr" : "co"},
	"LOVE EAST" : {"id" : "lveast", "attr" : "ro"},
	"マリオネットメトロポリス" : {"id" : "marion", "attr" : "ro"},
	"Ⓤ明星ロケット" : {"id" : "akbs_u", "attr" : "em"},
	"さようなら。ありがとう。" : {"id" : "bye", "attr" : "co"},
	"地の色は黄色" : {"id" : "yellow", "attr" : "all"},
	"天使の腕試し" : {"id" : "angel", "attr" : "co"},
}