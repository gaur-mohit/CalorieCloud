var api;
function change(i){
    api='http://localhost:8080/'
    localStorage.setItem('api',api)
}
api=localStorage.getItem('api')
export { api,change};