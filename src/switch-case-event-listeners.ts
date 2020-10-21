// UNION TYPES AND SWITCH CASE
interface MyKeyboardEventListener {
  type: "keydown";
  action: (key: string) => void;
}

interface MyMouseEventListener {
  type: "mousemove";
  action: (posX: number, posY: number) => void;
}

type MyListener = MyKeyboardEventListener | MyMouseEventListener;

function registerEventListener(myListener: MyListener) {
  switch (myListener.type) {
    case "mousemove":
      document.addEventListener("mousemove", (event: MouseEvent) => {
        myListener.action(event.movementX, event.movementY)
      });
      break;
    case "keydown":
      document.addEventListener(myListener.type, (event: KeyboardEvent) => {
        myListener.action(event.key);
      });
  }
}