setTimeout(() => {
  const origin = sessionStorage.getItem('fromOrigin')
  if (!_.isNil(origin) && origin !== '') {
    document.title = '产品化大数据平台'
    $('#icon').attr('href', 'logo-zk.png')
  }
}, 800)
