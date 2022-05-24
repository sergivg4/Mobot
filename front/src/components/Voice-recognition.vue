<script>
export default {
	name: "Voice-recognition",
	data: function () {
		return {
		};
	},
	methods: {
		ToggleMic() {
			let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
			recognition.lang = 'es-ES';
			recognition.continous = true;
			this.isRecording = false;
			recognition.interimResults = false;

			if (this.isRecording) {
				recognition.stop()
			} else {
				recognition.start()
			}

			recognition.onstart = () => {
				console.log('SR Started')
				this.isRecording = true
			};

			recognition.onend = () => {
				console.log('SR Stopped')
				this.isRecording = false

				
			};

			recognition.onresult = (event) => {
				const results = event.results;
				const frase = results[results.length -1 ][0].transcript;
				console.log(frase);

				for (let i = 0; i < event.results.length; i++) {
					const result = event.results[i]
					if (result.isFinal) CheckForCommand(result)
				}
			};

			const CheckForCommand = (result) => {
				const t = result[0].transcript;
				if (t.includes('para de grabar')) {
					recognition.stop()
				}// else if (
				// 	t.includes('qué hora es') ||
				// 	t.includes('what\'s the time')
				// ) {
				// 	recognition.stop()
				// 	alert(new Date().toLocaleTimeString())
				// 	setTimeout(() => recognition.start(), 100)
				// } else if (
				// 	t.includes('saluda') ||
				// 	t.includes('mobot saluda')
				// ) {
				// 	recognition.stop()
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		if (window.pivot0.rotation.y < 0.79) {
				// 			window.pivot0.rotation.y += 0.1;
				// 		}else if(window.pivot0.rotation.y > 0.8){
				// 			window.pivot0.rotation.y -= 0.1;
				// 		}
				// 		if (window.pivot1.rotation.z < 0.79) {
				// 			window.pivot1.rotation.z+=0.1;
				// 		}else if (window.pivot1.rotation.z > 0.8) {
				// 			window.pivot1.rotation.z-=0.1;
				// 		}
				// 		if (window.pivot2.rotation.z < -1.5) {
				// 			window.pivot2.rotation.z+=0.1;
				// 		}else if (window.pivot2.rotation.z > -1.4) {
				// 			window.pivot2.rotation.z-=0.1;
				// 		}
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot0 = " + window.pivot0.rotation.y);
				// 		console.log("pivot1 = " + window.pivot1.rotation.z);
				// 		console.log("pivot2 = " + window.pivot2.rotation.z);
				// 		counter++;
				// 		if(counter === 50) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if (
				// 	t.includes('aleatorio') ||
				// 	t.includes('random')
				// ) {
				// 	recognition.stop()
				// 	let counter = 0;
				// 	let rand0 = Math.random() * 100;
				// 	let rand1 = Math.random() * 100;
				// 	let rand2 = Math.random() * 100;
				// 	let rand3 = Math.random() * 100;
				// 	let rand4 = Math.random() * 100;

				// 	const h = setInterval(function(){
				// 		if (window.pivot0.rotation.y < rand0) {
				// 			window.pivot0.rotation.y += 0.1;
				// 		}else if(window.pivot0.rotation.y > rand0+1){
				// 			window.pivot0.rotation.y -= 0.1;
				// 		}
				// 		if (window.pivot1.rotation.z < rand1) {
				// 			window.pivot1.rotation.z+=0.1;
				// 		}else if (window.pivot1.rotation.z > rand1+1) {
				// 			window.pivot1.rotation.z-=0.1;
				// 		}
				// 		if (window.pivot2.rotation.z < rand2) {
				// 			window.pivot2.rotation.z+=0.1;
				// 		}else if (window.pivot2.rotation.z > rand2+1) {
				// 			window.pivot2.rotation.z-=0.1;
				// 		}
				// 		console.log("-----------------"+counter+"---------------------"+" rand0:"+rand0+" rand1:"+rand1+" rand2:"+rand2+" rand3:"+rand3+" rand4:"+rand4);
				// 		console.log("pivot0 = " + window.pivot0.rotation.y);
				// 		console.log("pivot1 = " + window.pivot1.rotation.z);
				// 		console.log("pivot2 = " + window.pivot2.rotation.z);
				// 		counter++;
				// 		if(counter === 50) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if(
				// 	t.includes('brazo 1') ||
				// 	t.includes('gira brazo 1')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		window.pivot0.rotation.y += 0.1;
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot0 = " + window.pivot0.rotation.y);
				// 		counter++;
				// 		if(counter === 15) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if(
				// 	t.includes('brazo 2') ||
				// 	t.includes('gira brazo 2')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		window.pivot1.rotation.z += 0.1;
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot1 = " + window.pivot1.rotation.z);
				// 		counter++;
				// 		if(counter === 10) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if(
				// 	t.includes('brazo 3') ||
				// 	t.includes('gira brazo 3')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		window.pivot2.rotation.z += 0.1;
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot2 = " + window.pivot2.rotation.z);
				// 		counter++;
				// 		if(counter === 10) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if(
				// 	t.includes('brazo 4') ||
				// 	t.includes('gira brazo 4')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		window.pivot3.rotation.z += 0.1;
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot3 = " + window.pivot3.rotation.z);
				// 		counter++;
				// 		if(counter === 10) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }else if(
				// 	t.includes('brazo 5') ||
				// 	t.includes('gira brazo 5')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){
				// 		window.pivot4.rotation.y += 0.1;
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot4 = " + window.pivot4.rotation.y);
				// 		counter++;
				// 		if(counter === 10) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }
				// else if(
				// 	t.includes('posición inicial') ||
				// 	t.includes('inicio')
				// ) {
				// 	recognition.stop()
					
				// 	let counter = 0;
				// 	const h = setInterval(function(){

				// 		// if (window.pivot0.rotation.y < 0) {
				// 		// 	window.pivot0.rotation.y += 0.1;
				// 		// }else if(window.pivot0.rotation.y > 0){
				// 		// 	window.pivot0.rotation.y -= 0.1;
				// 		// }
				// 		// if (window.pivot1.rotation.z < 0) {
				// 		// 	window.pivot1.rotation.z+=0.1;
				// 		// }else if (window.pivot1.rotation.z > 0) {
				// 		// 	window.pivot1.rotation.z-=0.1;
				// 		// }
				// 		// if (window.pivot2.rotation.z < 0) {
				// 		// 	window.pivot2.rotation.z+=0.1;
				// 		// }else if (window.pivot2.rotation.z > 0) {
				// 		// 	window.pivot2.rotation.z-=0.1;
				// 		// }
				// 		window.pivot0.rotation.y = 0
				// 		window.pivot1.rotation.z = 0
				// 		window.pivot2.rotation.z = 0
				// 		window.pivot3.rotation.z = 0
				// 		window.pivot4.rotation.y = 0
				// 		console.log("-----------------"+counter+"---------------------");
				// 		console.log("pivot0 = " + window.pivot0.rotation.y);
				// 		console.log("pivot1 = " + window.pivot1.rotation.z);
				// 		console.log("pivot2 = " + window.pivot2.rotation.z);

				// 		counter++;
				// 		if(counter === 100) {
				// 			clearInterval(h);
				// 		}
				// 	}, 30);
				// }
			};
			
		},
	},
	created: function () {
	},
	mounted: function () {
		this.init();
	},
}
</script>

<template>

  <span class="hablar" @click="ToggleMic"></span>

</template>

<style scoped>
.hablar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgb(0 89 255 / 90%), 0 0 0 10px rgb(0 89 255 / 70%), 0 0 0 15px rgb(0 89 255 / 50%), 0 0 0 20px rgb(0 89 255 / 30%), 0 0 0 25px rgb(0 89 255 / 10%);
}
.hablar:active {
  border-radius: 0%;
}
</style>
