const getHomeSearchData = require('../../data/home_search')

module.exports = (req, res) => {
    const { _label_like } = req.query
    const allData = getHomeSearchData()
    const list = allData.list.filter(v => v.label.includes(_label_like))

    return res.success({
        list
    })
}