var api;
function change(i){
    api='https://caloriecloud-backend-production.up.railway.app/'
    localStorage.setItem('api',api)
}
api=localStorage.getItem('api')
export { api,change};