function main() {
    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
    }

    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    //Step 2, draw a red vector v1 on a black canvas.
    // let v1 = new Vector3([2.25, 2.25, 0])
    // drawVector(v1, "red")
    
} 

function drawVector(v, color) {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    
    
    let x = canvas.width/2
    let y = canvas.height/2
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(x+v.elements[0] * 20, x-v.elements[1] * 20)
    ctx.stroke()
}

function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
    let v1 = new Vector3([document.getElementById('x1').value, document.getElementById('y1').value, 0])
    drawVector(v1, "red")

    let v2 = new Vector3([document.getElementById('x2').value, document.getElementById('y2').value, 0])
    drawVector(v2, "blue")
    return [v1,v2]
}

function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
    v = handleDrawEvent()
    let option = document.getElementById("operation").value
    let scalar = document.getElementById("scalar").value
    let v1 = v[0]
    let v2 = v[1]
    let v3 = new Vector3([0,0,0]);
    let v4 = new Vector3([0,0,0]);
    if(option === "Add") {
        v3.set(v1)
        v3.add(v2)
        drawVector(v3, "green")
    }
    else if(option === "Subtract") {
        v3.set(v1)
        v3.sub(v2)
        drawVector(v3, "green")
    }
    else if(option === "Multiply") {
        v3.set(v1)
        v3.mul(scalar)
        drawVector(v3, "green")

        v4.set(v2)
        v4.mul(scalar)
        drawVector(v4, "green")
    }
    else if(option === "Divide") {
        v3.set(v1)
        v3.div(scalar)
        drawVector(v3, "green")

        v4.set(v2)
        v4.div(scalar)
        drawVector(v4, "green")
    }
    else if(option === "Magnitude") {
        console.log("Magnitude v1: " + v1.magnitude())
        console.log("Magnitude v2: " + v2.magnitude())
    }
    else if(option === "Angle Between") {
        console.log("Angle: " + ((180/Math.PI)*Math.acos(Vector3.dot(v1, v2)/(v1.magnitude() * v2.magnitude()))))
    }
    else if(option === "Area") {
        console.log("Area: " + (Vector3.cross(v1,v2).magnitude()/2))
    }

}
