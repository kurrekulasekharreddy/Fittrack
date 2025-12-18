export default class WorkoutManager{
  constructor(){
    this.items = [];
    this.count = 0;
    this.lastFetched = null;
    this.status = 'idle';
    this.userId = localStorage.getItem('userId') || '';
  }
  async fetch(){ this.status='loading'; /* fetch logic in UI uses api directly */ this.lastFetched = new Date(); }
  add(item){ this.items.push(item); this.count = this.items.length; }
  update(id, payload){ const i = this.items.findIndex(x=>x._id===id); if(i>-1) this.items[i] = {...this.items[i], ...payload}; }
  remove(id){ this.items = this.items.filter(x=>x._id!==id); this.count = this.items.length; }
  clear(){ this.items=[]; this.count=0; }
  getSummary(){ return {count:this.count}; }
}
