// $(document).ready(function(){

// })


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
		document.body.appendChild(link);
		document.body.style.background = 'green';
	}

	var PreviewSmartGrid = function() {
		var wrapper = document.createElement('div'),
			items 	= document.createElement('div');

		wrapper.classList.add('wrapper-test');
		items.classList.add('items');
		wrapper.appendChild(items);

		for (var i=1;i<=6;i++) {
			var item 	= document.createElement('div'),
				img_box = document.createElement('div'),
				img 	= document.createElement('img'),
				par 	= document.createElement('p');

			img_box.classList.add('img-box'+i+'');
			item.classList.add('item');
			items.appendChild(item);
			item.appendChild(img_box);
			item.appendChild(par);
			img_box.appendChild(img);
			img.setAttribute('src','http://placehold.it/600x300');

			if (i === 2) {
				par.innerHTML = '<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, cupiditate. adipisicing elit. Odio, cupiditate.</b>';
			} else {
				par.innerHTML = '<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, cupiditate.</b>';
			}		
		}
		document.body.insertBefore(wrapper, document.body.firstChild);
	}

	var DebugSmartGrid = function(){
		var debugBox1 = document.createElement('div'),
			debugBox2 = document.createElement('div'),
			debugBox3 = document.createElement('div');

		debugBox1.classList.add('debug');
		debugBox1.appendChild(debugBox2);
		debugBox2.appendChild(debugBox3);

		for (var i=1;i<=12;i++) {
			var sub = document.createElement('div');
			debugBox3.appendChild(sub);
		}
		document.body.insertBefore(debugBox1, document.body.firstChild);
	}

	PreviewSmartGrid()
	DebugSmartGrid()