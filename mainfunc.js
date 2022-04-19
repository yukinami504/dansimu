function calcForce(flag)
{
	if(ms_list.value=="0"){alert("曲を選択して下さい"); return;}
	else getScoreData(ms_list.value);
	
	
	console.log("calcForce");
	let a1=0,a2=0,b=0,c=0,d=0;
	let formElms = document.forms.dataForm;
	
	let heroine = new Array(3);
	heroine[0] = Number(formElms.hr1em.value) + Number(formElms.hr2em.value);
	heroine[1] = Number(formElms.hr1co.value) + Number(formElms.hr2co.value);
	heroine[2] = Number(formElms.hr1ro.value) + Number(formElms.hr2ro.value);
	console.log(heroine);
	
	let hrn_skill1 = parseInt(formElms.hr1sk.value);
	let hrn_skill2 = parseInt(formElms.hr2sk.value);
	//let msc_attr = parseInt(formElms.music_attr.value);
	console.log(music_name[ms_list.options[ms_list.selectedIndex].text].attr);
	let msc_attr = getAttr(music_name[ms_list.options[ms_list.selectedIndex].text].attr);
	
	let mitamas = new Array(5);
	let hrs_bonus = new Array(5);
	let mtm_attr = new Array(5);
	for(let y=0;y<5;y++)
	{
		mitamas[y] = new Array(3);
		let member_name = "mitama"+(y+1);
		let member_sinka = "sinka"+(y+1);
		let member_level = "level"+(y+1);
		//let member = mtmdata[formElms[member_name].value];
		let member = mtmdata.find((v) => v.id == formElms[member_name].value);
		let mem_s = parseInt(formElms[member_sinka].value);
		let mem_l = parseInt(formElms[member_level].value);
		
		let stt = calcStatus(member.status.max_st, member.status.min_st, member.rare,mem_l,mem_s);
		for(let x=0;x<3;x++)
		{
			mitamas[y][x] = Math.floor(stt[x]);
		}
		//ヒロインスキルによるボーナスを計算
		hrs_bonus[y] = new Array(3).fill(0);
		switch(hrn_skill1){
			case 0: hrs_bonus[y][0] += ((member.attr=="em")?(5):(0)); break;
			case 1: hrs_bonus[y][1] += ((member.attr=="co")?(5):(0)); break;
			case 2: hrs_bonus[y][2] += ((member.attr=="ro")?(5):(0)); break;
			case 4: for(let z=0;z<3;z++)hrs_bonus[y][z] += ((chara_name[member.character].id==formElms["hr1ch"].value)?(3):(0)); break;
			default:
		}
		switch(hrn_skill2){
			case 0: hrs_bonus[y][0] += ((member.attr=="em")?(5):(0)); break;
			case 1: hrs_bonus[y][1] += ((member.attr=="co")?(5):(0)); break;
			case 2: hrs_bonus[y][2] += ((member.attr=="ro")?(5):(0)); break;
			case 4: for(let z=0;z<3;z++)hrs_bonus[y][z] += ((chara_name[member.character].id==formElms["hr2ch"].value)?(3):(0)); break;
			default:
		}
		//属性うめ
		switch(member.attr){
			case "em": mtm_attr[y]=0; break;
			case "co": mtm_attr[y]=1; break;
			case "ro": mtm_attr[y]=2; break;
			default:
		}
		
	}
	//3つの属性を編成している時のヒロイン
	if(hrn_skill1==3){
		if(mtm_attr.includes(0)&&mtm_attr.includes(1)&&mtm_attr.includes(2)){
			for(let y=0;y<5;y++){
				for(let z=0;z<3;z++){
					hrs_bonus[y][z]+=2;
				}
			}
		}
	}
	if(hrn_skill2==3){
		if(mtm_attr.includes(0)&&mtm_attr.includes(1)&&mtm_attr.includes(2)){
			for(let y=0;y<5;y++){
				for(let z=0;z<3;z++){
					hrs_bonus[y][z]+=2;
				}
			}
		}
	}
	
	console.log(mitamas);
	let bloom_level = parseInt(formElms.bloom.value);
	//a1,a2の計算
	
	for(let y=0;y<5;y++){
		let a=0;
		for(let x=0;x<3;x++){
			a += mitamas[y][x];
		}
		a1+=a;
		a2+=Math.floor(a*(bloom_level/10000))
	}
	
	//ヒロイン補正込み値を計算
	let forces = new Array(5);
	for(let y=0;y<5;y++){
		forces[y] = new Array(3);
		for(let x=0;x<3;x++){
			forces[y][x] =(mitamas[y][x]*(1+bloom_level/10000)*(1+heroine[x]/100)*(1+hrs_bonus[y][x]/100));
			forces[y][x] = (Math.floor(forces[y][x]*100)/100);//小数第３位以下切り捨て
			
		}
		d += Math.floor(forces[y][0]+forces[y][1]+forces[y][2]); 
	}
	d = d -a1-a2;
	
	//属性一致ボーナスの計算
	if(msc_attr==3){//All
		for(let y=0;y<5;y++){
			for(let x=0;x<3;x++){
				forces[y][x]*=1.5;
			}
		}
	}
	else
	{
		for(let y=0;y<5;y++){
			if(mtm_attr[y]==msc_attr){
				forces[y][msc_attr]*=2;
			}
		}
	}
	console.log(forces);
	for(let y=0;y<5;y++){
		c += Math.floor(forces[y][0]+forces[y][1]+forces[y][2]);
	}
	c = c -a1-a2-d;
	
	
	//旧スコア計算方法
	
	console.log(a1,a2,b,c,d);
	updateTable(a1,a2,b,c,d);
	setForce(a1+a2+c+d);
}

