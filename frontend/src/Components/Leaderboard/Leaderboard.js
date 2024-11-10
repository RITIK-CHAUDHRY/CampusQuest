import { Button } from "antd";
import { Table } from "antd";
export const Leaderboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Harry",
      hunt: "Test Hunt 1",
      stage: "2/3",
    },
    {
      key: "2",
      name: "Anjali",
      hunt: "Test Hunt 1",
      stage: "2/3",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hunt",
      dataIndex: "hunt",
      key: "hunt",
    },
    {
      title: "Stage",
      dataIndex: "stage",
      key: "stage",
    },
  ];

  return (
    <>
      <h1>Leaderboard</h1>
      <Table
        bordered={true}
        style={{ margin: "50px" }}
        size="middle"
        dataSource={dataSource}
        columns={columns}
      />
      ;
    </>
  );
};
