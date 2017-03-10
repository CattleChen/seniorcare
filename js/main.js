$(function(){

	var aLi=$('.nav li');
	var arrId=['header','aboutUs','target','introduction','future'];
	console.log(aLi.length);
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick=function(){
			var index=$(this).index();
			//alert(index);
			$("html,body").animate({scrollTop:$("#"+arrId[index]).offset().top-100},500);
		}
	}
	
	aLi.on('mousemove',function(){
		aLi.removeClass('active');
		$(this).addClass('active');
	})
});




//function getParam(pname){
//	//获取参数
//	var params=location.search.substring(1);
//	//console.log(params);
//	var arrParam=params.split('&');
//	//console.log(arrParam)
//	if(arrParam.length==1){
//		//如果只有一个参数
//		console.log(params.split('=')[1]);
//		return params.split('=')[1];
//	}else{
//		//有多个参数的情况
//		for(var i=0;i<params.length;i++){
//			if(arrParam[i].split('=')[0]==pname){
//				console.log(arrParam[i].split('=')[1]);
//				return arrParam[i].split('=')[1];
//			}
//		}
//	}
//}
