export default class UserInfo{
    constructor({profileTitleSelector,profileSubtitleSelector}){
        this._profileTitleSelector= profileTitleSelector
        this._profileSubtitleSelector= profileSubtitleSelector
        this._profileTitle = document.querySelector(this._profileTitleSelector);
        this._profileSubtitle = document.querySelector(this._profileSubtitleSelector);

    }

getUserInfo(){
    return  {
        profileTitle: this.profileTitle.textContent,
        profileSubtitle: this.profileSubtitle.textContent
    }
   
}

setUserInfo({name,info}){
    this._profileTitle.textContent = name
    this._profileSubtitle.textContent = info
}
}