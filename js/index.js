AFRAME.registerComponent('enlace', {
  schema: {type: 'string'},

  init: function () {
  	this.el.addEventListener("click", ()=>{
    	window.open(this.data, '_blank')
    })
  }
});

AFRAME.registerComponent('followed', {

  init: function () {
  	var follower = document.querySelector("#follower")
  },
  tick: function () {
  	let x = this.el.object3D.position.x - follower.object3D.position.x
  	let z = this.el.object3D.position.z - follower.object3D.position.z
  	let m =  (this.el.object3D.position.x - follower.object3D.position.x) / (this.el.object3D.position.z - follower.object3D.position.z)
  	
  	follower.object3D.rotation.y = z > 0 ? Math.atan(m) : Math.atan(m) + Math.PI;


  }
});
