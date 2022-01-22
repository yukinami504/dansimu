
function getAttr(attr_txt="0")
{
	if(attr_txt=="0")attr_txt = musicdata.attribute;
	let attr_num=0;
	switch(attr_txt){
		case "em" : attr_num = 0; break;
		case "co" : attr_num = 1; break;
		case "ro" : attr_num = 2; break;
		case "all" : attr_num = 3; break;
		default : attr_num = 3; break;
	}
	return attr_num;
}

function setAttr()
{
	let select_attr = document.getElementById("bn2");
	let attr_num = getAttr();
	select_attr.options[attr_num].selected = true;
}

function setForce(force_f = 0)//計算された戦力をテキストボックスに反映
{
	//f = parseFloat(force_tbl.rows[5].cells[1].innerText);
	document.getElementById("tb1").value = Math.floor(force_f);
	
}

function rare2int(rare_txt){
	let ret = 0;
	switch(rare_txt){
		case "ssr" : ret = 3; break;
		case "sr" : ret = 2; break;
		case "r" : ret = 1; break;
		case "n" : ret = 0; break;
		default:
	}
	return ret;
}

function date2int(date_txt){
	let ret = 0;
	let date = date_txt.split("/");
	ret = parseInt(date[0])*10000+parseInt(date[1])*100+parseInt(date[2]);
	console.log(date_txt);
	console.log(ret);
	return ret;
}

function calcStatus(st_max, st_min, rare, level, sn_lvl)
{
	const sn_status = [//4*10
		[0,225,375,522,597,1410,1494,1542,1593,0],//n[0,225,150,147,75,813,84,48,51,0]
		[0,498,831,1161,1326,1410,1494,1542,1593,1659],//r[0,498,333,330,165,84(85?),84,48,51,66]
		[0,675,1275,1785,2040,2169,2295,2373,2448,2550],//sr[0,675,600,510,255,129,126,78,75,102]
		[0,900,1500,2100,2400,2550,2700,2790,2880,3000],//ssr[0,900,600,600,300,150,150,90,90,120]
	];
	const sinka_max = [0,554,850,1000];
	let rare_ind = 0;
	
	rare_ind = rare2int(rare);
	
	let ret = new Array(3);
	for(let x=0;x<3;x++)
	{
		ret[x]=st_min[x]+((st_max[x]-sinka_max[rare_ind])-st_min[x])*(level-1)/99;
		ret[x]+=sn_status[rare_ind][sn_lvl]/3;
	}
	
	console.log(st_max, st_min, rare, level, sn_lvl);
	console.log(ret);
	return ret;
}

function updateTable(a1=10,a2=0,b=0,c=0,d=0)
{
	force_tbl.rows[0].cells[1].innerText = a1;
	force_tbl.rows[1].cells[1].innerText = a2;
	force_tbl.rows[2].cells[1].innerText = b;
	force_tbl.rows[3].cells[1].innerText = c;
	force_tbl.rows[4].cells[1].innerText = d;
	force_tbl.rows[5].cells[1].innerText = (a1+a2+c+d);
}

function random_judge(threshold=100)//threshold(%)の確率でtrueを返す
{
	let ran = Math.random();
	//console.log(ran*100 < threshold);
	return (ran*100 < threshold);
}

function visText()
{
	document.getElementById("text1").style.display = "block";
}

function mtmSort()
{
	//alert("mtmSort()");
	//フィルタリング
	const obj = mtmdata.filter(function(item){
		let flag = false;
		if(document.dataForm.fl_ssr.checked && item.rare=="ssr")flag=true;
		if(document.dataForm.fl_sr.checked && item.rare=="sr")flag=true;
		return flag;
	}).filter(function(item){
		let flag = false;
		if(document.dataForm.fl_em.checked && item.attr=="em")flag=true;
		if(document.dataForm.fl_co.checked && item.attr=="co")flag=true;
		if(document.dataForm.fl_ro.checked && item.attr=="ro")flag=true;
		return flag;
	}).filter(function(item){
		let flag = false;
		if(document.dataForm.fl_score.checked && item.status.effect.cat=="score")flag=true;
		if(document.dataForm.fl_other.checked && item.status.effect.cat!="score")flag=true;
		return flag;
	});
	//ソート（第二優先から逆に行う）
	let sortnum1 = document.dataForm.sort1.value;
	let sortnum2 = document.dataForm.sort2.value;
	console.log(sortnum1,sortnum2);
	
	switch(parseInt(sortnum2)){
		case 0: {obj.sort(function(a,b){return (a.id<b.id)? -1 : 1}); break;}
		case 1: {obj.sort(function(a,b){return (date2int(a.release_date)<date2int(b.release_date))? -1 : 1}); break;}
		case 2: {obj.sort(function(a,b){return (a.status.max_st[0]+a.status.max_st[1]+a.status.max_st[2]<=b.status.max_st[0]+b.status.max_st[1]+b.status.max_st[2])? 1 : -1}); break;}
		case 3: {obj.sort(function(a,b){return (a.status.max_st[0]<=b.status.max_st[0])? 1 : -1}); break;}
		case 4: {obj.sort(function(a,b){return (a.status.max_st[1]<=b.status.max_st[1])? 1 : -1}); break;}
		case 5: {obj.sort(function(a,b){return (a.status.max_st[2]<=b.status.max_st[2])? 1 : -1}); break;}
		case 6: {obj.sort(function(a,b){return (chara_name[a.character].id<chara_name[b.character].id)? -1 : 1}); break;}
		default:
	}
	console.log(obj);
	switch(parseInt(sortnum1)){
		case 0: {obj.sort(function(a,b){return (a.id<b.id)? -1 : 1}); break;}
		case 1: {obj.sort(function(a,b){return ((date2int(a.release_date)<date2int(b.release_date))? -1 : 1)}); break;}
		case 2: {obj.sort(function(a,b){return ((a.status.max_st[0]+a.status.max_st[1]+a.status.max_st[2]<=b.status.max_st[0]+b.status.max_st[1]+b.status.max_st[2])? 1 : -1)}); break;}
		case 3: {obj.sort(function(a,b){return ((a.status.max_st[0]<=b.status.max_st[0])? 1 : -1)}); break;}
		case 4: {obj.sort(function(a,b){return ((a.status.max_st[1]<=b.status.max_st[1])? 1 : -1)}); break;}
		case 5: {obj.sort(function(a,b){return ((a.status.max_st[2]<=b.status.max_st[2])? 1 : -1)}); break;}
		case 6: {obj.sort(function(a,b){return (chara_name[a.character].id<chara_name[b.character].id)? -1 : 1}); break;}
		default:
	}
	console.log(obj);
	
	for(i=1;i<=5;i++)
	{
		let select = document.getElementById("m"+i);
		//一旦全て消す
		while(select.options.length > 0){
			select.options[0] = null;
		}
		//再入
		for(let j in obj)
		{
			//データを取得
			//console.log(obj[j].id);
			//selectboxに追加
			let option = document.createElement("option");
			if(obj[j].character!=null)option.text = obj[j].rare.toUpperCase() + chara_name[obj[j].character].name + obj[j].attr.charAt(0).toUpperCase()+obj[j].attr.charAt(1) + " ["+obj[j].name+"]";
			else option.text = obj[j].character;
			option.value = obj[j].id;
			select.appendChild(option);
		}
	}
	
}