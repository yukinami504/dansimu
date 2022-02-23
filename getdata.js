function getMusicData()
{
	console.log("getmusic");
	const keydata = Object.keys(music_name);
	let select_all = document.getElementById("ms_all");
	let select_em = document.getElementById("ms_em");
	let select_co = document.getElementById("ms_co");
	let select_ro = document.getElementById("ms_ro");
	for(let j=0;j<keydata.length;j++)
	{
		let option = document.createElement("option");
		option.text = keydata[j];
		option.value = music_name[keydata[j]].id;
		switch(music_name[keydata[j]].attr)
		{
			case "all": select_all.appendChild(option); break;
			case "em": select_em.appendChild(option); break;
			case "co": select_co.appendChild(option); break;
			case "ro": select_ro.appendChild(option); break;
			default :
		}
	}
}

function getOtherData()
{
	console.log("getothers");
	for(i=1;i<=1;i++)
	{
		let select = document.getElementById("bn"+i);
		let max_bl = 1000;
		for(j=0;j<=max_bl;j+=25)
		{
			let option = document.createElement("option");
			option.text = "+"+((j<=500)?(j/100):(5.0+(j-500)*15/2500))+"%";
			option.value = ((j<=500)?(j):(500+(j-500)*15/25));
			if(j==500)option.selected = true;
			select.appendChild(option);
		}
	}
}

function concatMtmData()
{//最初にデータ統合
	mtmdata = mtmdata.concat(mtmdata_2);
}

function getMtmData()
{
	console.log("getmitama");
	//mtmdata_ssrとかmtmdata_srとかを作ってここで統合する？
	/*
		mtmdata:let, other:const
		const mtmdata_all = mtmdata_ssr.concat(mtmdata_sr,mtmdata_r,mtmdata_n);
		mtmdata = mtmdata_all;
		//もしくは
		mtmdata = mtmdata_ssr.concat(mtmdata_sr,mtmdata_r,mtmdata_n);
		
	*/
	const obj = mtmdata;
	
	for(i=1;i<=5;i++)
	{
		let select = document.getElementById("m"+i);
		while(select.length!=0)select.remove(0);
		for(let j in obj)
		{
			//データを取得
			//if(i==0)console.log(obj[j].id);
			//selectboxに追加
			let option = document.createElement("option");
			if(obj[j].character!=null)option.text = obj[j].rare.toUpperCase() + chara_name[obj[j].character].name + obj[j].attr.charAt(0).toUpperCase()+obj[j].attr.charAt(1) + " ["+obj[j].name+"]";
			else option.text = obj[j].character;
			option.value = obj[j].id;
			select.appendChild(option);
		}
		
		let slc_s = document.getElementById("s"+i);
		while(slc_s.length!=0)slc_s.remove(0);
		for(let k=0;k<10;k++)
		{
			//selectboxに追加
			let opt_s = document.createElement("option");
			opt_s.text = (k+1)+"";
			opt_s.value = k;
			slc_s.appendChild(opt_s);
		}
		
		let slc_l = document.getElementById("l"+i);
		while(slc_l.length!=0)slc_l.remove(0);
		let lv_arr = [1,2,20,30,40,60,80,100];
		for(let l=0;l<lv_arr.length;l++)
		{
			//selectboxに追加
			let opt_l = document.createElement("option");
			opt_l.text = lv_arr[l]+"";
			opt_l.value = lv_arr[l];
			if(l==lv_arr.length-1)opt_l.selected = true;
			slc_l.appendChild(opt_l);
		}
	}
	
}

function getHrnData()
{
	console.log("getheroine");
	for(i=1;i<=2;i++)
	{
		let select = document.getElementById("chr"+i);
		let ch_arr = Object.keys(chara_name);
		for(let j in ch_arr)
		{
			let option = document.createElement("option");
			option.text = ch_arr[j];
			option.value = chara_name[ch_arr[j]].id;
			select.appendChild(option);
		}
	}
	for(i=1;i<=2;i++)
	{
		let select = document.getElementById("lv"+i);
		//let lv_arr = new Array(100);
		//for(j=1;j<=100;j++)lv_arr[j-1]=j;
		
		for(j=1;j<=100;j++)
		{
			let option = document.createElement("option");
			option.text = j;
			option.value = j;
			if(j==100)option.selected = true;
			select.appendChild(option);
		}
	}
	for(i=1;i<=6;i++)
	{
		let select = document.getElementById("st"+i);
		let st_arr = [15,16,17,18,20];
		for(j=0;j<st_arr.length;j++)
		{
			let option = document.createElement("option");
			option.text = "+"+st_arr[j]+"%";
			option.value = st_arr[j];
			if(j==0)option.selected = true;
			select.appendChild(option);
		}
	}
	for(i=1;i<=2;i++)
	{
		let select = document.getElementById("sk"+i);
		let sk_arr = [
			"Em属性のミタマカードの、Emパワー+5%",
			"Co属性のミタマカードの、Coパワー+5%",
			"Ro属性のミタマカードの、Roパワー+5%",
			"3つの属性のミタマカードを編成している時、Em/Ro/Co/パワー+2%",
			"ヒロインと同じキャラのミタマカードの、Em/Ro/Co/パワー+3%",
			"Em属性のミタマカードの、カグラエフェクトの発動確率+5%",
			"Co属性のミタマカードの、カグラエフェクトの発動確率+5%",
			"Ro属性のミタマカードの、カグラエフェクトの発動確率+5%",
			"3つの属性のミタマカードを編成している時、カグラエフェクトの発動確率+2%",
			"なし"];
			
		for(j=0;j<sk_arr.length;j++)
		{
			let option = document.createElement("option");
			option.text = sk_arr[j];
			option.value = j;
			select.appendChild(option);
		}
	}
	
	
}

