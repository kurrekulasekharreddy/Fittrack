export default class MealManager{
  constructor(){
    this.items=[];
    this.calorieTotal=0;
    this.userId = localStorage.getItem('userId') || '';
    this.status='idle';
    this.lastSync = null;
  }
  add(m){ this.items.push(m); this._recalc(); }
  update(id,p){ const i=this.items.findIndex(x=>x._id===id); if(i>-1){ this.items[i]= {...this.items[i],...p}; this._recalc(); } }
  remove(id){ this.items=this.items.filter(x=>x._id!==id); this._recalc(); }
  _recalc(){ this.calorieTotal = this.items.reduce((s,x)=>s+(x.calories||0),0); }
  clear(){ this.items=[]; this.calorieTotal=0; }
  getCalories(){ return this.calorieTotal; }
}
