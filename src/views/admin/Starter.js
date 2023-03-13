import { Col, Row } from "reactstrap";
import TopCards from "../../components/dashboard/TopCards";
import Loader from '../../layouts/admin/loader/Loader'

import {  useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/features/dashboardSlice";
import Products from "../../components/dashboard/Products";
import BarChart from "../../components/dashboard/BarChart";

const Starter = () => {

  const [Data, setData] = useState([])

  const dispatch = useDispatch()
  const loading = useSelector(state=>  {
    if(!state.dashboard.loading1 &&
      !state.dashboard.loading2 &&
      !state.dashboard.loading3 &&
      !state.dashboard.loading4 &&
      !state.dashboard.loading5 &&
      !state.dashboard.loading6
      ){
        return false
      }else{
        return true
      }
  })
  const dashboard = useSelector(state=> state.dashboard.data)

  useEffect(() => {
    dispatch(fetchData.total_products());
    dispatch(fetchData.total_price_during_month());
    dispatch(fetchData.total_urls_count_for_each_website());
    dispatch(fetchData.webiste_highest_total_prices());
    dispatch(fetchData.avg_price_products());
    dispatch(fetchData.get_produts());

  }, [dispatch]);

  if(loading){
    return <Loader/>
  }else{
    return (
      <div>
        {/***Top Cards***/}
        <Row>
        <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="highest website"
              subtitle={`Webiste Highest ${dashboard.webiste_highest_total_prices.domain}`}
              earning={dashboard.webiste_highest_total_prices.total_price}
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="highest website"
              subtitle={`Price During Month`}
              earning={dashboard.total_price_during_month}
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="avg price products"
              subtitle="Avg Price Products"
              earning={dashboard.avg_price_products}
              icon="bi bi-basket3"
            />
       </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Total Products"
              subtitle="Total Products"
              earning={dashboard.total_products}
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="6" lg="6" xl="7" xxl="8">
            <BarChart data={dashboard.total_urls_count_for_each_website} />
          </Col>
          <Col sm="6" lg="6" xl="5" xxl="4">
            <Products products={dashboard.products} />
          </Col>
        </Row>
       
      </div>
    );
  }

};

export default Starter;
