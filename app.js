const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('user_id')
const loginForm = document.querySelector('#login')
loginForm.action = `http://localhost:3000/login/?name=${user_name}&password=${password}`