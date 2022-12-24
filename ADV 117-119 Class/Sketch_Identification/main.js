function clearCanvas(){
    background('white')
}
function classifyCanvas(){
    classifier.classify(canvas, gotRusult)
}
function gotResult(error, results){
    if (error){
        console.error(error)
    } else {
        console.log(results)
        document.getElementById('drawing').innerHTML = 'Drawing: ' + results[0].label
        document.getElementById('confidence').innerHTML = 'Confidence: ~' + Math.round(results[0].confidence * 100) + '%'
    }
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}
function setup(){
    canvas = createCanvas(280, 280)
    canvas.center()
    background('white')
    canvas.mouseReleased(classifyCanvas)
}
function draw(){
    strokeWeight(12.5)
    stroke(0)
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
