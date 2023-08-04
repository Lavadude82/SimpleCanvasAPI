const deg2rad = Math.PI / 180;
const rad2deg = 180 / Math.PI;
class Sprite {
  constructor() {}
  setCostume(src) {}
  render(context,settings) {
    let ctx = document.createElement("canvas").getContext("2d");
    context.rotate(deg2rad*(settings.rotation||0));
  }
}
