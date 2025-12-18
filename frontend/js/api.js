const API_BASE = (window.location.hostname === 'localhost') ? 'http://localhost:4000/api' : '/api';

// Auth
export async function register(user){ return fetch(`${API_BASE}/auth/register`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(user)}).then(r=>r.json()); }
export async function login(creds){ return fetch(`${API_BASE}/auth/login`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(creds)}).then(r=>r.json()); }

// Workouts (12+ ajax calls across app will reuse these)
export async function createWorkout(w){ return fetch(`${API_BASE}/workouts`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(w)}).then(r=>r.json()); }
export async function getWorkouts(userId){ return fetch(`${API_BASE}/workouts?userId=${userId||''}`).then(r=>r.json()); }
export async function getWorkout(id){ return fetch(`${API_BASE}/workouts/${id}`).then(r=>r.json()); }
export async function updateWorkout(id, payload){ return fetch(`${API_BASE}/workouts/${id}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)}).then(r=>r.json()); }
export async function deleteWorkout(id){ return fetch(`${API_BASE}/workouts/${id}`, {method:'DELETE'}).then(r=>r.json()); }

// Meals
export async function createMeal(m){ return fetch(`${API_BASE}/meals`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(m)}).then(r=>r.json()); }
export async function getMeals(userId){ return fetch(`${API_BASE}/meals?userId=${userId||''}`).then(r=>r.json()); }
export async function updateMeal(id,payload){ return fetch(`${API_BASE}/meals/${id}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)}).then(r=>r.json()); }
export async function deleteMeal(id){ return fetch(`${API_BASE}/meals/${id}`, {method:'DELETE'}).then(r=>r.json()); }

// Goals
export async function getGoal(userId){ return fetch(`${API_BASE}/goals?userId=${userId||''}`).then(r=>r.json()); }
export async function upsertGoal(payload){ return fetch(`${API_BASE}/goals`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)}).then(r=>r.json()); }
