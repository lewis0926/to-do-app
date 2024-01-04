export interface TodoInterface {
  title: string;
  details: string;
}

export class Todo implements TodoInterface {
  _id: string;
  title: string;
  details: string;

  constructor (_id: string, title: string, details: string) {
    this._id = _id;
    this.title = title;
    this.details = details;
  }
}