function calcScore()
{
	//setAttr();//曲の属性を設定
	//calcForce();//一応先に戦力を再計算
	if(ms_list.value=="0"){alert("曲を選択して下さい"); return;}
	if(document.getElementById('m1').value=="0"||document.getElementById('m2').value=="0"||document.getElementById('m3').value=="0"||document.getElementById('m4').value=="0"||document.getElementById('m5').value=="0"){alert("ミタマカードの編成に不備があります"); return;}
	
	let formElms = document.forms.dataForm;
	let force = document.getElementById("tb1").value;
	let diff_index = Math.floor(formElms.diff.value);
	let diff_num = musicdata.difficulty[diff_index];
	let notes_num = musicdata.notes[diff_index];
	let notes = scoredata[diff_index];
	
	if(notes.length==0){alert("ごめんなさい！その譜面はまだ準備中です"); return;}
	visText("text0");
	
	//楽譜データからノーツと時間を取り出す
	let bar_time = 240000/(musicdata.BPM);
	let bar_time_arr = new Array();
	let bar_start_time_arr = new Array();//bar_time_arrの累積
	
	//まず各小節の時間のみ
	let change_index=0;
	let bar_num = (('bar_num' in musicdata)?(musicdata.bar_num):notes[notes_num-1].bar);
	for(let i=0;i<bar_num;i++){
		if('bar_change' in musicdata){
			while(!(musicdata.bar_change[change_index].start<=(i+1)&&(i+1)<=musicdata.bar_change[change_index].end))change_index++;
			let time_nume = musicdata.bar_change[change_index].measure.split('/')[0];
			let time_deno = musicdata.bar_change[change_index].measure.split('/')[1];
			bar_time_arr[i] = 240000*parseInt(time_nume)/parseInt(time_deno)/(musicdata.bar_change[change_index].BPM);
			bar_start_time_arr[i] = (
				 (i==0)?(0)
				:(musicdata.barstart_ms[i]!=undefined&&musicdata.barstart_ms[i]!=null&&musicdata.barstart_ms[i]!=-1)?(musicdata.barstart_ms[i])
				:(bar_start_time_arr[i-1]+bar_time_arr[i-1]));
		}
		else {
			let time_nume = musicdata.measure.split('/')[0];
			let time_deno = musicdata.measure.split('/')[1];
			bar_time_arr[i] = 240000*parseInt(time_nume)/parseInt(time_deno)/(musicdata.BPM);
			bar_start_time_arr[i] = ((i==0)?(0):(bar_start_time_arr[i-1]+bar_time_arr[i-1]));
		}
		//console.log(i,bar_time_arr[i],bar_start_time_arr[i]);
	}
	let auto_mb_start = +(musicdata.offset +bar_time_arr[bar_num-1]+bar_start_time_arr[bar_num-1])/2;
	console.log("auto burst time:"+auto_mb_start);
	
	let notes_arr = new Array();
	for(let i=0;i<notes_num;i++)
	{
		//console.log(notes[i]);
		let obj = {type:"n",combo:0,time:0};
		//let bar_start_time = ((musicdata.offset)+((notes[i].bar-1)*bar_time));//拍子によって1920は変わる
		let bar_start_time = ((musicdata.offset)+(bar_start_time_arr[notes[i].bar-1]));
		
		if(musicdata.barstart_ms[notes[i].bar-1]!=undefined&&musicdata.barstart_ms[notes[i].bar-1]!=null&&musicdata.barstart_ms[notes[i].bar-1]!=-1)bar_start_time = ((musicdata.offset)+musicdata.barstart_ms[notes[i].bar-1]);//barstart_msがある場合はそちらが優先される
		
		//console.log(bar_start_time);
		//console.log(musicdata.barstart_ms[notes[i].bar-1]);
		
		obj.type = "n";
		obj.combo = notes[i].id;
		if(notes[i].flag==1)obj.time = (bar_start_time+notes[i].ms);
		else obj.time = (bar_start_time+((notes[i].tick*bar_time_arr[notes[i].bar-1])/1920));
		notes_arr[i] = obj;
	}
	console.log(notes_arr)
	
	//ついでにミタマバースト発動の最適タイミングも出す
	
	let p = formElms.mb_pos.value-0;
	
	let burst_time = 8000;
	console.log(diff_num,force,notes_num);
	let basic_score = (0.3342*diff_num+10.8058)*force/notes_num;
	//let basic_score_f = (0.334*diff_num+10.807)*force/notes_num;
	console.log("基礎点: "+basic_score);
	//console.log(basic_score_f);
	
	let max_i=-1;
	let max_burst_score=0;
	let max_burst_time=0;
	
	//let leader = mtmdata[formElms["mitama1"].value];
	let leader = mtmdata.find((v) => v.id == formElms["mitama1"].value);
	let m_b_info = 	(leader.rare=="ssr")?(leader.status.burst2):
					(leader.rare=="sr")?(leader.status.burst1):null;
	
	let leader_sinka_level = parseInt(formElms["sinka1"].value);
	let m_b_level;
	
	//for v1.4
	let mitama_members_formb = new Array(5);
	let mitama_b_lvl = new Array(5);
	let mitama_lvl = new Array(5);
	let isScoreUp = (m_b_info!=null && m_b_info.cat=="score");
	
	for(let y=0;y<5;y++)
	{
		let member_name = "mitama"+(y+1);
		let member_sinka = "sinka"+(y+1);
		let member_level = "level"+(y+1);
		//mitama_members[y] = mtmdata[formElms[member_name].value];
		mitama_members_formb[y] = mtmdata.find((v) => v.id == formElms[member_name].value);
		let mem_s = parseInt(formElms[member_sinka].value);
		mitama_lvl[y] = parseInt(formElms[member_level].value);
		if(mitama_lvl[y]>100&&mitama_members_formb[y]["rare"]=="ssr"&&mitama_members_formb[y]["status"]["rink"]["cat"]=="score")isScoreUp=true;
		
		if(mem_s<4)mitama_b_lvl[y] = 1;
		else if(mem_s<8)mitama_b_lvl[y] = 2;
		else mitama_b_lvl[y] = 3;
	}
	
	
	if(leader_sinka_level<4)m_b_level = 1;
	else if(leader_sinka_level<8)m_b_level = 2;
	else m_b_level = 3;
	
	
	if(m_b_info!=null&&isScoreUp&&p==4){//p==4は今後外す？p!=0に？
	
		//burst_time = m_b_info.num[m_b_level-1][0]*1000+110;//暫定
		burst_time = (2*(m_b_level-1)+4)*1000+110;//暫定
		burst_num = ((m_b_info.cat=="score")?(m_b_info.num[m_b_level-1][1]):(0));
		for(let y=0;y<5;y++){
			if(mitama_lvl[y]>100&&mitama_members_formb[y]["rare"]=="ssr"){
				console.log(mitama_members_formb[y]);
				burst_num+=mitama_members_formb[y]["status"]["rink"]["num"][mitama_b_lvl[y]-1]//リンク開放済み
			}
		}
		console.log("MB発動時間: "+burst_time);
		console.log("MB発動効果: +"+burst_num+"%");
		
		for(let i=0;i<notes_num;i++)
		{
			let start_time = notes_arr[i].time;
			let end_time = start_time + burst_time;
			let burst_score = 0;
			let j=i;
			while(j<notes_num&&notes_arr[j].time<end_time)
			{
				let note_score = basic_score;
				if(1<=notes_arr[j].combo&&notes_arr[j].combo<=50)note_score*=1.00;
				else if(51<=notes_arr[j].combo&&notes_arr[j].combo<=100)note_score*=1.01;
				else if(notes_arr[j].combo>=1501)note_score*=1.15;
				else note_score*=((100+(Math.floor((notes_arr[j].combo+99)/100)))/100);
				
				burst_score+=Math.floor(note_score);
				j++;
			}
			//console.log(i,burst_score);
			if(burst_score>max_burst_score){
				max_burst_score = burst_score;
				max_burst_time = notes_arr[i].time;
				max_i=i;
			}
		}
		console.log((max_i+1)+"コンボ目に撃ったらいいよ！"+"(+"+(max_burst_score*(burst_num)/100)+")");
		document.getElementById("text1").innerText = "ミタマバースト発動タイミング ： "+(max_i+1)+"コンボ目に撃ったらいいよ！"+"(+"+Math.floor(max_burst_score*(burst_num)/100)+")";
	}
	else if(m_b_info!=null&&m_b_info.cat=="score"&&p==1){
		burst_time = m_b_info.num[m_b_level-1][0]*1000+110;//暫定
		burst_num = m_b_info.num[m_b_level-1][1];
		console.log("MB発動時間: "+burst_time);
		console.log("MB発動効果: +"+burst_num+"%");
		
		let start_time = auto_mb_start;
		let end_time = start_time + burst_time;
		let auto_burst_score = 0;
		let k=0;
		while(notes_arr[k].time<start_time)k++;
		let auto_m_b_combo = k;
		while(k<notes_num&&notes_arr[k].time<end_time)
		{
			let note_score = basic_score;
			if(1<=notes_arr[k].combo&&notes_arr[k].combo<=50)note_score*=1.00;
			else if(51<=notes_arr[k].combo&&notes_arr[k].combo<=100)note_score*=1.01;
			else if(notes_arr[k].combo>=1501)note_score*=1.15;
			else note_score*=((100+(Math.floor((notes_arr[k].combo+99)/100)))/100);
			
			auto_burst_score+=Math.floor(note_score);
			k++;
		}
		document.getElementById("text1").innerText = "ミタマバースト発動タイミング ： "+auto_m_b_combo+"コンボ目あたりに発動するよ！"+"(+"+Math.floor(auto_burst_score*(burst_num)/100)+")";
	}
	else {
		document.getElementById("text1").innerText = "ミタマバースト発動タイミング ： ミタマバーストがスコアアップ系じゃないよ！";
	}
	if(p==4||p==1)visText("text1");
	else delText("text1");

	
	//スコア推定
	//let events_arr = notes_arr;
	
	//let formElms = document.forms.dataForm;
	let mitama_members = new Array(5);
	let mitama_eff_lvl = new Array(5);
	let mitama_attr = new Array(5);
	let hrn_skill1 = parseInt(formElms.hr1sk.value);
	let hrn_skill2 = parseInt(formElms.hr2sk.value);
	
	for(let y=0;y<5;y++)
	{
		let member_name = "mitama"+(y+1);
		let member_sinka = "sinka"+(y+1);
		let member_level = "level"+(y+1);
		//mitama_members[y] = mtmdata[formElms[member_name].value];
		mitama_members[y] = mtmdata.find((v) => v.id == formElms[member_name].value);
		let mem_s = parseInt(formElms[member_sinka].value);
		
		if(mem_s<2)mitama_eff_lvl[y] = 1;
		else if(mem_s<4)mitama_eff_lvl[y] = 2;
		else mitama_eff_lvl[y] = 3;
		
		//属性うめ
		switch(mitama_members[y].attr){
			case "em": mitama_attr[y]=0; break;
			case "co": mitama_attr[y]=1; break;
			case "ro": mitama_attr[y]=2; break;
			default:
		}
	}
	//console.log(mitama_eff_lvl);
	//3つの属性を編成しているか
	let if_allattr = (mitama_attr.includes(0)&&mitama_attr.includes(1)&&mitama_attr.includes(2));
	let if_onlyem = (mitama_attr[0]==0&&mitama_attr[1]==0&&mitama_attr[2]==0&&mitama_attr[3]==0&&mitama_attr[4]==0);
	let if_onlyco = (mitama_attr[0]==1&&mitama_attr[1]==1&&mitama_attr[2]==1&&mitama_attr[3]==1&&mitama_attr[4]==1);
	let if_onlyro = (mitama_attr[0]==2&&mitama_attr[1]==2&&mitama_attr[2]==2&&mitama_attr[3]==2&&mitama_attr[4]==2);
	console.log("3つの属性を編成",if_allattr);
	console.log("Em属性のみ編成",if_onlyem);
	console.log("Co属性のみ編成",if_onlyco);
	console.log("Ro属性のみ編成",if_onlyro);
	
	let last_time = notes_arr[notes_num-1].time;
	//n回繰り返す
	let total_score_arr = [];
	let n = formElms.simunum.value;
	for(let i=0;i<n;i++)
	{
		//まずスコアボーナスを生成する
		let scoreup_events_arr = new Array();
		let s_e_arr_length = 0;
		//スコアアップキャラの数だけイベントを生成
		let obj = {type:"e",num:0,time:0};
		for(let j=0;j<5;j++)
		{
			if(mitama_members[j].status.effect.cat.substr(0,5)=="score")
			{
				let mtm_eff = mitama_members[j].status.effect.num[mitama_eff_lvl[j]-1];
				let c_time = mtm_eff[0]*1000; //クールタイム
				let e_prob = mtm_eff[1]; //確率
				let e_time = mtm_eff[2]*1000; //発動時間
				let e_num =  mtm_eff[3]; //上昇度合
				if(mitama_members[j].status.effect.cat=="score_ex")
				{//Ura Kagura用ミタマ
					if(mitama_members[j].status.effect.stage.includes(musicdata.musicID))e_num+=mtm_eff[4];
				}
				else if(mitama_members[j].status.effect.cat=="score_co"){
					if(if_onlyco)e_num+=mtm_eff[4];
				}
				else if(mitama_members[j].status.effect.cat=="score_em"){
					if(if_onlyem)e_num+=mtm_eff[4];
				}
				else if(mitama_members[j].status.effect.cat=="score_ro"){
					if(if_onlyro)e_num+=mtm_eff[4];
				}
				else if(mitama_members[j].status.effect.cat=="score_all"){
					if(if_allattr)e_num+=mtm_eff[4];
				}
				//c_time,prob,e_time,e_num
				
				//属性一致の際は確率が1.5倍？説
				if(mitama_members[j].attr==musicdata.attribute||musicdata.attribute=="all")e_prob*=1.5;
				
				//ヒロインスキルの効果
				switch(hrn_skill1){
					case 5: e_prob += ((mitama_members[j].attr=="em")?(5):(0)); break;
					case 6: e_prob += ((mitama_members[j].attr=="co")?(5):(0)); break;
					case 7: e_prob += ((mitama_members[j].attr=="ro")?(5):(0)); break;
					case 8: e_prob += ((if_allattr)?(2):(0)); break;
					default:
				}
				switch(hrn_skill2){
					case 5: e_prob += ((mitama_members[j].attr=="em")?(5):(0)); break;
					case 6: e_prob += ((mitama_members[j].attr=="co")?(5):(0)); break;
					case 7: e_prob += ((mitama_members[j].attr=="ro")?(5):(0)); break;
					case 8: e_prob += ((if_allattr)?(2):(0)); break;
					default:
				}
				
				let time_ms = c_time;
				while(time_ms<=last_time+1000)
				{
					if(random_judge(e_prob))
					{
						let obj1 = {type:"e", num:e_num, time:time_ms};
						scoreup_events_arr[s_e_arr_length] = obj1;
						s_e_arr_length++;
						time_ms+=e_time;
						
						let obj2 = {type:"e", num:(-(e_num)), time:time_ms};
						scoreup_events_arr[s_e_arr_length] = obj2;
						s_e_arr_length++;
					}
					time_ms+=c_time;//成功しても失敗してもcool_timeが加算される
					//let obj = {type:"e",num:e_num}
				}
			}
		}
		
		//ミタマバーストも入れる
		
		if(m_b_info!=null&&m_b_info.cat=="score"&&p!=0)
		{
			let m_b_num = m_b_info.num[m_b_level-1][1];
			let m_b_time = max_burst_time-1;
			//console.log(p);
			switch(p){
				case 1: m_b_time = auto_mb_start; break;
				case 4: m_b_time = max_burst_time-1; break;
				default: m_b_time = 0; break;
			}
			if(i==0)console.log(p, m_b_time);
			let obj3 = {type:"e", num:m_b_num, time:(m_b_time)};
			scoreup_events_arr[s_e_arr_length] = obj3;
			s_e_arr_length++;
			
			let obj4 = {type:"e", num:(-(m_b_num)), time:(m_b_time+burst_time)};
			scoreup_events_arr[s_e_arr_length] = obj4;
			s_e_arr_length++;
		}
		
		
		//統合し、ソート
		//console.log(notes_arr);
		//console.log(scoreup_events_arr);
		let events_arr = notes_arr.concat(scoreup_events_arr);
		//console.log(events_arr);
		
		events_arr.sort(function(a,b){
			return (a.time - b.time);
		});
		if(i==0)console.log(events_arr);
		
		
		//スコア計算
		let total_score = 0;
		let skill_mag = 0;
		for(let x of events_arr)
		{
			if(x.type=="n")
			{
				let note_score = basic_score;
				//let note_score = basic_score*((100+skill_mag)/100);
				
				if(1<=x.combo&&x.combo<=50)note_score*=1.00;
				else if(51<=x.combo&&x.combo<=100)note_score*=1.01;
				else if(x.combo>=1501)note_score*=1.15;
				else note_score*=((100+(Math.floor((x.combo+99)/100)))/100);
				
				note_score = Math.floor(note_score);//小数点以下切り捨て
				note_score = Math.floor(note_score*((100+skill_mag)/100));
				//if(i==0)console.log(x.combo,skill_mag,note_score,(total_score+note_score));
				total_score+=note_score;
			}
			else if(x.type=="e")
			{
				skill_mag+=x.num;
			}
			
		}
		//console.log(total_score);
		total_score_arr[i] = total_score;
	}
	//描画と計算
	let max_total_score = 0;
	let min_total_score = 100000000;
	let mean_total_score = 0;
	for(let i in total_score_arr)
	{
		if(max_total_score<total_score_arr[i])max_total_score=total_score_arr[i];
		if(min_total_score>total_score_arr[i])min_total_score=total_score_arr[i];
		mean_total_score+=total_score_arr[i];
	}
	mean_total_score/=(total_score_arr.length);
	mean_total_score　=Math.round(mean_total_score);
	document.getElementById("text2_max").innerText = "最大スコア : "+max_total_score;
	document.getElementById("text2_min").innerText = "最小スコア : "+min_total_score;
	document.getElementById("text2_mean").innerText = "平均スコア : "+mean_total_score;
	
	let bin_size = 10000;
	let color_name = ["red","cyan","gold","darkslateblue"];
	
	let trace = {
		x: total_score_arr,
		type : "histogram",
		histnorm : "",
		marker : {
			color : color_name[getAttr()], 
		},
		xbins:{
			size:bin_size,
			end:Math.ceil(max_total_score/bin_size)*bin_size,
			start:Math.floor(min_total_score/bin_size)*bin_size
		}
	};
	let data = [trace];
	let screenwidth=(document.body.clientWidth<640)?(document.body.clientWidth):(640)
	let screenheight=Math.floor(screenwidth*3/4);
	let layout = {
		height : screenheight,
		width : screenwidth,
		bargroupgap: 0.05,
		xaxis: {title: "Score"}, 
		yaxis: {title: "Count"}
	};
	Plotly.newPlot("stage",data,layout);
	
	delText("text0");
	
}