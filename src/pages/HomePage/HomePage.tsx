import React from 'react'
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
const HomePage = () => {
    return (
        // <Container fluid>
        //     <Row >
        //         <Col xs={2}><SideBar /></Col>
        //         <Col className={styles.homeWrapper}>

        //         </Col>
        //     </Row>
        // </Container>

        <Container fluid>
            <Row>
                <Col sm={1}><SideBar /></Col>
                <Col sm className={styles.homeWrapper}>
                    <div className={styles.bedcrumContainer}>
                        <span >Home</span>
                        <img src={icon} alt="" width={4.65} height={10} />
                        <span>Home</span>
                    </div>

                    <div className='mt-5'>
                        <h4>Market</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing egestas </p>
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
                    <Row>
                        <Col >
                            <Table />
                        </Col>

                        <Col>
                            <Table />
                        </Col>
                    </Row>

                </Col>


            </Row>
        </Container>
    )
}

export default HomePage