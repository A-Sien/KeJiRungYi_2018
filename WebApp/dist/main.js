!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=BABYLON},function(e,t){e.exports=$},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),r=new(function(){function e(){}return e.prototype.getRandomBoolean=function(){return Math.random()>=.5},e.prototype.getRandomIntInRange=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)+e},e.prototype.getRandomInt=function(e){var t=this.getRandomBoolean()?1:-1;return this.getRandomNegativeInt(e)*t},e.prototype.getRandomNegativeInt=function(e){return this.getRandomNegativeNumber(e)},e.prototype.getRandomNumber=function(e,t){var n=this.getRandomBoolean()?1:-1;return this.getRandomNegativeNumber(e,t)*n},e.prototype.getRandomNegativeNumber=function(e,t){e=e||1,t=t||0;var n=Math.round(Math.random()*Math.pow(10,e+t));return 0!==t&&(n/=Math.pow(10,t)),n},e.prototype.distanceVector=function(e,t){var n=e.x-t.x,o=e.y-t.y,i=e.z-t.z;return Math.sqrt(n*n+o*o+i*i)},e.prototype.positionToString=function(e){return["x","y","z"].map(function(t){return e[t].toFixed(2)}).join(", ")},e}()),a=function(){function e(){this.addText=null,this.addImage=null}return e.prototype.initPanel=function(e,t){this.addText=e,this.addImage=t,i("#js-sent").on("click",this.handleText.bind(this)),i("#js-upload").on("change",this.handleFiles.bind(this))},e.prototype.handleText=function(){var e=this,t=i(".js-input"),n=String(t.val());if(n){t.val("").focus(),this.addText(n,2*r.getRandomInt(),r.getRandomInt(),-3+r.getRandomNegativeInt());var o=i(".mask");o.addClass("flash"),setTimeout(function(){o.removeClass("flash")},500),window.setTimeout(function(){e.addText(n+"! "+n+"! "+n+"!!!",2*r.getRandomInt(),r.getRandomInt(),-3+r.getRandomNegativeInt())},700)}},e.prototype.handleFiles=function(e){var t=this,n=e.currentTarget.files[0];if(n){var o=new FileReader;o.addEventListener("load",function(e){var n=e.target.result;t.addImage(n,2*r.getRandomInt(),r.getRandomInt(),-3+r.getRandomNegativeInt())}),o.readAsDataURL(n),i.get("apis/uploadImage").done(function(e){console.log(e)}).fail(function(e){console.log(e)})}},e}(),s=function(){function e(){this.texts=[],this.panel=new a,this.canvas=document.getElementById("renderCanvas"),this.engine=new o.Engine(this.canvas,!0),this.cameraLocations=[],this.bubbleSprays=[],this.colorsSetForParticle=[{diffuseColor:[253,245,134],glowColor:[255,252,193,.85]},{diffuseColor:[253,229,210],glowColor:[255,219,225,.85]},{diffuseColor:[252,247,255],glowColor:[255,249,254,.85]}].map(function(e){return e.diffuseColor=e.diffuseColor.map(function(e){return e/255}),e.glowColor=e.glowColor.map(function(e,t){return 3!==t?e/255:e}),e}),this.particles=[],this.chatRooms=[]}return e.prototype.init=function(){var e=this;this.initScene(),this.getTexts(),this.registerRunRenderLoop(),this.panel.initPanel(this.addText.bind(this),this.addImage.bind(this)),i("#devPanel").show(),window.addEventListener("resize",function(){e.engine.resize()})},e.prototype.initScene=function(){var e=this.scene=new o.Scene(this.engine),t=this.camera=new o.UniversalCamera("Camera",new o.Vector3(0,0,-25),this.scene);t.speed=.5,t.setTarget(o.Vector3.Zero()),t.attachControl(this.canvas,!0),new o.HemisphericLight("HemiLight1",new o.Vector3(0,0,10),e).intensity=.8,new o.HemisphericLight("HemiLight2",new o.Vector3(0,0,-10),e).intensity=.8,this.lightOfCamera=new o.PointLight("lightOfCamera",new o.Vector3(0,0,0),e),this.lightOfCamera.diffuse=new o.Color3(1,1,1),this.lightOfCamera.specular=new o.Color3(.8,.8,.2),this.lightOfCamera.intensity=.3;var n=new o.StandardMaterial("skyBox",e);n.backFaceCulling=!1,n.reflectionTexture=new o.CubeTexture("assets/skybox/sb",e),n.reflectionTexture.coordinatesMode=o.Texture.SKYBOX_MODE,n.diffuseColor=new o.Color3(0,0,0),n.specularColor=new o.Color3(0,0,0),n.disableLighting=!0;var i=o.Mesh.CreateBox("skyBox",1500,e);i.material=n,i.infiniteDistance=!0,i.renderingGroupId=0},e.prototype.createBubbleSpray=function(e){var t=o.MeshBuilder.CreateSphere("s",{diameter:.08,segments:12},this.scene),n=new o.SolidParticleSystem("bubbleSpray",this.scene);n.addShape(t,20);var i=n.buildMesh();i.material=function(){var e=new o.StandardMaterial("bubbleMat",this.scene);return e.alpha=.1,e}.bind(this)(),i.position=e,t.dispose();var r;n.initParticles=function(){for(var e=0;e<this.nbParticles;e++)this.recycleParticle(this.particles[e])},n.recycleParticle=function(e){return e.position.x=0,e.position.y=0,e.position.z=0,e.velocity.x=.01*(Math.random()-.5)/3,e.velocity.y=.01*Math.random(),e.velocity.z=.01*(Math.random()-.5)/3,r=1*Math.random()+.2,e.scale.x=r,e.scale.y=r,e.scale.z=r,e.age=.8*Math.random(),e},n.updateParticle=function(e){return(e.position.y<0||e.age<0)&&n.recycleParticle(e),e.position.addInPlace(e.velocity),e.position.y+=.005,e.age-=.01,e},n.initParticles(),n.setParticles(),n.computeParticleColor=!1,n.computeParticleTexture=!1,n.computeParticleRotation=!1,this.bubbleSprays.push(n)},e.prototype.registerRunRenderLoop=function(){var e=this,t={x:0,y:0,z:0},n=this.camera.viewport.toGlobal(this.camera.getEngine(),null),r=i(".mark");this.engine.runRenderLoop(function(){if(e.bubbleSprays.forEach(function(e){return e.setParticles()}),e.cameraLocations.length>0){e.camera.position=e.cameraLocations.shift();e.cameraLocations.length>=1&&e.camera.setTarget(o.Vector3.Zero())}e.lightOfCamera.position=e.camera.position,e.translateParticles(),e.scene.render(),e.updateDevPanel();var i=e.texts[0];if(i){var a=e.camera.getViewMatrix().multiply(e.camera.getProjectionMatrix()),s=o.Vector3.Project(t,i.computeWorldMatrix(!1),a,n);if(s.z>1)r.hide();else{r.show(),r.css("top",s.y+60),r.css("left",s.x);s.z;r.text(JSON.stringify(s))}}})},e.prototype.updateDevPanel=function(){document.getElementById("fps").innerHTML=this.engine.getFps().toFixed()+" fps",document.getElementById("coordinate").innerHTML=r.positionToString(this.camera.position)},e.prototype.addText=function(e,t,n,i){var r=new o.DynamicTexture("dynamic texture",{width:500,height:80},this.scene,!0);r.drawText(e,0,60,"60px verdana","white","true"),r.hasAlpha=!0;var a=o.MeshBuilder.CreatePlane("outputplane",{width:5,height:1},this.scene);a.billboardMode=o.AbstractMesh.BILLBOARDMODE_ALL,a.position=new o.Vector3(t,n,i),a.scaling.y=1,a._message=e;var s=a.material=new o.StandardMaterial("outputplane",this.scene);s.diffuseTexture=r,s.alpha=0,s.backFaceCulling=!1,this.texts.push(a)},e.prototype.addImage=function(e,t,n,i){var r=o.Texture.CreateFromBase64String(e,"image-"+Date.now,this.scene),a=o.MeshBuilder.CreatePlane("outputplane",{width:5,height:5},this.scene);a.billboardMode=o.AbstractMesh.BILLBOARDMODE_ALL,a.position=new o.Vector3(t,n,i),a.scaling.y=1;var s=a.material=new o.StandardMaterial("outputplane",this.scene);s.diffuseTexture=r,s.specularColor=new o.Color3(0,0,0),s.emissiveColor=new o.Color3(1,1,1),s.backFaceCulling=!1},e.prototype.createParticle=function(e){var t=this,n=new o.Vector3(e.x+.1*r.getRandomIntInRange(-15,15),e.y+.1*r.getRandomIntInRange(-15,15),e.z+.1*r.getRandomIntInRange(-15,15)),i=r.getRandomIntInRange(0,2),a=this.colorsSetForParticle[i].diffuseColor,s=new o.Color3(a[0],a[1],a[2]),c=.001*r.getRandomIntInRange(50,70),l=o.Mesh.CreateSphere("core-colorSetIndex:"+i,2,c,this.scene);l.position=n;var u=l.material=new o.StandardMaterial("coreMaterial",this.scene);u.diffuseColor=s,u.emissiveColor=o.Color3.Black(),this.glowLayerForParticle||(this.glowLayerForParticle=new o.GlowLayer("glowLayerForParticle",this.scene),this.glowLayerForParticle.intensity=.5,this.glowLayerForParticle.customEmissiveColorSelector=function(e,n,o,i){var r=e.name.replace("core-colorSetIndex:",""),a=t.colorsSetForParticle[r].glowColor;i.set(a[0],a[1],a[2],a[3])}),this.glowLayerForParticle.addIncludedOnlyMesh(l);var h=this.getRandomVector3();this.particles.push({mesh:l,translateVector:h,duration:this.getDurationForParticle()})},e.prototype.translateParticles=function(){var e=this;this.particles.forEach(function(t){t.duration<=0&&(t.translateVector=e.getRandomVector3(),t.duration=e.getDurationForParticle());var n=t.translateVector;t.mesh.position.x+=.003*n.x,t.mesh.position.y+=.003*n.y,t.mesh.position.z+=.003*n.z,t.duration-=1})},e.prototype.getRandomVector3=function(){return new o.Vector3(r.getRandomInt(),r.getRandomInt(),r.getRandomInt()).normalize()},e.prototype.getDurationForParticle=function(){return r.getRandomIntInRange(180,360)},e.prototype.getPoints=function(){var e=this;i.getJSON("apis/getPoints",function(t){var n=[];Object.keys(t).forEach(function(e,i){var a=t[e].map(function(e){return new o.Vector3(e.x,e.y,.006*r.getRandomNumber(3))});n[i]=a});var i=[];n.forEach(function(t){var n=e.getLineToEachOther(t),r=e.sort(n,function(e){return e.distance})[n.length-1],a=new o.Vector3(0,0,0);Object.keys(a).forEach(function(e){a[e]=(r.from[e]+r.to[e])/2}),e.chatRooms.push(a),e.createBubbleSpray(a);for(var s=0;s<30;s++)e.createParticle(a);i=i.concat(n.slice(0,150))}),console.log("line count: "+i.length),e.drawLine(i)})},e.prototype.sort=function(e,t){return e.sort(function(e,n){return t(e)-t(n)}),e},e.prototype.getLineToEachOther=function(e){var t=[];return e.forEach(function(n,o){e.forEach(function(e,i){if(o<i){var a=r.distanceVector(n,e),s=o+"-"+i;t.push({key:s,from:n,to:e,distance:a})}})}),t},e.prototype.drawLine=function(e){var t=this,n=[246/255,1,201/255,.84],i=new o.Color3(n[0],n[1],n[2]),a=new o.HighlightLayer("highlightForLine",this.scene);a.innerGlow=!1;var s=[[199,222,205],[192,231,164],[168,213,133]].map(function(e){return e.map(function(e){return e/255})}).map(function(e,n){var i=new o.Color3(e[0],e[1],e[2]),r=new o.StandardMaterial("lineMat"+n,t.scene);return r.diffuseColor=i,r}),c=[[],[],[]];e.forEach(function(e,n){var i=r.getRandomIntInRange(0,2),a=o.MeshBuilder.CreateTube("line"+n,{path:[e.from,e.to],radius:.03,updatable:!1,instance:null},t.scene);a.material=s[i],c[i].push(a)}),c.forEach(function(e){var t=o.Mesh.MergeMeshes(e,!0,!1);a.addMesh(t,i)})},e.prototype.getTexts=function(){var e=this,t=new Image;t.src="assets/textImage/image.png",t.onload=function(){var n=document.createElement("canvas"),i=n.height=t.height,r=n.width=t.width,a=n.getContext("2d");a.drawImage(t,0,0,r,i);for(var s=a.getImageData(64,64,64,64),c=[],l=s.data.length,u=0;u<l;u+=4){var h=s.data[u],d=s.data[u+1],p=s.data[u+2];if(.299*h+.587*d+.114*p>50){var g=u/4+1,f=Math.floor(g/64),m=g%64;c.push({x:m,y:f,r:h,g:d,b:p})}}c.forEach(function(t,n){o.Mesh.CreateSphere("pixels-"+n,2,.2,e.scene).position=new o.Vector3((t.x-32)/3,(t.y-32)/3,10)})}},e.prototype.zoomIn=function(){var e=new o.Vector3(0,0,0),t=this.chatRooms[r.getRandomIntInRange(0,this.chatRooms.length-1)],n=t?new o.Vector3(3*t.x,3*t.y,0):o.Vector3.Zero(),i=o.Curve3.CreateHermiteSpline(this.camera.position,e,n,e,300).getPoints();this.cameraLocations=i},e}(),c=new(function(){function e(){this.afterLogin=function(){}}return e.prototype.init=function(){gapi.load("client",this.initClient.bind(this))},e.prototype.initClient=function(){var e=this;gapi.client.init({clientId:"380947346613-l6gvf9laj9fuko3ljph9ej99olo5qa3k.apps.googleusercontent.com",apiKey:"AIzaSyBmozdLmtDDry_ah4NhYPqOTeZ2wr9Er2A",discoveryDocs:["https://people.googleapis.com/$discovery/rest?version=v1"],scope:"profile"}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.get()?e.queryUser():e.setSignInButton()})},e.prototype.setSignInButton=function(){gapi.auth2.getAuthInstance().isSignedIn.listen(this.login.bind(this)),$("#signInWrapper").show(),$("#signinButton").on("click",function(){return gapi.auth2.getAuthInstance().signIn()})},e.prototype.queryUser=function(){var e=this;gapi.client.people.people.get({resourceName:"people/me","requestMask.includeField":"person.names"}).then(function(t){var n=t.result.names[0].displayName;e.setLoiginButton(n)})},e.prototype.setLoiginButton=function(e){$("#signInWrapper").show(),$("#signInWrapper .buttonText").text(e),$("#signinButton").on("click",this.login.bind(this))},e.prototype.login=function(){var e=$("#loginPanel");e.animate({opacity:0},2e3,function(){return e.hide()}),this.afterLogin()},e}());c.init();var l=new s;l.init(),c.afterLogin=l.zoomIn.bind(l)}]);