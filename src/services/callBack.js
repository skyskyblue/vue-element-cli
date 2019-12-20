export default (err, res) => {
    if (err) {
        const info = JSON.parse(JSON.stringify(err))
        let finalRes = err
        if (info && info.response) {
            finalRes = {
                code: info.response.status,
                message: info.response.status === 401 ? '登录失效，请重新登录' : info.response.statusText
            }
        }
        if (finalRes.code !== 401) {
            app.$message.error(finalRes.message)
        }
        if (finalRes.code === 401) {
            app.$store.dispatch({
                type: 'Auth/clearUserInfo'
            })
        }
        return finalRes
    }
    if (res.data.code) {
        app.$message.error(res.data.msg)
        return {
            code: res.data.code,
            msg: res.data.msg
        }
    }
    return res.data
}