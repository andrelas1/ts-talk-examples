interface MyKeyboardEventListener {
  type: "mousemove";
  listener: (evt: KeyboardEvent) => {};
}


interface MyMouseEventListener {
  type: "keydown";
  listener: (evt: MouseEvent) => {};
}

type MyListeners = MyKeyboardEventListener | MyMouseEventListener;

const character = {
  move: (posX: number, posY: number) => {
    // move
  },
  shoot: () => {
    // shoot
  },
  defend: () => {
    // defend
  }
}


function registerEventListener(myListeners: MyListeners) {
  switch(myListeners.type) {
    case "mousemove":
      document.addEventListener(myListeners.type, (event: MouseEvent) => {
        character.move(event.movementX, event.movementY);
      })
      break;
    case "keydown": 
      document.addEventListener(myListeners.type, (event: KeyboardEvent) => {
        switch(event.key) {
          case "f":
            character.shoot();
            break;
          case "j":
            character.defend();
            break
          default:
            console.log('no action')
        }
      })
  }
}
