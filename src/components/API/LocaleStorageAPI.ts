export class LocaleStorageAPI {
  #FIELD_NAME = 'skayer81ReactLS';

  saveRequest(request: string) {
    localStorage.setItem(this.#FIELD_NAME, JSON.stringify(request));
  }

  loadRequest() {
    try {
      const data = JSON.parse(localStorage.getItem(this.#FIELD_NAME) ?? '');
      return data;
    } catch {
      return '';
    }
  }

  hasSave() {
    return localStorage.getItem(this.#FIELD_NAME) !== null;
  }
}
