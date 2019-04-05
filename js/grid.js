function grid(_width, _height, _depth) {
	this.array = [];
	this.width = _width;
	this.height = _height;
	this.depth = _depth;
	this.cellSize = 8;
	this.cellSelected = { x: 0, y: 0, z: 0 }
	this.temp = 0;
	this.drawAlpha = 0;
	this.fill = function () {
		for (i = 0; i < this.width; i++) {
			this.array[i] = [];
			for (j = 0; j < this.height; j++) {
				this.array[i][j] = [];
				for (k = 0; k < this.depth; k++) {
					this.array[i][j][k] = new cell("none");
				}

			}
		}
	}
	this.draw = function () {
		//adding the grid dots
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				ctx.fillStyle = "rgba(30,30,30,1)";
				ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize / 5, this.cellSize / 5);
			}
		}
		for (k = 0; k < this.depth; k++) {
			//changing the opacity of the components based on the layer they're on
			if (k == this.cellSelected.z) {
				this.drawAlpha = 1;
			}
			else if (this.cellSelected.z < k) {
				this.drawAlpha = 0.3;
			}
			else if (this.cellSelected.z > k) {
				this.drawAlpha = 0.3;
			}
			for (i = 0; i < this.width; i++) {
				for (j = 0; j < this.height; j++) {
					switch (this.array[i][j][k].type) {
						//drawing the components on the grid
						case "wire":
							switch (this.array[i][j][k].wireType) {
								case 1:
									switch (this.array[i][j][k].state) {
										case 0:
											ctx.fillStyle = "rgba(250,60,60, " + this.drawAlpha + ")";
											break;
										case 1:
											ctx.fillStyle = "rgba(255,180,180, " + this.drawAlpha + ")";
											break;
									}
									break;
								case 2:
									switch (this.array[i][j][k].state) {
										case 0:
											ctx.fillStyle = "rgba(60,60,255, " + this.drawAlpha + ")";
											break;
										case 1:
											ctx.fillStyle = "rgba(180,180,255, " + this.drawAlpha + ")";
											break;
									}
									break;
							}
							var temp = this.array[i][j][k].wireType;
							ctx.fillRect(i * this.cellSize + (this.cellSize / 2) - 2, j * this.cellSize + (this.cellSize / 2) - 2, 4, 4);
							if (i > 0) {
								if (this.array[i - 1][j][k].type == "wire" && this.array[i - 1][j][k].wireType == temp || this.array[i - 1][j][k].type == "inverter" || this.array[i - 1][j][k].type == "via" || this.array[i - 1][j][k].type == "source" || this.array[i - 1][j][k].type == "viaReceiver" || this.array[i - 1][j][k].type == "and" || this.array[i - 1][j][k].type == "or" || this.array[i - 1][j][k].type == "xor") {
									ctx.fillRect(i * this.cellSize, j * this.cellSize + (this.cellSize / 2) - 1, this.cellSize / 2, 2);
								}
							}
							if (i < this.width - 1) {
								if (this.array[i + 1][j][k].type == "wire" && this.array[i + 1][j][k].wireType == temp || this.array[i + 1][j][k].type == "inverter" || this.array[i + 1][j][k].type == "via" || this.array[i + 1][j][k].type == "source" || this.array[i + 1][j][k].type == "viaReceiver" || this.array[i + 1][j][k].type == "and" || this.array[i + 1][j][k].type == "or" || this.array[i + 1][j][k].type == "xor") {
									ctx.fillRect(i * this.cellSize + (this.cellSize / 2) - 1, j * this.cellSize + (this.cellSize / 2) - 1, this.cellSize / 2 + 1, 2);
								}
							}
							if (j > 0) {
								if (this.array[i][j - 1][k].type == "wire" && this.array[i][j - 1][k].wireType == temp || this.array[i][j - 1][k].type == "inverter" || this.array[i][j - 1][k].type == "via" || this.array[i][j - 1][k].type == "source" || this.array[i][j - 1][k].type == "viaReceiver" || this.array[i][j - 1][k].type == "and" || this.array[i][j - 1][k].type == "or" || this.array[i][j - 1][k].type == "xor") {
									ctx.fillRect(i * this.cellSize + (this.cellSize / 2) - 1, j * this.cellSize, 2, this.cellSize / 2);
								}
							}
							if (j < this.height - 1) {
								if (this.array[i][j + 1][k].type == "wire" && this.array[i][j + 1][k].wireType == temp || this.array[i][j + 1][k].type == "inverter" || this.array[i][j + 1][k].type == "via" || this.array[i][j + 1][k].type == "source" || this.array[i][j + 1][k].type == "viaReceiver" || this.array[i][j + 1][k].type == "and" || this.array[i][j + 1][k].type == "or" || this.array[i][j + 1][k].type == "xor") {
									ctx.fillRect(i * this.cellSize + (this.cellSize / 2) - 1, j * this.cellSize + (this.cellSize / 2) - 1, 2, this.cellSize / 2 + 1);
								}
							}

							break;

						case "source":
							ctx.fillStyle = "rgba(255, 255, 255, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "inverter":
							ctx.fillStyle = "rgba(20, 20, 250, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "via":
							ctx.fillStyle = "rgba(20, 250, 20, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "viaReceiver":
							ctx.fillStyle = "rgba(250, 20, 20, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "and":
							ctx.fillStyle = "rgba(100, 100, 255, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "or":
							ctx.fillStyle = "rgba(100, 255, 100, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "xor":
							ctx.fillStyle = "rgba(250, 100, 100, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
						case "diode":
							ctx.fillStyle = "rgba(190, 210, 245, " + this.drawAlpha + ")";
							ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
							break;
					}
					//drawing the cell selector
					if (this.cellSelected.x == i && this.cellSelected.y == j) {
						ctx.fillStyle = "rgb(60,250,100)"
						ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, 2);
						ctx.fillRect(i * this.cellSize, j * this.cellSize, 2, this.cellSize);
						ctx.fillRect(i * this.cellSize, j * this.cellSize + this.cellSize - 2, this.cellSize, 2);
						ctx.fillRect(i * this.cellSize + this.cellSize - 2, j * this.cellSize, 2, this.cellSize);
					}

				}
			}
		}
		//drawing the layer UI
		for (i = 0; i < this.depth; i++) {
			ctx.fillStyle = "rgba(110, 110, 110, 1)";
			if (this.cellSelected.z == i) {
				ctx.fillStyle = "rgba(250, 250, 250, 1)";
			}

			ctx.fillRect(500, i * 20, 15, 15);
		}
	}
	this.update = function () {
		//evaluating component values
		for (l = 0; l < 1; l++) {
			for (k = 0; k < this.depth; k++) {
				for (i = 0; i < this.width; i++) {
					for (j = 0; j < this.height; j++) {
						if (this.array[i][j][k].type == "inverter") {
							this.inverterCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "via") {
							this.viaCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "viaReceiver") {
							this.viaReceiverCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "and") {
							this.andCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "or") {
							this.orCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "xor") {
							this.xorCheck(i, j, k);
						}
						if (this.array[i][j][k].type == "diode") {
							this.diodeCheck(i, j, k);
						}
					}
				}
			}
		}
		//resetting all wires states to 0
		for (k = 0; k < this.depth; k++) {
			for (i = 0; i < this.width; i++) {
				for (j = 0; j < this.height; j++) {
					if (this.array[i][j][k].type == "wire") {
						this.array[i][j][k].state = 0;
					}
				}
			}
		}
		//propogate all signals from components
		for (k = 0; k < this.depth; k++) {
			for (i = 0; i < this.width; i++) {
				for (j = 0; j < this.height; j++) {
					if (this.array[i][j][k].type == "inverter") {
						this.inverterPropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "viaReceiver") {
						this.viaReceiverPropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "source") {
						this.sourcePropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "and") {
						this.andPropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "or") {
						this.orPropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "xor") {
						this.xorPropagate(i, j, k);
					}
					if (this.array[i][j][k].type == "diode") {
						this.diodePropagate(i, j, k);
					}
				}
			}
		}
	}

	this.propagateSignal = function (a, b, c) {
		if (this.array[a][b][c].state == 1) {
			var temp = this.array[a][b][c].wireType;
			if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].wireType == temp && this.array[a - 1][b][c].state == 0) {
				this.array[a - 1][b][c].state = 1;
				this.propagateSignal(a - 1, b, c);
			}
			if (this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].wireType == temp && this.array[a + 1][b][c].state == 0) {
				this.array[a + 1][b][c].state = 1;
				this.propagateSignal(a + 1, b, c);
			}
			if (this.array[a][b - 1][c].type == "wire" && this.array[a][b - 1][c].wireType == temp && this.array[a][b - 1][c].state == 0) {
				this.array[a][b - 1][c].state = 1;
				this.propagateSignal(a, b - 1, c);
			}
			if (this.array[a][b + 1][c].type == "wire" && this.array[a][b + 1][c].wireType == temp && this.array[a][b + 1][c].state == 0) {
				this.array[a][b + 1][c].state = 1;
				this.propagateSignal(a, b + 1, c);
			}
			if (this.array[a - 1][b][c].type == "via" && this.array[a - 1][b][c].direction == "down" && this.array[a - 1][b][c + 1].state == 0) {
				this.array[a - 1][b][c + 1].state = 1;
				this.propagateSignal(a - 1, b, c);
			}
			if (this.array[a + 1][b][c].type == "via" && this.array[a - 1][b][c].direction == "down" && this.array[a + 1][b][c + 1].state == 0) {
				this.array[a + 1][b][c + 1].state = 1;
				this.propagateSignal(a + 1, b, c + 1);
			}
			if (this.array[a][b - 1][c].type == "via" && this.array[a - 1][b][c].direction == "down" && this.array[a][b - 1][c + 1].state == 0) {
				this.array[a][b - 1][c + 1].state = 1;
				this.propagateSignal(a, b - 1, c + 1);
			}
			if (this.array[a][b + 1][c].type == "via" && this.array[a - 1][b][c].direction == "down" && this.array[a][b + 1][c + 1].state == 0) {
				this.array[a][b + 1][c + 1].state = 1;
				this.propagateSignal(a, b + 1, c + 1);
			}
		}
	}
	this.inverterCheck = function (a, b, c) {
		if (this.array[a][b + 1][c].type == "wire" && this.array[a][b + 1][c].state == 1) {
			this.array[a][b][c].state = 0;
		}
		else {
			this.array[a][b][c].state = 1;
		}
	}
	this.inverterPropagate = function (a, b, c) {

		if (this.array[a][b][c].state == 1 && this.array[a][b - 1][c].type == "wire") {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}

	}
	this.sourcePropagate = function (a, b, c) {
		if (this.array[a][b + 1][c].type == "wire") {
			this.array[a][b + 1][c].state = 1;
			this.propagateSignal(a, b + 1, c);
		}
		if (this.array[a][b - 1][c].type == "wire") {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}
		if (this.array[a + 1][b][c].type == "wire") {
			this.array[a + 1][b][c].state = 1;
			this.propagateSignal(a + 1, b, c);
		}
		if (this.array[a - 1][b][c].type == "wire") {
			this.array[a - 1][b][c].state = 1;
			this.propagateSignal(a - 1, b, c);
		}
	}
	this.andCheck = function (a, b, c) {
		if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].state == 1 && this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else {
			this.array[a][b][c].state = 0;
		}
	}
	this.andPropagate = function (a, b, c) {
		if (this.array[a][b][c].state == 1) {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}
	}
	this.orCheck = function (a, b, c) {
		if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].state == 1 || this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else {
			this.array[a][b][c].state = 0;
		}
	}
	this.orPropagate = function (a, b, c) {
		if (this.array[a][b][c].state == 1) {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}
	}
	this.xorCheck = function (a, b, c) {
		if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].state == 1 || this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else {
			this.array[a][b][c].state = 0;
		}
		if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].state == 1 && this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].state == 1) {
			this.array[a][b][c].state = 0;
		}
	}
	this.xorPropagate = function (a, b, c) {

		if (this.array[a][b][c].state == 1) {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}
	}
	this.viaReceiverCheck = function (a, b, c) {
		this.array[a][b][c].state = 0;
		if (c > 0) {
			if (this.array[a][b][c - 1].type == "via" && this.array[a][b][c - 1].state == 1) {
				this.array[a][b][c].state = 1;
			}
		}
		if (c < this.depth - 1) {
			if (this.array[a][b][c + 1].type == "via" && this.array[a][b][c + 1].state == 1) {
				this.array[a][b][c].state = 1;
			}
		}
	}
	this.viaReceiverPropagate = function (a, b, c) {
		if (this.array[a][b][c].state == 1) {
			if (this.array[a][b + 1][c].type == "wire") {
				this.array[a][b + 1][c].state = 1;
				this.propagateSignal(a, b + 1, c);
			}
			if (this.array[a][b - 1][c].type == "wire") {
				this.array[a][b - 1][c].state = 1;
				this.propagateSignal(a, b - 1, c);
			}
			if (this.array[a + 1][b][c].type == "wire") {
				this.array[a + 1][b][c].state = 1;
				this.propagateSignal(a + 1, b, c);
			}
			if (this.array[a - 1][b][c].type == "wire") {
				this.array[a - 1][b][c].state = 1;
				this.propagateSignal(a - 1, b, c);
			}
		}
	}
	this.viaCheck = function (a, b, c) {
		if (this.array[a][b + 1][c].type == "wire" && this.array[a][b + 1][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else if (this.array[a][b - 1][c].type == "wire" && this.array[a][b - 1][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else if (this.array[a + 1][b][c].type == "wire" && this.array[a + 1][b][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else if (this.array[a - 1][b][c].type == "wire" && this.array[a - 1][b][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else {
			this.array[a][b][c].state = 0;
		}
	}
	this.diodeCheck = function (a, b, c) {
		if (this.array[a][b + 1][c].type == "wire" && this.array[a][b + 1][c].state == 1) {
			this.array[a][b][c].state = 1;
		}
		else {
			this.array[a][b][c].state = 0;
		}

	}
	this.diodePropagate = function (a, b, c) {
		if (this.array[a][b][c].state == 1 && this.array[a][b - 1][c].type == "wire") {
			this.array[a][b - 1][c].state = 1;
			this.propagateSignal(a, b - 1, c);
		}
	}
	this.addInverter = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "inverter";
	}
	this.addDiode = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "diode";
	}
	this.addWire = function (_type) {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "wire";
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].wireType = _type;
	}
	this.addVia = function (_direction) {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "via";
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].direction = _direction;
	}
	this.addViaReceiver = function (_direction) {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "viaReceiver";
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].direction = _direction;
	}
	this.addSource = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "source";
	}
	this.addAnd = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "and";
	}
	this.addOr = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "or";
	}
	this.addXor = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "xor";
	}
	this.deleteCell = function () {
		this.array[this.cellSelected.x][this.cellSelected.y][this.cellSelected.z].type = "none";
	}
	this.addWireMouse = function () {
		if (Math.floor(mouse.x / this.cellSize) >= 0 && Math.floor(mouse.x / this.cellSize) < this.width && Math.floor(mouse.y / this.cellSize) >= 0 && Math.floor(mouse.y / this.cellSize) < this.height) {
			this.array[Math.floor(mouse.x / this.cellSize)][Math.floor(mouse.y / this.cellSize)][this.cellSelected.z].type = "wire";
			this.array[Math.floor(mouse.x / this.cellSize)][Math.floor(mouse.y / this.cellSize)][this.cellSelected.z].wireType = 1;
		}

	}
}