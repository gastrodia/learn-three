import"./main-ef7dcc1b.js";import{a as V,e as ie,X as E,bb as k,R as q,bc as I,C as G,V as U,ac as ne,b9 as oe,E as se,ay as ae,aP as N,bd as re,S as le,b as ce,A as ue,d as ve,M as de,D as fe,as as me,W as pe}from"./d-three.module-26890fb1.js";import{O as he}from"./d-OrbitControls-34f74cf0.js";import{i as we}from"./d-dat.gui.module-dd30c9f2.js";import{R as xe}from"./d-RectAreaLightUniformsLib-f9134cd7.js";class y extends V{constructor(){super(y.Geometry,new ie({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new E,o=new E,l=new k(16,16,q),c=new k(16,16,q),u=y.Geometry,P=new I({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),A=new I({uniforms:{map:{value:l},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),H=new V(u,P),v=[],_=s.Shader,d=new I({uniforms:{map:{value:null},occlusionMap:{value:c},color:{value:new G(16777215)},scale:{value:new U},screenPosition:{value:new E}},vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:ne,transparent:!0,depthWrite:!1}),K=new V(u,d);this.addElement=function(n){v.push(n)};const C=new U,f=new U,B=new oe,e=new re;this.onBeforeRender=function(n,O,m){n.getCurrentViewport(e);const Q=e.w/e.z,X=e.z/2,j=e.w/2;let p=16/e.w;if(C.set(p*Q,p),B.min.set(e.x,e.y),B.max.set(e.x+(e.z-16),e.y+(e.w-16)),o.setFromMatrixPosition(this.matrixWorld),o.applyMatrix4(m.matrixWorldInverse),!(o.z>0)&&(t.copy(o).applyMatrix4(m.projectionMatrix),f.x=e.x+t.x*X+X-8,f.y=e.y+t.y*j+j-8,B.containsPoint(f))){n.copyFramebufferToTexture(f,l);let h=P.uniforms;h.scale.value=C,h.screenPosition.value=t,n.renderBufferDirect(m,null,u,P,H,null),n.copyFramebufferToTexture(f,c),h=A.uniforms,h.scale.value=C,h.screenPosition.value=t,n.renderBufferDirect(m,null,u,A,H,null);const Z=-t.x*2,$=-t.y*2;for(let L=0,ee=v.length;L<ee;L++){const w=v[L],x=d.uniforms;x.color.value.copy(w.color),x.map.value=w.texture,x.screenPosition.value.x=t.x+Z*w.distance,x.screenPosition.value.y=t.y+$*w.distance,p=w.size/e.w;const te=e.w/e.z;x.scale.value.set(p*te,p),d.uniformsNeedUpdate=!0,n.renderBufferDirect(m,null,u,d,K,null)}}},this.dispose=function(){P.dispose(),A.dispose(),d.dispose(),l.dispose(),c.dispose();for(let n=0,O=v.length;n<O;n++)v[n].texture.dispose()}}}class s{constructor(t,o=1,l=0,c=new G(16777215)){this.texture=t,this.size=o,this.distance=l,this.color=c}}s.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};y.Geometry=function(){const r=new se,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),o=new ae(t,5);return r.setIndex([0,1,2,0,2,3]),r.setAttribute("position",new N(o,3,0,!1)),r.setAttribute("uv",new N(o,2,3,!1)),r}();const ye="/learn-three/assets/d-lensflare0-cc6aae5d.png",ge="/learn-three/assets/d-lensflare3-b777765d.png";xe.init();const{innerWidth:T,innerHeight:W}=window,R=new we.GUI,g=new le,S=new ce(45,T/W,.1,1e3);S.position.set(-10,10,40);S.lookAt(g.position);const be=new ue(1842204);g.add(be);const Me=new ve(60,40,120,120),Pe=new de({color:16777215}),D=new V(Me,Pe);D.name="plane";D.receiveShadow=!0;D.rotation.x=-(Math.PI/2);g.add(D);const i=new fe(3355443);i.position.set(20,5,-20);i.castShadow=!0;i.shadow.camera.near=1;i.shadow.camera.far=80;i.shadow.camera.left=-20;i.shadow.camera.right=20;i.shadow.camera.top=20;i.shadow.camera.bottom=-20;i.intensity=1;i.shadow.mapSize.width=T;i.shadow.mapSize.height=W;g.add(i);const Y=new me,Ve=Y.load(ye),F=Y.load(ge),b=new G(65280),a=new y,z=new s(Ve,350,0,b);a.addElement(z);a.addElement(new s(F,60,.6,b));a.addElement(new s(F,70,.7,b));a.addElement(new s(F,120,.9,b));a.addElement(new s(F,70,1,b));i.add(a);R.addColor(z,"color");R.add(z,"size",0,500);R.add(z,"distance",0,1);const M=new pe({antialias:!0});M.setSize(T,W);M.shadowMap.enabled=!0;document.body.appendChild(M.domElement);new he(S,M.domElement);const J=()=>{requestAnimationFrame(J),M.render(g,S)};J();
