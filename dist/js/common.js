	function check_calc(){
		var el = document.createElement('div');
		el.style.cssText='width:calc(10px)';
		return !!el.style.length;
	}
	// alert(check_calc())
	if (!check_calc()) {
		var link = document.createElement('link');
		link.setAttribute('ref','stylesheet');
		link.setAttribute('href','css/nocalc.css');
		// document.getElementsByTagName('head')[0].appendChild(link);
		document.body.appendChild(link);

		document.body.style.background = 'green';
	}

// $(document).ready(function(){
// 	var DebugSmartGrid = function(){
// 		var debugBox = document.createElement('div');
// 		debugBox.classList.add('debug');
// 		for (var i=0;i<12;i++) {
// 			var sub = document.createElement('div');
// 			debugBox.prepend(sub);
// 		}
// 	}
// })