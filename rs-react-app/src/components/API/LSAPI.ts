export class LSAPI {
  #FIELD_NAME = 'skayer81ReactLS';

  saveRequest(request: string) {
    localStorage.setItem(this.#FIELD_NAME, JSON.stringify(request));
  }

  loadRequest() {
    const data = JSON.parse(localStorage.getItem(this.#FIELD_NAME) ?? '');
    return data;
  }

  hasSave() {
    if (localStorage.getItem(this.#FIELD_NAME) !== null) {
      return true;
    } else {
      return false;
    }
  }
}
