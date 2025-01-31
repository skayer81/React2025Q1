export class LocaleStorageAPI {
  #FIELD_NAME = 'skayer81ReactLS';

  saveRequest(request: string) {
    localStorage.setItem(this.#FIELD_NAME, JSON.stringify(request));
  }

  loadRequest() {
    const data = JSON.parse(localStorage.getItem(this.#FIELD_NAME) ?? '');
    return data;
  }

  hasSave() {
    return localStorage.getItem(this.#FIELD_NAME) !== null;
  }
}
