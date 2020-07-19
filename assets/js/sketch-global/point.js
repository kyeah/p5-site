let Body = Matter.Body;

class Point {
  constructor(x, y, radius, body) {
    this.color = 'white'
    this.sx = x
    this.sy = y
    this.body = body
  }

  draw() {
    noStroke()
    fill(this.color)
    let pos = this.body.position;
    vertex(pos.x, pos.y)
  }

  update() {
    let d = dist(this.sx, this.sy, mouseX, mouseY)

    if (d <= 80) {
      this.updateMouseRepel()
    } else {
      this.updateGoToPosition()
    }
  }

  updateMouseRepel() {
    let v = createVector(
      this.body.position.x - mouseX,
      this.body.position.y - mouseY
    )

    v.setMag(1)

    Body.setVelocity(this.body, {
      x: v.x,
      y: v.y
    })
  }

  updateGoToPosition() {
    // Head to your letter spot
    let dx = this.sx - this.body.position.x
    let dy = this.sy - this.body.position.y

    Body.setVelocity(this.body, {
      x: dx / 5,
      y: dy / 5
    })
  }
  
  distanceTo(otherPt) {
    return dist(
      this.body.position.x, this.body.position.y,
      otherPt.body.position.x, otherPt.body.position.y)
  }
}
