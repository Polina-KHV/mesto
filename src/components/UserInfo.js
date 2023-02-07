export default class UserInfo {

  constructor ({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
        this._profileInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    };

    return this._profileInfo
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}