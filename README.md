# 2D_digital_logic_simulator

Controls:

SHIFT: move 2 cells at a time

SHIFT Z: add via reciever down
SHIFT Q: add via reciever up

Z: add via down
Q: add via up

WASD: navigate grid

UP ARROW: move up a layer
DOWN ARROW: move down a layer

ESCAPE: delete cell

SPACE: add wire

R: add inverter

F: add power source

C: add AND gate

v: add OR gate

T: add Diode

MOUSE LEFT CLICK: add wire where the cursor is

B: update grid

Inputs and outputs for components:

Diodes and Inverters take input from the cell below and output to the cell above

Power sources output to all adjacent cells (but not diagonally)

Vias take input from all adjacent cells on the layer that are on and output to the cell directly above or below depending on the type of via

Via recievers take input input from a via either one layer above or one layer below depending on the type of via and reciever and output to all adjacent cells

AND and OR gates take input from the left and right cells and output to the cell above