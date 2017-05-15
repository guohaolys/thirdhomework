/**
 * Created by ChuckGao on 2017/5/15.
 */

//保存分数
function getscore(){

    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null){
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="getscore.php";
    xmlHttp.onreadystatechange=stateAjaxChanged;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);

}
//ajax状态
function stateAjaxChanged()
{
    if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {

       var a = xmlHttp.response;
       alert("分享成功， 您的分数是：" + a );
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