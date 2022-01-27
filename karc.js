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

//let test = row1KeyDown.

//document.getElementByClassName('clss_keyDigits').addEventListener("click", fnPrintValue);
//debugger;
document.addEventListener("keyup", ynm_keyHandler);
document.addEventListener("keydown", ynm_keyHandler);
let a_tmpNodeList = document.querySelectorAll(".clss_virtualKey");
for(let cnt_tmp = 0; cnt_tmp < a_tmpNodeList.length; cnt_tmp++)
{
	a_tmpNodeList[cnt_tmp].addEventListener("mousedown", ynm_virtualKeyboardHandler);
	a_tmpNodeList[cnt_tmp].addEventListener("mouseup", ynm_virtualKeyboardHandler);
}
//this listener triggered if listen to "click" before keyDown und keyUp listeners!?!?!? what the hell
//so i replased clik for mousedown
//document.getElementById('id_btnClrHs').addEventListener("mousedown", ynm_btnClrHsHandler);
//see https://stackoverflow.com/questions/22151676/how-to-prevent-a-keypress-event-firing-a-click-event-when-focus-is-on-a-butt?

//get the virtual keyboard value
function ynm_virtualKeyboardHandler(e)
{
	let p_eventObject = e.target;
	let p_strVirtualKeyboardValue;
	console.log("ynm_virtualKeyboardHandler");
	console.log(e);
	p_strClassName = p_eventObject.getAttribute("class");
	if(p_strClassName !== null)
	{  
	    if(p_strClassName === "clss_virtualKey")	
	    {
    	    p_strVirtualKeyboardValue = p_eventObject.getAttribute("value"); //a_pathArray[cnt_tmp].innerHTML;
    	    console.log(p_strVirtualKeyboardValue);
			ynm_keyPressedEmulation(p_strVirtualKeyboardValue, e.type);
			//ynm_keyPressedAction(p_strVirtualKeyboardValue);
    		//if()
			//ynm_printValue(p_strVirtualKeyboardValue);
		}
   	}
}

