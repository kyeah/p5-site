p5.disableFriendlyErrors = true

let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Constraint = Matter.Constraint;

let engine;
let world;

let txt = "SPACE"
let fontSize = 100

let font
let points
let pointRadius = 2

function preload() {
  font = loadFont('assets/fonts/Raleway-Black.ttf')
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  fontSize = min(windowWidth, windowHeight) / 4;
  textFont(font)

  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;

  bounds = font.textBounds(txt, 0, 0, fontSize)
  points = font.textToPoints(txt, 0, 0, fontSize, {
    sampleFactor: 0.30
  })

  let prevPt = points[0]

  let ptBodyOptions = {
    friction: 0.0,
    restitution: 0.95,
    density: 1
  }
         
  points = points
    .map(centerAndNormalizePt)
    .map((pt) => {    
      let x = pt.x + width/2
      let y = pt.y + height/2
      let body = Bodies.circle(x, y, 1, ptBodyOptions);
      World.add(world, body);

      return new Point(x, y, pointRadius, body)
    })

  setupPointConstraints()
}

function draw() {
  background("#363636");
  Engine.update(engine)
  drawShape()
}

function drawShape() {
  beginShape()

  let prevPt = points[0]
  let inContour = false
  for (let pt of points) {
    let dist = prevPt.distanceTo(pt)
    if (dist > 20) {
      if (inContour) {
        endContour()
      }
      beginContour()
      inContour = true
    }

    pt.draw()
    pt.update()
    prevPt = pt
  }

  endContour()
  endShape()
}

function centerAndNormalizePt(pt) {
  point = {
    ...pt,
    x: pt.x - bounds.x - bounds.w / 2,
    y: pt.y - bounds.y - bounds.h / 2
  }

  return point
}

function setupPointConstraints() {
  let firstPtIdx = 0

  for (let i = 0; i < points.length - 2; i++) {
    let dist = points[i].distanceTo(points[i + 1])

    let nextPt
    if (dist < 20) {
      // Link this point to the next point in the path
      nextPt = points[i + 1]
    } else {
      // Probably reached a counter — link this point back to the first point
      // of the current shape/counter.
      nextPt = points[firstPtIdx]
      dist = points[i].distanceTo(nextPt)
      firstPtIdx = i + 1
    }

    addConstraint(points[i].body, nextPt.body, dist)
  }

  // Close off the last shape
  addConstraint(
    points[points.length - 1].body,
    points[firstPtIdx].body,
    points[points.length - 1].distanceTo(points[firstPtIdx])
  )
}

function addConstraint(bodyA, bodyB, len) {
  var options = {
    bodyA,
    bodyB,
    length: len,
    damping: 1.0,
    stiffness: 1.2
  }

  var constraint = Constraint.create(options);
  World.add(world, constraint);
}
