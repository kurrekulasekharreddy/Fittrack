export default class UserManager{
  constructor(){ this.user = null; this.authenticated = false; }
  login(user){ localStorage.setItem('userId', user.userId || ''); this.user = user; this.authenticated = true; }
  logout(){ localStorage.removeItem('userId'); this.user=null; this.authenticated=false; }
  getId(){ return localStorage.getItem('userId') || ''; }
  isAuth(){ return this.authenticated || !!this.getId(); }
  updateProfile(payload){ this.user = {...this.user, ...payload}; }
}
