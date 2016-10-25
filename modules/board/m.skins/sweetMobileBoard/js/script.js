jQuery(function($){
	$(".smbCategoryBtn").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$(".smbCategory").css("display","block");
		}else{
			$(this).removeClass("active");
			$(".smbCategory").css("display","none");
		}
	});
	$(".smbBottomInfo .files").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$(".smbFiles").css("display","block");
		}else{
			$(this).removeClass("active");
			$(".smbFiles").css("display","none");
		}
	});
	$(".smbBottomInfo .tag").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$(".smbTags").css("display","block");
		}else{
			$(this).removeClass("active");
			$(".smbTags").css("display","none");
		}
	});
});