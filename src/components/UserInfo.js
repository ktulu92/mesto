export default class UserInfo{
    constructor({profileTitleSelector,profileSubtitleSelector,profileAvatarSelector}){//селекторы полей.
        this._profileTitleSelector= profileTitleSelector
        this._profileSubtitleSelector= profileSubtitleSelector
        this._profileAvatarSelector=profileAvatarSelector
        this._profileTitle = document.querySelector(this._profileTitleSelector);
        this._profileSubtitle = document.querySelector(this._profileSubtitleSelector);
        this._profileAvatar = document.querySelector(this._profileAvatarSelector)
         this.updateUserInfo()

    }

getUserInfo(){
    this._userData = {    
        nameData: this._profileTitle.textContent,
        infoData: this._profileSubtitle.textContent,
        avatarData: this._profileAvatar.src
      

    }
    return  this._userData
   
}

setUserInfo(data){

    this._profileTitle.textContent = data.name
    this._profileSubtitle.textContent = data.about  
    this._id = data.id
    // this._profileAvatar.src=data.avatar
  
    
}

//метод работает
setUserAvatar (data){
    this._profileAvatar.src = data.avatar
}
updateUserInfo = ()=>{
    
}


}