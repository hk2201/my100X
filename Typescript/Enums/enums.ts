// Feature that allows to define and store a set of constants

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// enum Direction {
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4
// }

function doSomething(keyPressed: Direction) {
    if (keyPressed == Direction.Up) {
        console.log("Do Something");
    }
}

doSomething(Direction.Up);