function ynm_keyHandler(e)
{
	//String.fromCharCode()
	console.log(e);
	ynm_keyPressedEmulation(`${e.key}`, e.type);
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

function ynm_keyPressedEmulation(p_strKey, p_strEventType)
{
    //!!!MY
    //document.getElementById("id_btn1").style.top = row1KeyUp; writes directly into html file not into CSS rules
    //so it is override pseudo-class at :action
    //therefore we need to change property directly in CSS rule via document.styleSheets[0].cssRules[0] etc
    //but for Chrome it is almost impossible due to restriction imposed to provide security - Failed to read the 'cssRules' property from 'CSSStyleSheet': Cannot access rules
    //so we need remove property directly from html
    //for btn1 we use msup msdwn events to avoid this situation entirely
    if((p_strEventType === "keyup") || (p_strEventType === "mouseup"))
    {
    	console.log("ynm_keyPressedEmulationUP, p_strKey = ",p_strKey);
		console.log(a_tmpNodeList);

		//Cast Enter Esc Backspace (real keyboard values) to =, Clr, ClrHs (virtual keyboard values),
		//other values the same
		if(p_strKey === "Enter") p_strKey = "=";
		if(p_strKey === "Backspace") p_strKey = "Clr";
		if(p_strKey === "Delete") p_strKey = "Clr";
		if(p_strKey === "Escape") p_strKey = "ClrHs";

		for(let cnt_tmp = 0; cnt_tmp < a_tmpNodeList.length; cnt_tmp++)
		{
			if (a_tmpNodeList[cnt_tmp].getAttribute("value") === p_strKey)
			{
			    a_tmpNodeList[cnt_tmp].style.removeProperty("transform");	
				ynm_keyPressedAction(p_strKey);
			}
		}
	}
	//else if((p_strEventType.indexOf("keydown") !== -1) || (p_strEventType.indexOf("mousedown") !== -1))
	else if((p_strEventType === "keydown") || (p_strEventType === "mousedown"))
	{
		console.log("ynm_keyPressedEmulationDW");
		console.log("ynm_keyPressedEmulationDW, p_strKey = ",p_strKey);

		//Cast Enter Esc Backspace (real keyboard values) to =, Clr, ClrHs (virtual keyboard values)
		//other values the same
		if(p_strKey === "Enter") p_strKey = "=";
		if(p_strKey === "Backspace") p_strKey = "Clr";
		if(p_strKey === "Delete") p_strKey = "Clr";
		if(p_strKey === "Escape") p_strKey = "ClrHs";

		for(let cnt_tmp = 0; cnt_tmp < a_tmpNodeList.length; cnt_tmp++)
		{
			//if (a_tmpNodeList[cnt_tmp].getAttribute("value").indexOf(p_strKey) !== -1)
			if (a_tmpNodeList[cnt_tmp].getAttribute("value") === p_strKey)
			{
			    a_tmpNodeList[cnt_tmp].style.transform = "translateY(3px)";	
			}
		}
	}
	else
	{
		//do nothing
	}

}


function ynm_keyPressedAction(p_strKeyboardValue)
{		
		
		//check if str is digits or "."
		console.log("ynm_keyPressedAction, p_strKeyboardValue = ",p_strKeyboardValue);
		if ((/[0-9\.]/g.test(p_strKeyboardValue)) && (!(/F/g.test(p_strKeyboardValue))) )
		{
			console.log("ynm_keyPressedAction, digits or .");
			ynm_printValue(p_strKeyboardValue);
		}
		//check if str is action
		else if (/[\+\-\*\/]/g.test(p_strKeyboardValue))
		{
            console.log("ynm_keyPressedAction, action");
            //set operators
            //if(/\+/g.test(p_strKeyboardValue)) p_mathOperation = operAdd;
            //else if(/\-/g.test(p_strKeyboardValue)) p_mathOperation = operSub;
            //else if(/\*/g.test(p_strKeyboardValue)) p_mathOperation = operMult;
            //else if(/\//g.test(p_strKeyboardValue)) p_mathOperation = operDiv;
            if(p_strKeyboardValue === "+") p_mathOperation = operAdd;
            else if(p_strKeyboardValue === "-") p_mathOperation = operSub;
            else if(p_strKeyboardValue === "*") p_mathOperation = operMult;
            else if(p_strKeyboardValue === "/") p_mathOperation = operDiv;
            else
            {
            	//do nothing
            }
            ynm_operationProcess(p_strKeyboardValue);
		}
		//check if str Enter or =
		//else if (/Enter|\=/.test(p_strKeyboardValue))
		if ((p_strKeyboardValue === "Enter") || (p_strKeyboardValue === "="))
		{
            console.log("ynm_keyPressedAction, Enter or =");
            ynm_btnEqualToProcess(); 
		}
		//check if str Esc or ClrHs
		//else if(/Escape|ClrHs/.test(p_strKeyboardValue))
		if ((p_strKeyboardValue === "Escape") || (p_strKeyboardValue === "ClrHs"))
		{
		    console.log("ynm_keyPressedAction, Esc or ClrHs");
		    ynm_btnClrHsProcess();	
		}
		//check if str Backspace or Clr
		//else if(/Backspace|Clr/.test(p_strKeyboardValue))
		if ((p_strKeyboardValue === "Backspace") || (p_strKeyboardValue === "Clr"))
		{
		    console.log("ynm_keyPressedAction, Backspace or Clr");
		    ynm_btnClrProcess();	
		}
		//otherwise
		else
		{
			//do nothing
		}

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

function ynm_btnEqualToProcess() 
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
		

		document.getElementById("id_txaHistory").innerHTML = document.getElementById("id_txaHistory").innerHTML + p_tmpStr + "=" + String(parseFloat(p_tmpRes.toPrecision(5))) + "\n";
		document.getElementById("id_txaDisplay").innerHTML = String(parseFloat(p_tmpRes.toPrecision(5)));
		p_calcStep = 0;
	}
//	ynm_printValue(",");
}

function ynm_btnClrHsProcess()
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

function ynm_btnClrProcess()
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

/*
//get the virtual keyboard value
function ynm_virtualKeyboardHandler_path(e)
{
	let a_pathArray = e.path;
	let p_strVirtualKeyboardValue;
	for (let cnt_tmp = 0; cnt_tmp < a_pathArray.length; cnt_tmp++)
	{
		console.log(a_pathArray[cnt_tmp]);
		console.log(a_pathArray[cnt_tmp].getAttribute("class"));
		if (a_pathArray[cnt_tmp] !== document.body)
		{
		    //Note: If the attribute does not exist, the return value is null or an empty string ("")
			p_strClassName = a_pathArray[cnt_tmp].getAttribute("class");
		    if(p_strClassName !== null)
		    {  
		        if(p_strClassName.indexOf("clss_virtualKey") !== -1)	
		        {
    			    p_strVirtualKeyboardValue = a_pathArray[cnt_tmp].getAttribute("value"); //a_pathArray[cnt_tmp].innerHTML;
					ynm_keyPressedAction(p_strVirtualKeyboardValue);
    			    //if()
					//ynm_printValue(p_strVirtualKeyboardValue);
		        }
    	    }
    	}
    	else
    	{
            //if object above body tags
    		break;
    	}
    	
	}
}
*/