function getScoreData(score_id)
{
	console.log(score_id);
	var sc = document.createElement("script");
	sc.type = "text/javascript";
	sc.src = "./scores/" + score_id + ".js";
	var ele = document.getElementById("scores");
	ele.appendChild(sc);
	//document.head.appendChild(sc);
	
	console.log(sc);
	console.log(musicdata);
	//console.log(musicdata);
	
}

const hrnlv_force = [
	1.00,1.40,1.70,2.00,2.30,2.50,2.70,2.90,3.10,3.30,
	3.50,3.70,3.90,4.10,4.30,4.45,4.60,4.75,4.90,5.05,
	5.20,5.35,5.50,5.65,5.95,6.10,6.25,6.40,6.55,6.70,
	6.80,6.90,7.00,7.10,7.40,7.50,7.60,7.70,7.80,8.10,
	8.20,8.30,8.40,8.50,8.80,8.90,9.00,9.10,9.20,9.40,
	9.50,9.60,9.70,9.80,10.00,10.10,10.20,10.30,10.40,10.60,
	10.70,10.80,10.90,11.00,11.20,11.30,11.40,11.50,11.60,11.75,
	11.85,11.95,12.05,12.15,12.30,12.40,12.50,12.60,12.70,12.85,
	12.95,13.05,13.15,13.25,13.40,13.50,13.60,13.70,13.80,13.95,
	14.05,14.15,14.25,14.35,14.50,14.60,14.70,14.80,14.90,15.00
];

function setHrnData(hrnnum,hrnlv)
{
	//while(select_st1.length!=0)select_st1.remove(0);
	for(let i=(hrnnum*3-2);i<=(hrnnum*3);i++)
	{
		let select_hr = document.getElementById("st"+i);
		let st_arr = [15.0,16.0,17.0,18.0,20.0];
		if(hrnlv!=100){
			st_arr[0] = hrnlv_force[hrnlv-1];
			st_arr.length = 1;//配列の長さを切り詰める
		}
		
		while(select_hr.length!=0)select_hr.remove(0);
		for(j=0;j<st_arr.length;j++)
		{
			let option = document.createElement("option");
			option.text = "+"+st_arr[j]+"%";
			option.value = st_arr[j];
			if(j==0)option.selected = true;
			select_hr.appendChild(option);
		}
	}
	
	let select_hrsk = document.getElementById("sk"+hrnnum);
	let sk_arr = [
		"Em属性のミタマカードの、Emパワー+5%",
		"Co属性のミタマカードの、Coパワー+5%",
		"Ro属性のミタマカードの、Roパワー+5%",
		"3つの属性のミタマカードを編成している時、Em/Ro/Co/パワー+2%",
		"ヒロインと同じキャラのミタマカードの、Em/Ro/Co/パワー+3%",
		"Em属性のミタマカードの、カグラエフェクトの発動確率+5%",
		"Co属性のミタマカードの、カグラエフェクトの発動確率+5%",
		"Ro属性のミタマカードの、カグラエフェクトの発動確率+5%",
		"3つの属性のミタマカードを編成している時、カグラエフェクトの発動確率+2%",
		"なし"];
	if(hrnlv!=100){
		sk_arr[0] = "なし";
		sk_arr.length = 1;//配列の長さを切り詰める
	}
	while(select_hrsk.length!=0)select_hrsk.remove(0);
	for(j=0;j<sk_arr.length;j++)
	{
		let option = document.createElement("option");
		option.text = sk_arr[j];
		option.value = ((hrnlv!=100)?(9):j);
		select_hrsk.appendChild(option);
	}
}


