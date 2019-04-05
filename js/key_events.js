
function mouseDown(event) {
keys.mouseLeft = 1;	
}

function mouseUp(event) {
keys.mouseLeft = 0;	
}

function onKeyDown(event) {

    var e = event.keyCode;

    switch (e)
    {
        case 68:
            keys.d = true;
            break;
            
        case 16:
            keys.shift = true;
            break;


        case 65:
            keys.a = true;
            break;

        case 81:
            keys.q = true;
            break;
			
       case 82:
            keys.r = true;
            break;
			
        case 32:

            keys.space = true;
            break;

        case 87:
            keys.w = true;
            break;

        case 83:
            keys.s = true;
            break;

        case 27:
            keys.escape = true;
            break;
			
        case 38:
            keys.up = true;
            break;
			
        case 40:
            keys.down = true;
            break;
			
        case 90:
            keys.z = true;
            break;

        case 70:
            keys.f = true;
            break;
        case 67:
            keys.c = true;
            break;
        case 86:
            keys.v = true;
            break;
        case 66:
            keys.b = true;
            break;
        case 84:
            keys.t = true;
            break;
    }
}

function onKeyUp(event) {

    var k = event.keyCode;

    switch (k) {
        case 68:
            keys.d = false;
            break;
            
         case 16:
            keys.shift = false;
            break;

        case 65:
            keys.a = false;
            break;
			
        case 81:
            keys.q = false;
            break;
			
       case 82:
            keys.r = false;
            break;

        case 32:

            keys.space = false;

            break;

        case 87:
            keys.w = false;
            break;

        case 83:
            keys.s = false;
            break;

        case 27:
            keys.escape = false;
            break;
			
        case 38:
            keys.up = false;
            break;
			
        case 40:
            keys.down = false;
            break;
			
        case 90:
            keys.z = false;
            break;
			
        case 70:
            keys.f = false;
            break;
        case 67:
            keys.c = false;
            break;
        case 86:
            keys.v = false;
            break;
        case 66:
            keys.b = false;
            break;
        case 84:
            keys.t = false;
            break;
    }
}

