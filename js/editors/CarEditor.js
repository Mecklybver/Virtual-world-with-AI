class CarEditor extends MarkingEditor {
  constructor(viewport, world) {
    super(viewport, world, world.laneGuides);
  }

  createMarking(center, directionVector) {
    return new Car(
      center,
      directionVector,
      world.roadWidth / 2,
      world.roadWidth * 0.7
    );
  }
}
