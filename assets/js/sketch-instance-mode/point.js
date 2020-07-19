let Body = Matter.Body;

class Point {
  constructor(p, x, y, radius, body) {
    this.p = p
    this.color = 'white'
    this.sx = x
    this.sy = y
    this.body = body
  }

  draw(p) {
    this.p.noStroke()
    this.p.fill(this.color)
    let pos = this.body.position;
    this.p.vertex(pos.x, pos.y)
  }

  update(p) {
    let d = this.p.dist(this.sx, this.sy, this.p.mouseX, this.p.mouseY)

    if (d <= 80) {
      this.updateMouseRepel()
    } else {
      this.updateGoToPosition()
    }
  }

  updateMouseRepel() {
    let v = this.p.createVector(
      this.body.position.x - this.p.mouseX,
      this.body.position.y - this.p.mouseY
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
    return this.p.dist(
      this.body.position.x, this.body.position.y,
      otherPt.body.position.x, otherPt.body.position.y)
  }
}
