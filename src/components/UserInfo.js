export default class UserInfo{
    constructor({profileTitleSelector,profileSubtitleSelector}){
        this._profileTitleSelector= profileTitleSelector
        this._profileSubtitleSelector= profileSubtitleSelector
        this._profileTitle = document.querySelector(this._profileTitleSelector);
        this._profileSubtitle = document.querySelector(this._profileSubtitleSelector);

    }

getUserInfo(){
    this._userData = {    
        nameData: this._profileTitle.textContent,
        infoData: this._profileSubtitle.textContent
    }
    return  this._userData
   
}

setUserInfo(data){

    this._profileTitle.textContent = data.name
    this._profileSubtitle.textContent = data.description
   
    
}
}