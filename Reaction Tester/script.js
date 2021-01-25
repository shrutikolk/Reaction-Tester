			document.getElementById("time").innerHTML = "0s";
				
			var start = new Date().getTime();
			
			var bestTime = start;
			
			function colorgenerate(){
			
				var color = "#";
				
				var a = "0123456789ABCDEF".split('');
				
				for(i=0;i<6;i++)
				{
					color += a[Math.floor(Math.random()*16)];
				}
				
				return color;
			
			}
			
			function appear() {
			
				var top = Math.random() * 300;
				
				var left = Math.random() * 1000;
				
				var width = (Math.random() * 200) + 50;
				
				var sh = Math.random();
				
				if(sh > 0.5){
				
					document.getElementById("shape").style.borderRadius = "50%";
				
				}
				else
				{
				
					document.getElementById("shape").style.borderRadius = "0px";
					
				}
				
				document.getElementById("shape").style.backgroundColor= colorgenerate();
				
				document.getElementById("shape").style.top = top + "px";
				
				document.getElementById("shape").style.left = left + "px";
				
				document.getElementById("shape").style.width = width + "px";
				
				document.getElementById("shape").style.height = width + "px";
				
				document.getElementById("shape").style.display = "block";
				
				start = new Date().getTime();
						
			}
			
			function set(){
			
			setTimeout(appear, (Math.random()*1000));

			}
			
			set();
			
			document.getElementById("shape").onclick = function() {
			
					document.getElementById("shape").style.display="none";	

					var end = new Date().getTime();
					
					var timeTaken = (end - start)/1000;

					document.getElementById("time").innerHTML = timeTaken + "s";
					
					if(bestTime>timeTaken)
					{
						bestTime = timeTaken;
						
						document.getElementById("bT").innerHTML = bestTime +"s";
					}
					
					set();
		
			}