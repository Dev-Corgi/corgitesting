export default class MovingMotion  {
    constructor(deltaX, deltaY,unit,delay,duration,easetype) {
      this.ref = null
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.unit = unit
      this.motion = {
      x:0,y:0,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        },
    };
    }

    linkRef(ref){
      this.ref = ref
    }
  
    handleMotion() {

      const Matrix = new DOMMatrix(window.getComputedStyle(this.ref.current).transform)

      this.motion = {
        x: `${Matrix.e += this.deltaX}${this.unit}`,
        y:`${Matrix.f += this.deltaY}${this.unit}`,
        transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      },
    }
      return this.motion
    }

  }