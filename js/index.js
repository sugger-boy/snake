
// $(function(){
// 	var s='';
// 	for(var i=0;i<20;i++){
// 		for(var j=0;j<20;j++){
// 			var id=i+'_'+j;
// 			s+='<div id="'+id+'" class="block"></div>'
//  		}
// 	}
// 	$('#sence').html(s);
// 	var snake=[   {x:0,y:0},{x:0,y:1},{x:0,y:2} ];   //位置
// 	var data={'0_0':true,'0_1':true,'0_2':true};

// 	var huashe=function(){
// 		$.each(snake,function(index,value){
// 			$('#'+value.x+'_'+value.y).css({background:'#ccc'})
// 		})
 
// 	};
// 	huashe();



	
// 	var dropFood=function(){
// 		var x=Math.floor(Math.random()*20);
// 		var y=Math.floor(Math.random()*20);
// 		while(data[x+'_'+y]){
// 			x=Math.floor(Math.random()*20);
// 			y=Math.floor(Math.random()*20);
//  		}
//  		$('#'+x+'_'+y).css({background:'blue'});
//  		return {x:x,y:y};

// 	}
// 	var food=dropFood();
// 	var fangxiang=39;
//  	var move=function(){
// 		// var fangxiang=39;
//  		var oldTou=snake[snake.length-1];
//  		if( fangxiang == 38){
//  			var newTou={x:oldTou.x-1,y:oldTou.y}
//   		}
//   		if( fangxiang == 37){
//  			var newTou={x:oldTou.x,y:oldTou.y-1}
//  			console.log("座");
//  		}
//  		if( fangxiang == 39){
//  			var newTou={x:oldTou.x,y:oldTou.y+1}
//  		}
// 		if( fangxiang == 40){
//  			var newTou={x:oldTou.x+1,y:oldTou.y}
//  		}
//  		if(newTou.x<0||newTou.x>19||newTou.y<0 ||newTou.y>19 ){
//  			alert("Game Over");
//  			clearInterval(timeId);
//  			return;
//  		}

//   		if( newTou.x==food.x  && newTou.y==food.y){
//  			food=dropFood();
//   		}else{
//  			var weiba=snake.shift();
//  			delete data[weiba.x+'_'+weiba.y];
//  			$('#'+weiba.x+'_'+weiba.y).css({background:'#fff'});
//  		}
// 		snake.push(newTou);
// 		data[newTou.x+'_'+newTou.y]=true;
// 		 $('#'+newTou.x+'_'+newTou.y).css({background:'#ccc'});
//  	}
//  	var timeId=setInterval(move,100);






//  	$(document).keydown(function(e){
//  		//snake.shift();
// 		if(Math.abs(e.keyCode-fangxiang) ==2 ){
// 			return;
// 		}
// 		if( !(e.keyCode>=37&& e.keyCode<=40 )){
// 			return;
// 		}
//  		fangxiang=e.keyCode;
//  	})

// })




$(function(){
	//界面
	var s='';
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
			var id=i+'_'+j
			s+='<div id="'+id+'" class="block"></div>'
		}
	}
	$('#sence').html(s);

	//画蛇
	var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	var data={'0_0':true,'0_1':true,'0_2':true};
	var draw=function(){

        $.each(snake,function(index,value){
        	$('#'+value.x+'_'+value.y).css({backgroundSize:'29px 29px',backgroundImage:'url(./image/shenti.png)'});
        })
	}
	draw();
   // 蛇头
   $("#0_2").css({backgroundSize:'29px 29px',backgroundImage:'url(./image/youtou.png)'})
   var shiwu = ['apple','two','three','five','five','two','apple','three','two','five']
	//食物
	// console.log(Math.random()*10)
	var dropfood=function(){
		var x=Math.floor(Math.random()*20);
		var y=Math.floor(Math.random()*20);

		while(data[x+'_'+y]){
			x=Math.floor(Math.random()*20);
			y=Math.floor(Math.random()*20);
		}
		$('#'+x+'_'+y).css({width:'29px',height:'29px',backgroundSize:'29px 29px',backgroundImage:'url(./image/'+shiwu[Math.floor(Math.random()*5)]+'.png)'});
		return {x:x,y:y}
	} 
	var food=dropfood();
	var fangxiang=39;//zuo
	var move=function(){
		var oldTou=snake[snake.length-1];
		$("#"+oldTou.x+"_"+oldTou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./image/shenti.png)"});
		if(fangxiang==39){
			var newTou={x:oldTou.x,y:oldTou.y+1};
			$("#"+newTou.x+"_"+newTou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./image/youtou.png)"});
		}
		if(fangxiang==37){
			var newTou={x:oldTou.x,y:oldTou.y-1};
			$("#"+newTou.x+"_"+newTou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./image/zuotou.png)"});
		}
		if(fangxiang==40){
			var newTou={x:oldTou.x+1,y:oldTou.y}
			$("#"+newTou.x+"_"+newTou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./image/xiatou.png)"});
		}
		if(fangxiang==38){
			var newTou={x:oldTou.x-1,y:oldTou.y};
			$("#"+newTou.x+"_"+newTou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./image/shangtou.png)"});
		}
		if(newTou.x<0||newTou.y<0||newTou.x>19||newTou.y>19||data[newTou.x+'_'+newTou.y]){
			$('.over').css('display','block')
			var re=confirm('再来一次！！！')
			if(re){
				location.reload();
			}else{
				return
			}
			clearInterval(t);
			return
		}
		if(newTou.x==food.x&&newTou.y==food.y){
			food=dropfood();
		}else{
			var weiba=snake.shift();
			delete data[weiba.x+'_'+weiba.y];
			$('#'+weiba.x+'_'+weiba.y).css({background:'none'})
		}
         snake.push(newTou);
         data[newTou.x+'_'+newTou.y]=true;
         // $('#'+newTou.x+'_'+newTou.y).css({background:'red'})
	};
	var  t;
	$('.start').click(function(){
		t=setInterval(move,200);
		$(this).css('display','none')
	})
	
	$(document).keydown(function(e){
		if(Math.abs(e.keyCode-fangxiang)==2){
			return;
		}
		if(!(e.keyCode>=37&&e.keyCode<=40)){
            return
		}
		fangxiang=e.keyCode;
	})
})