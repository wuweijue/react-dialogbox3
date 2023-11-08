function classnames(...args) {
    const arr = []
    args.forEach(item => {
        if (typeof item === 'string') {
            arr.push(item)
        } else {
            for (let key in item) {
                if (item[key]) {
                    arr.push(key)
                }
            }
        }
    })
    return arr.join(' ')
}

export default classnames