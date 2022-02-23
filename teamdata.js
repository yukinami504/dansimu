function toSizedBinary(num,digit)
{
	let bbb = parseInt(num).toString(2);
	let aaa = "";
	for(let i=0;i<(digit-bbb.length);i++)aaa+="0";
	let ccc = aaa+bbb;
	//console.log(ccc);
	return ccc;
}

const alph="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?";
const program = [
	"chr1","lv1","st1","st2","st3","sk1",
	"chr2","lv2","st4","st5","st6","sk2",
	"bn1",
	"m1","l1","s1",
	"m2","l2","s2",
	"m3","l3","s3",
	"m4","l4","s4",
	"m5","l5","s5",
];
const digits = [
	8,7,3,3,3,4,
	8,7,3,3,3,4,
	10,
	13,7,4,
	13,7,4,
	13,7,4,
	13,7,4,
	13,7,4,
];
	
function outputTeam()
{
	let dataText = "0001";
	//console.log(document.getElementById("lv1").value);
	for(let k=0;k<program.length;k++){
		let data = document.getElementById(program[k]).value;
		if(digits[k]==3){//ヒロイン補正値のみは特殊な処理
			data = data-15;
			if(data<=0)data=0;
			else if(data==5)data=4;
		}
		dataText+=toSizedBinary(data,digits[k]);
	}
	dataText+="00";
	console.log(dataText);
	//console.log(dataText.length);
	//6桁ずつ切り出していくつかラウンドして出力
	let outText="";
	for(let l=0;l<dataText.length/6;l++){
		let ds = dataText.substr(l*6,6);
		let t = alph.charAt(parseInt(ds,2));
		//console.log(ds,t);
		outText+=t;
	}
	
	let teamText = document.getElementById('tm_o');	
	teamText.value = outText;
	alert("現在のチーム編成を出力しました。");
}

function inputTeam()
{	
	let teaminText = document.getElementById('tm_i').value;	
	console.log(teaminText);
	
	if(teaminText.length!=32)
	{
		alert("入力が不正です");
		return;
	}
	
	let dataBiText="";
	for(let i=0;i<teaminText.length;i++)
	{
		let str = teaminText.charAt(i);
		let strnum = alph.indexOf(str);
		dataBiText += toSizedBinary(strnum,6);
	}
	//console.log(dataBiText);
	
	getMtmData();
	
	let now=4;
	let hrlv=0;
	for(let j=0;j<program.length;j++){
		let sd = parseInt(dataBiText.substr(now,digits[j]),2);
		now+=digits[j];
		//console.log(sd);
		if(program[j]=="lv1"||program[j]=="lv2"){
			hrlv=sd;
			setHrnData(parseInt(program[j].charAt(2)),hrlv);
		}
		else if(digits[j]==3){//ヒロイン補正値のみは特殊な処理
			//console.log(document.getElementById("lv1").value);
			//console.log(hrlv);
			if(hrlv!=100)sd=hrnlv_force[parseInt(hrlv)-1];
			else if(sd==4)sd=20;
			else sd = sd+15;
		}
		//console.log(sd);
		document.getElementById(program[j]).value=sd;
	}
	alert("入力されたチーム編成を適用しました。");
}