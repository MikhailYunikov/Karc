/*let cnt_btnClick1 = 0;
function displaySum() {
  cnt_btnClick1++;
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
  document.getElementById("show you how").innerHTML = ` formatted via button click ${cnt_btnClick1}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);
*/
//function fnPrintValue(p_var)
let p_calcStep = 0;
let f_firstInpDigit = 0;
let p_op1 = 0;
let p_op2 = 0;
let p_result = 0;
let f_mathInProgr = 0
let f_btnEqualToPressed = 0
let f_firstEntryKarc = 1;
let p_mathOperation = 0;
//let p_backgroundUndefColor = document.getElementById('id_btnDoNothing').style.background;
const operMult = 1;
const operDiv = 2;
const operAdd = 3;
const operSub = 4;
const row1KeyDown = "103px";
const row2KeyDown = "173px";
const row3KeyDown = "243px";
const row4KeyDown = "313px";
const row1KeyUp = "100px";
const row2KeyUp = "170px";
const row3KeyUp = "240px";
const row4KeyUp = "310px";
const KeyUp = 1;
const KeyDown = 0;


//document.getElementByClassName('clss_keyDigits').addEventListener("click", fnPrintValue);
//debugger;
document.addEventListener("keyup", ynm_keyUpHandler);
document.addEventListener("keydown", ynm_keyDownHandler);
//document.getElementById('id_btn1').addEventListener("click", ynm_btn1Handler);
document.getElementById('id_btn1').addEventListener('mousedown', ynm_btn1HandlerMD, false); // first
document.getElementById('id_btn1').addEventListener('mouseup', ynm_btn1Handler, false);   // second
document.getElementById('id_btn2').addEventListener("click", ynm_btn2Handler);
document.getElementById('id_btn3').addEventListener("click", ynm_btn3Handler);
document.getElementById('id_btn4').addEventListener("click", ynm_btn4Handler);
document.getElementById('id_btn5').addEventListener("click", ynm_btn5Handler);
document.getElementById('id_btn6').addEventListener("click", ynm_btn6Handler);
document.getElementById('id_btn7').addEventListener("click", ynm_btn7Handler);
document.getElementById('id_btn8').addEventListener("click", ynm_btn8Handler);
document.getElementById('id_btn9').addEventListener("click", ynm_btn9Handler);
document.getElementById('id_btn0').addEventListener("click", ynm_btn0Handler);
document.getElementById('id_btnComma').addEventListener("click", ynm_btnCommaHandler);
document.getElementById('id_btnMult').addEventListener("click", ynm_btnMultHandler);
document.getElementById('id_btnDiv').addEventListener("click", ynm_btnDivHandler);
document.getElementById('id_btnSub').addEventListener("click", ynm_btnSubHandler);
document.getElementById('id_btnAdd').addEventListener("click", ynm_btnAddHandler);
document.getElementById('id_btnEqualTo').addEventListener("click", ynm_btnEqualToHandler);
document.getElementById('id_btnClr').addEventListener("mousedown", ynm_btnClrHandler);
//this listener triggered if listen to "click" before keyDown und keyUp listeners!?!?!? what the hell
//so i replased clik for mousedown
document.getElementById('id_btnClrHs').addEventListener("mousedown", ynm_btnClrHsHandler);


//document.getElementById('id_btnOne').addEventListener("click", fnPrintValue(100));
//document.getElementById('id_btnOne').addEventListener("click", fnPrintValue(Number(document.getElementById('id_btnOne').innerHTML)));
//document.getElementById('id_btnTwo').addEventListener("click", fnPrintValue(Number(document.getElementById('id_btnTwo').innerHTML)));
//document.getElementById('id_btnThree').addEventListener("click", fnPrintValue(Number(document.getElementById('id_btnThree').innerHTML)));




function ynm_btn1HandlerMD()
{
	//let p_tmpStyleTop = getComputedStyle(document.getElementById("id_btn1")).top;
	//.style.top
	//let p_tmpStyleTop = document.getElementByClassName("clss_keyDigits").style.color;
	 //document.getElementById("id_btn1").style.color = "red";
	// getComputedStyle
	//document.getElementById("id_btn1").style.top = "55px";
	//ynm_printValue("1");
	document.getElementById("id_btn1").style.top = row1KeyDown;
	//crossrule=document.styleSheets[0].rules[0];
	//crossrule=document.styleSheets[0].cssRules[0];
}

