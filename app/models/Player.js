export class Player {
    constructor(name) {
      this.name = name;
      // Their score is defaulted to start at 0
      this.score = 0;
    }
    get PlayerTemplateCard(){
      return /*html*/`
          <div class ='card bg-success col-2 p-4 m-4'>
              <div class="card-body">
                  ${this.name} - ${this.score}
              </div>
              <button onclick="app.PlayersController.scorePoint('${this.name}')" > Score! </button> 
          </div>`
    }
}
