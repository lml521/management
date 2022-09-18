import http from './requse'

export async function gitLogin(params) {
    let data = await http.post('/lejuAdmin/index/login', params)

    return data
}

export async function gitlist() {
    let data = await http.get('/admin/sysAuth/index/getInitMenus')
    return data
}


export async function gituser(params) {
    let data = await http.post(params)
    return data
}