function ynm_btn1Handler()
{
	//let p_tmpStyleTop = getComputedStyle(document.getElementById("id_btn1")).top;
	//.style.top
	//let p_tmpStyleTop = document.getElementByClassName("clss_keyDigits").style.color;
	 //document.getElementById("id_btn1").style.color = "red";
	// getComputedStyle
	//document.getElementById("id_btn1").style.top = "55px";
	
	ynm_printValue("1");
	document.getElementById("id_btn1").style.top = row1KeyUp;

}
function ynm_btn2Handler(){	ynm_printValue("2");}
function ynm_btn3Handler(){	ynm_printValue("3");}
function ynm_btn4Handler(){	ynm_printValue("4");}
function ynm_btn5Handler(){	ynm_printValue("5");}
function ynm_btn6Handler(){	ynm_printValue("6");}
function ynm_btn7Handler(){	ynm_printValue("7");}
function ynm_btn8Handler(){	ynm_printValue("8");}
function ynm_btn9Handler(){	ynm_printValue("9");}
function ynm_btn0Handler(){ynm_printValue("0");}
function ynm_btnCommaHandler() { ynm_printValue(".");}

function ynm_btnMultHandler()
{
	p_mathOperation = operMult;
	ynm_operationProcess("*");
}
function ynm_btnDivHandler()
{
	p_mathOperation = operDiv;
	ynm_operationProcess("/");

}
function ynm_btnSubHandler() 
{
	p_mathOperation = operSub;
	ynm_operationProcess("-");
}
function ynm_btnAddHandler() 
{
	console.log("ynm_btnAddHandler");
	p_mathOperation = operAdd;
	ynm_operationProcess("+");
}

function ynm_btnEqualToHandler() 
{
	let p_tmpRes = 0;
	console.log("p_calcStep=",p_calcStep);
	console.log("p_op1=",p_op1);
	console.log("p_op2=",p_op2);
	console.log("p_result=",p_result);
	if(p_calcStep == 1)
	{
		p_op2 = Number(document.getElementById("id_txaDisplay").innerHTML);
		let p_tmpStr = document.getElementById("id_txaDisplay").innerHTML;
		
	    if (p_mathOperation == operMult) p_tmpRes = p_op1 * p_op2;
		if (p_mathOperation == operAdd) p_tmpRes = p_op1 + p_op2;
		if (p_mathOperation == operDiv) p_tmpRes = p_op1 / p_op2;
		if (p_mathOperation == operSub) p_tmpRes = p_op1 - p_op2;
		

		document.getElementById("id_txaHistory").innerHTML = document.getElementById("id_txaHistory").innerHTML + p_tmpStr + "=" + String(p_tmpRes) + "\n";
		document.getElementById("id_txaDisplay").innerHTML = String(p_tmpRes);
		p_calcStep = 0;
	}
//	ynm_printValue(",");
}

function ynm_btnClrHsHandler()
{
	console.log("ynm_btnClrHsHandler");
	p_op1 = 0;
	p_op2 = 0;
	p_calcStep = 0;
	f_firstEntry = 0;
	f_firstInpDigit = 0;
	console.log("p_calcStep=",p_calcStep,"p_op1=",p_op1,"p_op2=",p_op2);
	document.getElementById("id_txaDisplay").innerHTML = "0";
	document.getElementById("id_txaHistory").innerHTML = "";
	console.log("p_calcStep=",p_calcStep,"p_op1=",p_op1,"p_op2=",p_op2);	
}

function ynm_btnClrHandler()
{
	console.log("ynm_btnClrHandler");
	p_op1 = 0;
	p_op1 = 0;
	p_calcStep = 0;
	console.log("p_calcStep=",p_calcStep,"p_op1=",p_op1,"p_op2=",p_op2);
	f_firstEntry = 0;
	f_firstInpDigit = 0;
	document.getElementById("id_txaDisplay").innerHTML = "0";
	document.getElementById("id_txaHistory").innerHTML += "\n";
	console.log("p_calcStep=",p_calcStep,"p_op1=",p_op1,"p_op2=",p_op2);
}


