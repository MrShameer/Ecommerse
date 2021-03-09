var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
		camera.position.z=7;
		var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor(0xffffff);
		renderer.setSize(window.innerWidth,window.innerHeight);
		document.body.appendChild(renderer.domElement);
		window.addEventListener('resize', () => {
			renderer.setSize(window.innerWidth,window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;

			camera.updateProjectionMatrix();
		})

		var loader = new THREE.GLTFLoader();
		var model;
		loader.load('scene.gltf', function ( gltf ) {
			model = gltf.scene;
			gltf.scene.position.set(0,-1.5,0);
			gltf.scene.rotation.set(0,5,0);
			scene.add( gltf.scene );

		}, undefined, function ( error ) {

			console.error( error );

		} );

		var controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.update();
		controls.enablePan = false;
	//controls.addEventListener( 'change', render );

	/*var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshLambertMaterial({color: 0xF7FFF7});
	var mesh = new THREE.Mesh(geometry, material);

	//mesh.position.set(1,2,3);

	scene.add(mesh);*/

	var light = new THREE.PointLight(0xFFFFFF, 1, 200)
	light.position.set(1,0,5);
	camera.add(light);
	scene.add(camera);

	var render = function(){
		requestAnimationFrame(render);
		//mesh.rotation.y += 0.003;
		if(model)
			//model.rotation.y += 0.003;
		//controls.update();
		renderer.render(scene, camera);
	}

	render();


