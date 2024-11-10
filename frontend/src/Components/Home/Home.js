import { Button } from "antd";
import styles from "./Home.module.css";
import { Card, Col, Row } from "antd";
import mnnit from "../../assets/img/mnnit-maps.png";
import team from "../../assets/img/team.jpg";
import leaderboard from "../../assets/img/leaderboard.png";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState((() => {})());
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className={styles["home-page-container"]}>
      {!isAuthenticated && (
        <>
          <div className={styles["home-page-card-container"]}>
            <Row gutter={16} justify={"center"}>
              <Col span={6}>
                <Card title="Explore Campus" bordered={true}>
                  <img src={mnnit} width={"400px"} />
                  Follow clues and discover hidden spots around your campus
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Team Up" bordered={true}>
                  <img src={team} height={"270px"} width={"400px"} />
                  Play solo or form teams with friends!
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Rewards" bordered={true}>
                  <img src={leaderboard} height={"270px"} width={"400px"} />
                  Win rewards by climbing up the leaderboard!
                </Card>
              </Col>
            </Row>
          </div>
          <Link to="/login">
            <Button size="large" type="primary">
              Get Started!
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
