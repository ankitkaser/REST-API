const productM = require('../models/product')
const queryObject = {};

const getAllProducts = async (req,res) => {
  let apiData = productM.find(queryObject)
    const { company, name , featured , sort , select } = req.query;
    
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = {$regex: name, $options:'i'};
    }
    if (featured) {
      queryObject.featured = featured;
    }

    

    if(sort){
      let sortData = sort.split(",").join(" ")
      apiData = apiData.sort(sortData)
    }

    if(select){
      let selectShortFix = select.split(",").join(" ")
      apiData = apiData.select(selectShortFix)
    }

  //  if (company || name || featured) {
  // Object.keys(req.query).forEach(key => {
  //   queryObject[key] = key
  //   });
  // }


    const myData = await apiData
   res.status(200).json({myData})
}
const getAllProductTesting = async (req,res) => {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1) * limit
    let apiData = productM.find(queryObject)
    apiData = apiData.skip(skip).limit(limit)
    
    const myData = await apiData
    res.status(200).json({myData,dataCount: myData.length})

}

module.exports = {getAllProducts,getAllProductTesting}