import { observable, action, computed } from 'mobx';

class BirdStore {
    @observable birds = [];

    @action addBirds(bird) {
        this.birds.push(bird);
    }

    @action removeBirds(index) {
        this.birds.splice(index, 1);
    }

    @computed get birdCount() {
        return this.birds.length;
    }
}

const store = new BirdStore();
export default store;
