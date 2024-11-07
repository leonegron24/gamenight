export class Player {
    constructor(name, image) {
      this.name = name;
      this.image = image
      this.score = 0;
      this.showImage = false
    }
    get PlayerTemplateCard(){
      return /*html*/ `
          <div class ='card bg-success col-2 p-4 m-4'>
              <div class="card-body">
                  ${this.name} - ${this.score}
              </div>
              <button onclick="app.PlayersController.scorePoint('${this.name}')" > Score! </button>
              <button class = 'mt-4' onclick="app.PlayersController.addImage('${this.name}')" > ${this.showImage ? 'Hide' : 'Show' } Image </button>
              <img class="${this.showImage ? '': 'd-none'}" src=${this.image}>
          </div>
          `
          
    }
}
