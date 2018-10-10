// Enemies our player must avoid
var Enemy = function(startPosition, speed, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // Cada inimigo possui uma posição inicial determinada na hora
    // de sua instanciação, assim como a qual linha (trilha de rocha)
    // ele irá andar e qual a sua velocidade de movimentação
    this.startPosition = startPosition;
    this.x = startPosition;
    if (row == 1)
      this.y = 230;
    else if (row == 2)
      this.y = 147;
    else if (row == 3)
      this.y = 64;
    this.speed = speed;
    this.row = row;
    this.colum = 0;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // A função de update do inimigo faz o inimigo andar a partir
    // da fórmula abaixo, e verifica se o inimigo saiu do mapa,
    // resetando sua posição em caso positivo
    this.x += this.speed * dt;
    if (this.x >= 500)
      this.x = this.startPosition;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  // O jogador uma posição inicial padrão
  this.startPosition = {x : 101*2, y : 81*5};
  this.x = 101*2;
  this.y = 81*5;
  this.sprite = "images/char-boy.png";
};
Player.prototype.update = function(dt) {
  // A função update do jogador verifica se o jogador chegou na água,
  // e em caso afirmativo leva ele para sua posição inicial
  if (this.y == -10)
  {
    this.x = this.startPosition.x;
    this.y = this.startPosition.y;
  }
};
//A função de renderização do player é igual à do inimigo
Player.prototype.render = Enemy.prototype.render;

Player.prototype.handleInput = function(key) {
  // A função handleInput controla a movimentação do player
  // dentro do cenário do jogo, não deixando ele sair do mesmo
  if (key == "up" && this.y-83 >= -10)
    this.y -= 83;
  else if (key == "down" && this.y+83 <= 405)
    this.y += 83;
  else if (key == "left" && this.x-101 >= 0)
    this.x -= 101;
  else if (key == "right" && this.x+101 <= 404)
    this.x += 101;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-500, 200, 1), new Enemy(-100, 100, 1), new Enemy(-200, 150, 2), new Enemy(-400, 110, 2), new Enemy(-300, 140, 3)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