function ynm_operationProcess(p_strOpSign)
{
	
	let p_tmpStr;
	let p_tmpRes;
	console.log("ynm_operationProcess");
	if (p_calcStep == 0)
	{
	
		p_op1 = Number(document.getElementById("id_txaDisplay").innerHTML);
		p_tmpStr = String(p_op1);
		document.getElementById("id_txaHistory").innerHTML = document.getElementById("id_txaHistory").innerHTML + p_tmpStr + p_strOpSign;
		p_calcStep = 1;
	}
	else //p_calcStep == 1
	{
		//add code to rewrite op symbol
		let p_tmpStrTxaHistory = document.getElementById("id_txaHistory").innerHTML;
		let p_lenStrTxaHistory = p_tmpStrTxaHistory.length;
		let p_posToRewrite = p_lenStrTxaHistory - 1;
		if (p_mathOperation == operMult) p_tmpStrTxaHistory = p_tmpStrTxaHistory.substr(0,p_posToRewrite) + "*";
		if (p_mathOperation == operAdd) p_tmpStrTxaHistory = p_tmpStrTxaHistory.substr(0,p_posToRewrite) + "+";
		if (p_mathOperation == operDiv) p_tmpStrTxaHistory = p_tmpStrTxaHistory.substr(0,p_posToRewrite) + "/";
		if (p_mathOperation == operSub) p_tmpStrTxaHistory = p_tmpStrTxaHistory.substr(0,p_posToRewrite) + "-";
		document.getElementById("id_txaHistory").innerHTML = p_tmpStrTxaHistory;

	}
    f_btnEqualToPressed = 0;
	f_firstEntryKarc = 0;
	f_firstInpDigit = 0;	
	
	console.log("p_calcStep=",p_calcStep,"p_op1=",p_op1,"p_op2=",p_op2);

}

