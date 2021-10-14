import axios from "axios";
export default  axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
    Authorization:
    'Bearer yLZ3DW8tpO7zocxplKQw72wcH5xv0jGDblprti9UQIwALopQIbwugr2YhRupmlnK7dN8_D1bpghHI22SX4IeX5A3Jp1pgwVTjeUC_584Iz4z8Twt-6Aiif3wSJ5UYXYx'
    }
})