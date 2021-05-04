window.onload = function () {

	document.forms.array.onsubmit = function() {




  		var n = this.n.value;
  		var arr = this.arr.value;
  		let k=0, k1=0,k2=0,flag=0,sum=0,l=-1;

  		arr=arr.split(" ");

  		let min=arr[0];
  		for(let i=1; i<arr.length;i++){
  			if (arr[i]<min){
  				min=arr[i];
  				k=i;
  			}
  		}
  		for(let i=1; i<arr.length;i++){
        	if (arr[i] < 0 && flag==0)
        	{
        		flag=1;
        		k1=i;
            }
            else if (arr[i] < 0 && flag==1){
            	k2=i;
            	break;
            }
            
    	}
    	for(let i=k1+1; i<k2;i++){
    		sum+=+arr[i];
    	}  	


  		let div1=ce("div",undefined,"min");
  		div1.innerHTML="Минимальный эл-т находится под номером: "+k;
  		document.body.append(div1);

  		let div2=ce("div",undefined,"min");
  		div2.innerHTML="Сумма: "+sum;
  		document.body.append(div2);



  		return false;
	};
	
}


//функция создания эл-та
function ce(name,text,className,event,fn) {
	let element = document.createElement(name);
	if(text!=undefined) {
		element.innerHTML = text;
	}

	if(className!=undefined) {
		element.className = className;
	}

	if(event!=undefined && fn!=undefined) {
		element.addEventListener(event,fn);
		// element.addEventListener(event,()=>{
		// 	console.log(`some ${event}`)
		// })
	}

	return element;
}




