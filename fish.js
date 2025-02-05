var fish;

class Scene extends Phaser.Scene {
  preload() {
    this.load.image("background", "assets/bg_azul-claro.png");
    this.load.image("logo", "assets/logo-inteli_branco.png");
    this.load.image("fish", "assets/peixes/concha.png");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.image(400, 525, "logo").setScale(0.5);

    fish = this.add.image(400, 300, "fish").setOrigin(0.5, 0.5);
    fish.setFlip(true, false);
  }

  update() {
    fish.x = this.input.x;
    fish.y = this.input.y;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: Scene,
};

const game = new Phaser.Game(config);
