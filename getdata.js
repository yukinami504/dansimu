function getMusicData()
{
	console.log("getmusic");
	const keydata = Object.keys(music_name);
	let select = document.getElementById("ms");
	for(let j=0;j<keydata.length;j++)
	{
		let option = document.createElement("option");
		option.text = keydata[j];
		option.value = music_name[keydata[j]].id;
		select.appendChild(option);
	}
}

function getOtherData()
{
	console.log("getothers");
	for(i=1;i<=1;i++)
	{
		let select = document.getElementById("bn"+i);
		let max_bl = 500;
		for(j=0;j<=max_bl;j+=25)
		{
			let option = document.createElement("option");
			option.text = "+"+(j/100)+"%";
			option.value = j;
			if(j==500)option.selected = true;
			select.appendChild(option);
		}
	}
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
		for(let j in obj)
		{
			//データを取得
			console.log(obj[j].id);
			//selectboxに追加
			let option = document.createElement("option");
			if(obj[j].character!=null)option.text = obj[j].rare.toUpperCase() + chara_name[obj[j].character].name + obj[j].attr.charAt(0).toUpperCase()+obj[j].attr.charAt(1) + " ["+obj[j].name+"]";
			else option.text = obj[j].character;
			option.value = j;
			select.appendChild(option);
		}
		
		let slc_s = document.getElementById("s"+i);
		for(let k=0;k<10;k++)
		{
			//selectboxに追加
			let opt_s = document.createElement("option");
			opt_s.text = (k+1)+"";
			opt_s.value = k;
			slc_s.appendChild(opt_s);
		}
		
		let slc_l = document.getElementById("l"+i);
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
		let select = document.getElementById("lv"+i);
		let lv_arr = [1,10,25,50,100];
		for(j=0;j<lv_arr.length;j++)
		{
			let option = document.createElement("option");
			option.text = lv_arr[j];
			option.value = lv_arr[j];
			if(j==4)option.selected = true;
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
			"3つの属性のミタマカードを編成している時、カグラエフェクトの発動確率+2%"];
			
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
	var sc = document.createElement("script");
	sc.type = "text/javascript";
	sc.src = "./scores/" + score_id + ".js";
	document.head.appendChild(sc);
	
	console.log(musicdata);
	//console.log(musicdata);
	
}
