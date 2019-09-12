## 2D digital logic simulator

# Controls:

SHIFT: move 2 cells at a time

Z: add via
SHIFT Z: add via reciever

WASD: navigate grid

UP ARROW: move up a layer
DOWN ARROW: move down a layer

ESCAPE: delete cell

SPACE: add wire

R: add inverter

F: add power source

C: add AND gate

V: add OR gate

B: add XOR gate

T: add Diode

MOUSE LEFT CLICK: add wire where the cursor is

# Inputs and outputs for components:

Diodes and Inverters take input from the cell below and output to the cell above

Power sources output to all adjacent cells (but not diagonally)

Vias take input from all adjacent cells on the layer that are on and output to the cell directly above or below depending on the type of via

Via recievers take input input from a via either one layer above or one layer below depending on the type of via and reciever and output to all adjacent cells

AND and OR gates take input from the left and right cells and output to the cell above

# Images

Left to right: inverter, AND gate, OR gate, XOR gate, DIODE, then the same with different input values

![image 1](/readme_images/6.png)

A simple binary adder that adds 2 2 bit numbers to get a 3 bit number:

Top Layer:

![image 1](/readme_images/2.png)

Lower Layer, showing use of vias
![image 2](/readme_images/1.png)

adding 1( 0 1) to 0 ( 0 0) to get 1 ( 0 0 1)
![image 3](/readme_images/3.png)

adding 2( 1 0) to 2 ( 1 0) to get 4 ( 1 0 0)
![image 4](/readme_images/4.png)

adding 3( 1 1) to 2 ( 1 0) to get 5 ( 1 0 1)
![image 5](/readme_images/5.png)