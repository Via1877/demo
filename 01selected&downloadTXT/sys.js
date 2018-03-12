var system = [
    {
        name:"4000系统",
        shebei:[
          {
              name:"1208",
              guzhang:["机械","电子","部件"]
          },{
              name:"2208",
              guzhang:["机械","电子","部件"]
          },{
              name:"3208",
              guzhang:["机械","电子","部件"]
          },{
              name:"4208",
              guzhang:["机械","电子","部件"]
          },{
              name:"5008",
              guzhang:["机械","电子","部件"]
          },{
              name:"7201",
              guzhang:["机械","电子","部件"]
          }
         ]
      },
      {
      name:"5000系统",
        shebei:[
          {
              name:"1208",
              guzhang:["机械","电子","部件"]
          },{
              name:"2208",
              guzhang:["机械","电子","部件"]
          },{
              name:"3208",
              guzhang:["机械","电子","部件"]
          },{
              name:"4208",
              guzhang:["机械","电子","部件"]
          },{
              name:"5008",
              guzhang:["机械","电子","部件"]
          },{
              name:"7201",
              guzhang:["机械","电子","部件"]
          }
         ]
    },
      {
        name:"6000系统",
        shebei:[
          {
              name:"1208",
              guzhang:["机械","电子","部件"]
          },{
              name:"2208",
              guzhang:["机械","电子","部件"]
          },{
              name:"3208",
              guzhang:["机械","电子","部件"]
          },{
              name:"4208",
              guzhang:["机械","电子","部件"]
          },{
              name:"5008",
              guzhang:["机械","电子","部件"]
          },{
              name:"7201",
              guzhang:["机械","电子","部件"]
          }
         ]
      }
    
  ];
/*method*/
/*根据ID获取对象*/
function $(str){
  return document.getElementById(str);
}
var addShow=$('addShow');
var btn = document.getElementsByClassName('btn')[0];
var sys = $('system');
var shebei = $('shebei');
var guzhang = $('guzhang');
var download = $('download');
/*用于保存当前的选项*/
var current={
    sys:'',
    shebei:'',
    guzhang:''
  };

/*自动加载系统列表*/
(function showSys(obj){
  btn.disabled = true;
  addShow.value='';
  var len = system.length;
  for(var i=0;i<len;i++){
    var sysOpt = document.createElement('option');
    sysOpt.innerText = system[i]['name'];
    sysOpt.value = [i];
    sys.appendChild(sysOpt);
    console.log('e')
 //   console.log(system[i]['name']+ '+' + sysOpt.value)
  }
})();
/*根据做所选系统选择设备*/
function showSys(obj){
  var val=obj.options[obj.selectedIndex].value;
 // console.log (val);
  if(val !=current.sys){
    current.sys=val;
    btn.disabled=true;
  };
 // console.log(val);
  if(val !=null){
    shebei.length =1;
    var sbLen = system[val]["shebei"].length;
    for(var j=0;j<sbLen;j++){//chuan建新标签
      var sbOpt=document.createElement('option');
      sbOpt.innerText = system[val]['shebei'][j].name;
      sbOpt.value=j;
       shebei.appendChild(sbOpt);
    }
  }
}
/*根据所选设备选择故障*/
function showSb(obj){
    var val = obj.options[obj.selectedIndex].value;
    //console.log(val);
    current.shebei=val;
    if(val != null){
        guzhang.length = 1;//清空之前默认留第一个默认选项
        //console.log(system[current.sys]['shebei'][val].guzhang)
        var gzLen = system[current.sys]['shebei'][val].guzhang.length;
        if(gzLen == 0){
            addrshow.value=system[current.sys].name+'-'+system[current.sys]['shebei'][current.sys].name;
            return;
           
        };
        for(var n = 0;n<gzLen;n++){//创建新标签
            var gzOpt=document.createElement('option');
             gzOpt.innerText=system[current.sys]['shebei'][val].guzhang[n];
            gzOpt.value=n;
            guzhang.appendChild(gzOpt);
        }
    }
}
/*都选好之后*/
function showGz(obj){
    current.guzhang=obj.options[obj.selectedIndex].value;
    if((current.shebei != null) && (current.guzhang != null)){
        
        btn.disabled = false;//btn可点
        
    }
 
}
function show(){
    
  addShow.value=system[current.sys].name+'-'+system[current.sys]['shebei'][current.shebei].name+'-'+system[current.sys]['shebei'][current.shebei].guzhang[current.guzhang];    
  return addShow.value;
};
var data = addShow.value;

function downloadTXT(a){
    console.log(addShow.value);
   a.href='data:text/txt;charset=utf-8,'+addShow.value;
   
}



//下载CSV
/* function downloadCSV(a){
    var csv = TSV.CSV.stringify(data);
    console.log(csv);
    a.href='data:text/csv;charest=utf-8,\ufeff'+csv;
} */