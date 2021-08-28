const canvas = document.getElementById("babcanv");
const engine = new BABYLON.Engine(canvas, true);

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.collisionsEnabled = true;
    scene.enablePhysics(new BABYLON.Vector3(0,-9.81, 0), new BABYLON.AmmoJSPlugin);
    
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 10, 30, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 20, -30));
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 30, height: 30}, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.MeshImpostor, {mass:0, restitution:0.3, friction:1000}, scene);
    var wallz = [15, 0, 0, -15];
    var wallrot = [0, 1, 1, 0];
    var wallx = [null, -15, 15, null];
    for (i=0;i<4;i++) {
        var wall = BABYLON.MeshBuilder.CreatePlane("wall", {width:30, height:2}, scene);
        wall.physicsImpostor = new BABYLON.PhysicsImpostor(wall, BABYLON.PhysicsImpostor.MeshImpostor, {mass:0, restitution: 0.9}, scene);
        wall.position.y = 1;
        wall.position.z = wallz[i];
        if (wallrot[i] == 1) {
            wall.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI/2, BABYLON.Space.LOCAL);
        }
        if  (!(wallx[i] == null)) {
            wall.position.x = wallx[i];
        }
    }

    player = BABYLON.MeshBuilder.CreateSphere("player", {diameter:1, segments:32}, scene);
    player.position.set(14, 1, 0);
    player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.SphereImpostor, {mass:1, restitution:0.9, friction:1}, scene);

    target = BABYLON.Mesh.CreateBox("target", 1, scene);
    target.position.y = player.position.y + 3;
    target.visibility = 0;

    boxesX1 = [-12, -10.5, -9, -7.5, -6, -4.5, -3, -1.5, 0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12];
    for (i=0;i<boxesX1.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX1[i];
      milkcrate.position.y = 0.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX2 = [-10.5, -9, -7.5, -6, -4.5, -3, -1.5, 0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5];
    for (i=0;i<boxesX2.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX2[i];
      milkcrate.position.y = 1.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX3 = [-9, -7.5, -6, -4.5, -3, -1.5, 0, 1.5, 3, 4.5, 6, 7.5, 9];
    for (i=0;i<boxesX3.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX3[i];
      milkcrate.position.y = 2.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX4 = [-7.5, -6, -4.5, -3, -1.5, 0, 1.5, 3, 4.5, 6, 7.5];
    for (i=0;i<boxesX4.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX4[i];
      milkcrate.position.y = 3.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX5 = [-6, -4.5, -3, -1.5, 0, 1.5, 3, 4.5, 6];
    for (i=0;i<boxesX5.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX5[i];
      milkcrate.position.y = 4.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX6 = [-4.5, -3, -1.5, 0, 1.5, 3, 4.5];
    for (i=0;i<boxesX6.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX6[i];
      milkcrate.position.y = 5.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX7 = [-3, -1.5, 0, 1.5, 3];
    for (i=0;i<boxesX7.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX7[i];
      milkcrate.position.y = 6.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    boxesX8 = [-1.5, 0, 1.5];
    for (i=0;i<boxesX8.length;i++) {
      var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
      milkcrate.position.x = boxesX8[i];
      milkcrate.position.y = 7.5;
      milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);
    }

    var milkcrate = BABYLON.MeshBuilder.CreateBox("milkcrate", {depth:1, width:1, height:1}, scene);
    milkcrate.position.x = 0;
    milkcrate.position.y = 8.5;
    milkcrate.physicsImpostor = new BABYLON.PhysicsImpostor(milkcrate, BABYLON.PhysicsImpostor.BoxImpostor, {mass:1, restitution:0.9, friction:1000}, scene);

    scene.registerBeforeRender(function() {
        target.position.set(player.position.x, player.position.y+3, player.position.z);
    });
    return scene;
};

jumpcooldown = 0;

window.onkeydown = function(event) {
  if (event.keyCode == "32" && jumpcooldown == 0) {
    jumpcooldown = 1;
    player.physicsImpostor.applyImpulse(target.getAbsolutePosition().subtract(player.getAbsolutePosition()).scale(2), player.getAbsolutePosition());
    setTimeout(function() {
        jumpcooldown = 0;
    }, 2000);
  }
  if (event.keyCode == "87") {
      player.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 0, 1).scale(0.3), player.getAbsolutePosition());
  }
  if (event.keyCode == "65") {
      player.physicsImpostor.applyImpulse(new BABYLON.Vector3(-1, 0, 0).scale(0.3), player.getAbsolutePosition());
  }
  if (event.keyCode == "83") {
      player.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 0, -1).scale(0.3), player.getAbsolutePosition());
  }
  if (event.keyCode == "68") {
      player.physicsImpostor.applyImpulse(new BABYLON.Vector3(1, 0, 0).scale(0.3), player.getAbsolutePosition());
  }
}
const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