function ynm_keyUpHandler(e)
{
	//String.fromCharCode()
	let p_tmpStrKey = `${e.key}`;
    ynm_keyPressedEmulation(p_tmpStrKey, KeyUp);
	/*
	if((/1/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn1").style.top = "100px";}
	if((/2/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn2").style.top = "100px";}
    */
	//const p_tmpRegExp = /[0-9]/g;
	console.log("ynm_keyUpHandler" + p_tmpStrKey);
	console.log(p_tmpStrKey.match(/[0-9]/g));
	//console.log(p_tmpStrKey.match(p_tmpRegExp)); 
	//if (p_tmpStrKey.match(/[0-9])/g) != null)
	if ((/[0-9\.]/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
		ynm_printValue(p_tmpStrKey);
		//else if (/\+\-\*\//g.test(p_tmpStrKey))
		else if (/[\+\-\*\/]/g.test(p_tmpStrKey))
		{
            console.log("keyDig");
            //set operators
            if(/\+/g.test(p_tmpStrKey)) p_mathOperation = operAdd;
            else if(/\-/g.test(p_tmpStrKey)) p_mathOperation = operSub;
            else if(/\*/g.test(p_tmpStrKey)) p_mathOperation = operMult;
            else if(/\//g.test(p_tmpStrKey)) p_mathOperation = operDiv;
            else
            {
            	//do nothing
            }
            ynm_operationProcess(p_tmpStrKey);
		}
		else if (/Enter/.test(p_tmpStrKey))
		{
            console.log("key=");
            ynm_btnEqualToHandler(); 
		}
		else if(/Escape/.test(p_tmpStrKey))
		{
		    console.log("keyEsc");
		    ynm_btnClrHsHandler();	
		}
		else if(/Backspace/.test(p_tmpStrKey))
		{
		    console.log("keyBackspc");
		    ynm_btnClrHandler();	
		}

		else if(/g/.test(p_tmpStrKey))
		{
		    /*
		    console.log("g pressed");
		    document.getElementById('id_btnDoNothing').style.background = "gray";
		    document.getElementById('id_btnDoNothing').click();
		    document.getElementById('id_btnDoNothing')
		    //ynm_btnClrHandler();	
		    */
		}

		else
		{
			//do nothing
		}
}

function ynm_keyDownHandler(e)
{
	//console.log(getComputedStyle(document.getElementById("id_btn2")));
	console.log("ynm_keyDownHandler" + `${e.key}`);
	let p_tmpStrKey = `${e.key}`;
    ynm_keyPressedEmulation(p_tmpStrKey, KeyDown);
    
    /*
	if((/1/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn1").style.top = "103px";}
	if((/2/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn2").style.top = "103px";}

	    /*
    if((/2/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn1").style.top = "173px";}
    if((/3/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn1").style.top = "243px";}
    if((/1/g.test(p_tmpStrKey)) && (!(/F/g.test(p_tmpStrKey))) )
	    {document.getElementById("id_btn1").style.top = "313px";}
*/


	//document.getElementById('id_btnDoNothing').style.background = p_backgroundUndefColor;
}


function ynm_printValue(p_tmpStr)
{
	if (p_calcStep == 2) p_calcStep = 0;
	if (f_firstInpDigit == 0)
	{
		document.getElementById("id_txaDisplay").innerHTML = p_tmpStr;
		f_firstInpDigit = 1;
	}
	else
	{
		document.getElementById("id_txaDisplay").innerHTML = document.getElementById("id_txaDisplay").innerHTML + p_tmpStr;
	}
}

function ynm_keyPressedEmulation(p_strKey, f_keyUp)
{
    //!!!MY
    //document.getElementById("id_btn1").style.top = row1KeyUp; writes directly into html file not into CSS rules
    //so it is override pseudo-class at :action
    //therefore we need to change property directly in CSS rule via document.styleSheets[0].cssRules[0] etc
    //but for Chrome it is almost impossible due to restriction imposed to provide security - Failed to read the 'cssRules' property from 'CSSStyleSheet': Cannot access rules
    //so we need remove property directly from html
    //for btn1 we use msup msdwn events to avoid this situation entirely

    if(f_keyUp == 1)
    {
    	console.log("ynm_keyPressedEmulationUP");
    	if((/1/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btn1").style.top = row1KeyUp;}
	    if((/2/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn2").style.removeProperty("top");}
	    //    {document.getElementById("id_btn2").style.left = "80px";}
	        //{document.getElementById("id_btn2").style.top = row1KeyUp;}
    	if((/3/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn3").style.removeProperty("top");}
	    if((/\+/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btnAdd").style.removeProperty("top");}
    	if((/Enter/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btnEqualTo").style.removeProperty("top");}

	    if((/4/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn4").style.removeProperty("top");}
    	if((/5/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btn5").style.removeProperty("top");}
	    if((/6/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn6").style.removeProperty("top");}
    	if((/\-/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btnSub").style.removeProperty("top");}

	    if((/7/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn7").style.removeProperty("top");}
	    if((/8/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn8").style.removeProperty("top");}
	    if((/9/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn9").style.removeProperty("top");}
	    if((/\*/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btnMult").style.removeProperty("top");}
	    if((/Backspace/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) ) //backspace
	        {document.getElementById("id_btnClr").style.removeProperty("top");}

	    if((/0/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn0").style.removeProperty("top");}
	    if((/\,/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )//add this to code
	        {document.getElementById("id_btnComma").style.removeProperty("top");}
	    if((/\//g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )//add this to code
	        {document.getElementById("id_btnDiv").style.removeProperty("top");}
	    if((/Escape/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) ) //backspace
	        {document.getElementById("id_btnClrHs").style.removeProperty("top");}


    }
    else
    {
    	console.log("ynm_keyPressedEmulationDW");
    	if((/1/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btn1").style.top = row1KeyDown;}
	    if((/2/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn2").style.top = row1KeyDown;}
	        //{document.getElementById("id_btn2").style.top = row1KeyDown;}
    	if((/3/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btn3").style.top = row1KeyDown;}
	    if((/\+/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btnAdd").style.top = row1KeyDown;}
    	if((/Enter/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btnEqualTo").style.top = row1KeyDown;}

	    if((/4/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn4").style.top = row2KeyDown;}
    	if((/5/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btn5").style.top = row2KeyDown;}
	    if((/6/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn6").style.top = row2KeyDown;}
    	if((/\-/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
    	    {document.getElementById("id_btnSub").style.top = row2KeyDown;}

	    if((/7/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn7").style.top = row3KeyDown;}
	    if((/8/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn8").style.top = row3KeyDown;}
	    if((/9/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn9").style.top = row3KeyDown;}
	    if((/\*/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btnMult").style.top = row3KeyDown;}
	    if((/Backspace/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) ) //backspace
	        {document.getElementById("id_btnClr").style.top = row3KeyDown;}

	    if((/0/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )
	        {document.getElementById("id_btn0").style.top = row4KeyDown;}
	    if((/\,/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )//add this to code
	        {document.getElementById("id_btnComma").style.top = row4KeyDown;}
	    if((/\//g.test(p_strKey)) && (!(/F/g.test(p_strKey))) )//add this to code
	        {document.getElementById("id_btnDiv").style.top = row4KeyDown;}
	    if((/Esc/g.test(p_strKey)) && (!(/F/g.test(p_strKey))) ) //backspace
	        {document.getElementById("id_btnClrHs").style.top = row4KeyDown;}
    	
    }
}