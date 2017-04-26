/**
 * Created by ChuckGao on 2017/4/27.
 */
//保存分数
function saveScore(score){
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null){
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="php/savescore.php";
    url=url+"?score="+ score;
    xmlHttp.onreadystatechange=stateAjaxChanged;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}
//ajax状态
function stateAjaxChanged()
{
    if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
    }
}
//根据浏览器获取ajax
function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}