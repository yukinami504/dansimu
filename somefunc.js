
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

function calcStatus(st_max, st_min, rare, level, sn_lvl)
{
	const sn_status = [//4*10
		[0,225,375,522,597,1410,1494,0,0,0],//n[0,225,150,147,75,813,84,0,0,0]
		[0,498,831,1161,1326,1410,1494,1542,1593,1659],//r[0,498,333,330,165,84(85?),84,48,51,66]
		[0,675,1275,1785,2040,2169,2295,2373,2448,2550],//sr[0,675,600,510,255,129,126,78,75,102]
		[0,900,1500,2100,2400,2550,2700,2790,2880,3000],//ssr[0,900,600,600,300,150,150,90,90,120]
	];
	const sinka_max = [0,554,850,1000];
	let rare_ind = 0;
	
	switch(rare){
		case "ssr" : rare_ind = 3; break;
		case "sr" : rare_ind = 2; break;
		case "r" : rare_ind = 1; break;
		case "n" : rare_ind = 0; break;
		default:
	}
	
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

