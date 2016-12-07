$(document).ready(function() {
	$('.wrap').mousemove(function(e) {

		var offset = $('.wrap').offset();

		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;

		var centerX = $('.wrap').outerWidth() / 2;
		var centerY = $('.wrap').outerHeight() / 2;

		var deltaX = x - centerX;
		var deltaY = y - centerY;

		var percentX = deltaX / centerX;
		var percentY = deltaY / centerY;

		var deg = 2;

		$('.banner').css({
			transform: 'rotateX('+deg * -percentY + 'deg)' + ' rotateY('+ deg * percentX+'deg)'
		});
	});
	$('.wrap').mouseleave(function() {
			$('.banner').css({
				transform: ''
			});
	});

	var timer = null;

	$('.wrap').hover(function() {
		/* Stuff to do when the mouse enters the element */
		clearInterval(timer);
		console.log(234);

		// 执行鼠标绑定事件
		$('.circle li').click(function() {
			$(this).addClass('selected').siblings().removeClass('selected');
			// .eq($(this).index())将指定的li序号传给a标签
			$('.banner-pic a').eq($(this).index()).addClass('show').siblings().removeClass('show');
		});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		timer = setInterval(tabs, 3000);
	});

	
		timer = setInterval(tabs, 3000);
	// 自动切换
	var num = 0;
	function tabs() {
		if (num > 2) {
			num = 0;
		} else {
			$('.circle li').eq(num).addClass('selected').siblings().removeClass('selected');
			$('.banner-pic a').eq(num).addClass('show').siblings().removeClass('show');
			num++;
		}
	}
});
