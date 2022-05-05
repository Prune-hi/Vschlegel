import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

			const SCREEN_WIDTH = window.innerWidth;
			const SCREEN_HEIGHT = window.innerHeight;

			let container;

			let camera, scene, renderer;

			let mouseX = 0, mouseY = 0;

			const windowHalfX = window.innerWidth / 2;
			const windowHalfY = window.innerHeight / 2;

			init();
			animate();


			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 5000 );
				camera.position.z = 1500;

				scene = new THREE.Scene();
				//scene.background = new THREE.Color();
				scene.fog = new THREE.Fog( 0xffffff, 1500, 4000 );

				// GROUND

				const imageCanvas = document.createElement( "canvas" );
				const context = imageCanvas.getContext( "2d" );

				imageCanvas.width = imageCanvas.height = 128;

				context.fillStyle = "#ffffff";
				context.fillRect( 0, 0, 128, 128 );

				context.fillStyle = "#ffffff";
				context.fillRect( 0, 0, 64, 64 );
				context.fillRect( 64, 64, 64, 64 ); 

				const textureCanvas = new THREE.CanvasTexture( imageCanvas );
				textureCanvas.repeat.set( 1000, 1000 );
				textureCanvas.wrapS = THREE.RepeatWrapping;
				textureCanvas.wrapT = THREE.RepeatWrapping;
			

				const materialCanvas = new THREE.MeshBasicMaterial( { map: textureCanvas } );

				const geometry = new THREE.PlaneGeometry( 100, 100 );

				const meshCanvas = new THREE.Mesh( geometry, materialCanvas );
				meshCanvas.rotation.x = - Math.PI / 2;
				meshCanvas.scale.set( 1000, 1000, 1000 );
				

				// PAINTING 1

				const callbackPainting = function () {

					const image = texturePainting.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh = new THREE.Mesh( geometry, materialPainting );
					

					addPainting( scene, mesh );
					
					function addPainting( zscene, zmesh ) {
						

						zmesh.scale.x = image.width / 80;
						zmesh.scale.y = image.height / 80;
						zmesh.position.z = 400.0;
						zmesh.position.x = -75.0;
						zmesh.position.y = 0.0;
						
						
						

						zscene.add( zmesh );
						
						/*const meshFrame = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xCABEAC } ) );
						meshFrame.position.z = - 55.0;
						meshFrame.position.x = - 215.0;
						meshFrame.position.y = - 45.0;
						meshFrame.scale.x = 1.1 * image.width / 70;
						meshFrame.scale.y = 1.1 * image.height / 68;
						zscene.add( meshFrame );*/
						

						const meshShadow = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow.position.y = - 134.0;
						meshShadow.position.z = 280.0;
						meshShadow.position.x = - 75.0;
						meshShadow.rotation.x = - Math.PI / 2;
						meshShadow.scale.x = 1.1 * image.width / 88;
						meshShadow.scale.y = 1.1 * image.height / 100;
						zscene.add( meshShadow );
						
						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				

				const texturePainting = new THREE.TextureLoader().load( "image/1.jpg", callbackPainting );
				const materialPainting = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting } );
				
				
				// PAINTING 2

				const callbackPainting2 = function () {

					const image = texturePainting2.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh2 = new THREE.Mesh( geometry, materialPainting2 );
					

					addPainting( scene, mesh2 );
					
					function addPainting( zscene, zmesh2 ) {
						

						zmesh2.scale.x = image.width / 60;
						zmesh2.scale.y = image.height / 60;
						zmesh2.position.z = 170.0;
						zmesh2.position.x = 140.0;
						zmesh2.position.y = -20.0;
						
						
						zscene.add( zmesh2 );
						
						const meshShadow2 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow2.position.y = - 107.0;
						meshShadow2.position.z = 70.0;
						meshShadow2.position.x = 138.0;
						meshShadow2.rotation.x = - Math.PI / 2;
						meshShadow2.scale.x = 1.1 * image.width / 65;
						meshShadow2.scale.y = 1.1 * image.height / 65;
						zscene.add( meshShadow2 );
						
						
						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting2 = new THREE.TextureLoader().load( "image/2.jpg", callbackPainting2 );
				const materialPainting2 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting2 } );
				
				// PAINTING 3

				const callbackPainting3 = function () {

					const image = texturePainting3.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh3 = new THREE.Mesh( geometry, materialPainting3 );
					

					addPainting( scene, mesh3 );
					
					function addPainting( zscene, zmesh3 ) {
						

						zmesh3.scale.x = image.width / 50;
						zmesh3.scale.y = image.height / 50;
						zmesh3.position.z = - 30.0;
						zmesh3.position.x = - 700.0;
						zmesh3.position.y = 170.0;
						
						
						zscene.add( zmesh3 );

						const meshShadow3 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow3.position.y = - 130.0;
						meshShadow3.position.z = - 190.0;
						meshShadow3.position.x = - 700.0;
						meshShadow3.rotation.x = - Math.PI / 2;
						meshShadow3.scale.x = 1.1 * image.width / 55;
						meshShadow3.scale.y = 1.1 * image.height / 115;
						zscene.add( meshShadow3 );
						
						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting3 = new THREE.TextureLoader().load( "image/3.jpg", callbackPainting3 );
				const materialPainting3 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting3 } );
				
				// PAINTING 4

				const callbackPainting4 = function () {

					const image = texturePainting4.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh4 = new THREE.Mesh( geometry, materialPainting4 );
					

					addPainting( scene, mesh4 );
					
					function addPainting( zscene, zmesh4 ) {
						

						zmesh4.scale.x = image.width / 60;
						zmesh4.scale.y = image.height / 60;
						zmesh4.position.z = -300.0;
						zmesh4.position.x = 650.0;
						zmesh4.position.y = 180.0;
						
						
						zscene.add( zmesh4 );

						const meshShadow4 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow4.position.y = - 70.0;
						meshShadow4.position.z = - 450.0;
						meshShadow4.position.x = 650.0;
						meshShadow4.rotation.x = - Math.PI / 2;
						meshShadow4.scale.x = 1.1 * image.width / 66;
						meshShadow4.scale.y = 1.1 * image.height / 120;
						zscene.add( meshShadow4 );

						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting4 = new THREE.TextureLoader().load( "image/4.jpg", callbackPainting4 );
				const materialPainting4 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting4 } );
				
				// PAINTING 5

				const callbackPainting5 = function () {

					const image = texturePainting5.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh5 = new THREE.Mesh( geometry, materialPainting5 );
					

					addPainting( scene, mesh5 );
					
					function addPainting( zscene, zmesh5 ) {
						

						zmesh5.scale.x = image.width / 60;
						zmesh5.scale.y = image.height / 60;
						zmesh5.position.z = - 100.0;
						zmesh5.position.x = 140.0;
						zmesh5.position.y = 50.0;
						
						
						zscene.add( zmesh5 );

						const meshShadow5 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow5.position.y = - 13.0;
						meshShadow5.position.z = - 150.0;
						meshShadow5.position.x = 145.0;
						meshShadow5.rotation.x = - Math.PI / 2;
						meshShadow5.scale.x = 1.1 * image.width / 70;
						meshShadow5.scale.y = 1.1 * image.height / 90;
						zscene.add( meshShadow5 );
						

						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting5 = new THREE.TextureLoader().load( "image/5.jpg", callbackPainting5 );
				const materialPainting5 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting5 } );
				
				// PAINTING 6

				const callbackPainting6 = function () {

					const image = texturePainting6.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh6 = new THREE.Mesh( geometry, materialPainting6 );
					

					addPainting( scene, mesh6 );
					
					function addPainting( zscene, zmesh6 ) {
						

						zmesh6.scale.x = image.width / 40;
						zmesh6.scale.y = image.height / 40;
						zmesh6.position.z = -300.0;
						zmesh6.position.x = -520.0;
						zmesh6.position.y = 160.0;
						
						
						zscene.add( zmesh6 );
						
						const meshShadow6 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow6.position.y = 0.0;
						meshShadow6.position.z = - 380.0;
						meshShadow6.position.x = - 490.0;
						meshShadow6.rotation.x = - Math.PI / 2;
						meshShadow6.scale.x = 1.1 * image.width / 55;
						meshShadow6.scale.y = 1.1 * image.height / 95;
						zscene.add( meshShadow6 );

						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting6 = new THREE.TextureLoader().load( "image/6.jpg", callbackPainting6 );
				const materialPainting6 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting6 } );
				
				// PAINTING 7

				const callbackPainting7 = function () {

					const image = texturePainting7.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh7 = new THREE.Mesh( geometry, materialPainting7 );
					

					addPainting( scene, mesh7 );
					
					function addPainting( zscene, zmesh7 ) {
						

						zmesh7.scale.x = image.width / 50;
						zmesh7.scale.y = image.height / 50;
						zmesh7.position.z = -200.0;
						zmesh7.position.x = -30.0;
						zmesh7.position.y = 110.0;
						
						
						zscene.add( zmesh7 );

						const meshShadow7 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.35, transparent: true } ) );
						meshShadow7.position.y = 45.0;
						meshShadow7.position.z = - 240.0;
						meshShadow7.position.x = - 30.0;
						meshShadow7.rotation.x = - Math.PI / 2;
						meshShadow7.scale.x = 1.1 * image.width / 55;
						meshShadow7.scale.y = 1.1 * image.height / 95;
						zscene.add( meshShadow7 );
						
						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting7 = new THREE.TextureLoader().load( "image/7.jpg", callbackPainting7 );
				const materialPainting7 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting7 } );
				
				// PAINTING 8

				const callbackPainting8 = function () {

					const image = texturePainting8.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh8 = new THREE.Mesh( geometry, materialPainting8 );
					

					addPainting( scene, mesh8 );
					
					function addPainting( zscene, zmesh8 ) {
						

						zmesh8.scale.x = image.width / 50;
						zmesh8.scale.y = image.height / 50;
						zmesh8.position.z = -400.0;
						zmesh8.position.x = 190.0;
						zmesh8.position.y = 185.0;
						
						
						zscene.add( zmesh8 );
						

						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting8 = new THREE.TextureLoader().load( "image/8.jpg", callbackPainting8 );
				const materialPainting8 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting8 } );
				
				// PAINTING 9

				const callbackPainting9 = function () {

					const image = texturePainting9.image;

					scene.add( meshCanvas );

					const geometry = new THREE.PlaneGeometry( 5, 5 );
					const mesh9 = new THREE.Mesh( geometry, materialPainting9 );
					

					addPainting( scene, mesh9 );
					
					function addPainting( zscene, zmesh9 ) {
						

						zmesh9.scale.x = image.width / 50;
						zmesh9.scale.y = image.height / 50;
						zmesh9.position.z = -400.0;
						zmesh9.position.x = -260.0;
						zmesh9.position.y = 185.0;
						
						
						zscene.add( zmesh9 );
						

						const floorHeight = - 8 * image.height / 2;
						meshCanvas.position.y =  floorHeight;

					}
					


				};
				
				const texturePainting9 = new THREE.TextureLoader().load( "image/9.jpg", callbackPainting9 );
				const materialPainting9 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting9 } );

				
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				renderer.autoClear = false;

				renderer.domElement.style.position = "relative";
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove );

			}


			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );

			}

			function onPointerMove( event ) {

				pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			}


			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - ( mouseY - 100 ) - camera.position.y ) * .05;

				camera.lookAt( scene.position );

				renderer.clear();
				renderer.setScissorTest( true );

				renderer.setScissor( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT );
				renderer.render( scene, camera );
				

			}