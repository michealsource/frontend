import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import SideBar from '../../components/SideBar/SideBar';
import icon from '../../assets/images/Icon.png'
import styles from './HomePage.module.css'
import ChartCard from '../../components/ChartCard/ChartCard';
import fill from '../../assets/images/Fill.png'
import fill2 from '../../assets/images/fill2.png'
import fill3 from '../../assets/images/fill3.png'
import Table from '../../components/Table/Table';
import Tabs from '../../components/Tabs/Tabs';
import Marquee from "react-fast-marquee";
import { liveData } from '../../constants/liveData';
import candle from '../../assets/images/candle.png'
import dropArrow from '../../assets/images/dropArrow.png'
import Modal from '../../components/Modal/Modal';
import { fetchLiveMarket } from '../../store/redux/action/action';
import { useDispatch } from 'react-redux';
import useSocket from '../../hooks/useSocket';
import { ReadyState } from 'react-use-websocket';
const HomePage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const dispatch = useDispatch();
    const orderData = useSocket("wss://comx-sand-api.afexnigeria.com/stream/trades")
    const clientData = useSocket("wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747")

    // console.log(orderData, clientData)

    // listener for order
    useEffect(()=>{
        // if(orderData.readyState === ReadyState.OPEN){
        if((orderData.messageHistory).length !== 0){
            console.log(orderData.lastMessage, orderData.messageHistory)
        }
    }, [orderData.readyState])

    // listener for client
    useEffect(()=>{
        if((clientData.messageHistory).length !== 0){
            console.log(clientData.lastMessage, clientData.messageHistory)
        }
    }, [clientData.readyState])

    // fetch default data
    useEffect(() => {
        fetchLiveMarket(dispatch);
    
    }, [])
    

    return (
        <Container fluid>
            <Row>
                <Col sm={1}><SideBar /></Col>
                <Col sm className={styles.homeWrapper}>
                    <div className={styles.bedcrumContainer}>
                        <span >Home</span>
                        <img src={icon} alt="" width={4.65} height={10} />
                        <span>Home</span>
                    </div>

                    <div className='mt-5 d-flex justify-content-between'>
                        <div>
                            <h4>Market</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing egestas </p>
                        </div>

                        <div className=''>
                            <button
                                onClick={() => setOpenModal(!openModal)}
                                className={styles.btnAction}>Page Setting <img src={candle} alt="" width={20} height={20} /> </button>
                            <button className={styles.btnAction}>Demo <img src={dropArrow} alt="" width={10.2} height={5.91} /> </button>
                        </div>

                    </div>

                    <Row>
                        <Col sm={4}>
                            <ChartCard
                                price='₦ 8,374,763'
                                header='Cash Balance'
                                bg='Decline'
                                month='Monitored Monthly'
                                img={fill}
                            /></Col>
                        <Col sm={4}><ChartCard
                            price='₦ 8,374,763'
                            header='Securities Value'
                            bg='Decline'
                            month='Monitored Monthly'
                            img={fill2}
                        /></Col>
                        <Col sm={4}><ChartCard
                            price='₦ 8,374,763'
                            header='Loan Balance'
                            bg='Decline'
                            month='Monitored Monthly'
                            img={fill3}
                        /></Col>
                    </Row>
                    <Tabs />
                    <Row >
                        <Col >
                            <Table />
                        </Col>

                        <Col>
                            <Table
                                style={{ color: 'red' }}
                                bgStle={{ backgroundColor: "#FFF2F0", color: "#E2341D" }}
                            />
                        </Col>
                    </Row>

                    <div className={styles.chatWrapper}>
                        <div className={styles.innerBg}>
                            Live Market
                        </div>

                        <Marquee>
                            {liveData.map((item, index) => (
                                <div className={styles.marqueeContainer} key={index}>
                                    <span>{item.title}</span>
                                    <span>{item.amount}</span>
                                </div>
                            ))}
                        </Marquee>
                    </div>


                </Col>
            </Row>

            <Modal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
            />
        </Container>
    )
}

export default HomePage