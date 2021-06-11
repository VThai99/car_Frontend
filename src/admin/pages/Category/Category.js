import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Main from "../Main/Main";
import {  Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
const Category = () => {
  const tableIcons = {
    Add: forwardRef((props, ref) => (
      <AddBox {...props} ref={ref} style={{ color: "green" }} />
    )),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => (
      <DeleteOutline {...props} ref={ref} style={{ color: "red" }} />
    )),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => (
      <Edit {...props} ref={ref} style={{ color: "blue" }} />
    )),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const [data, setData] = useState([]);
  const configImg = (value) => {
    return "http://127.0.0.1:8000/" + value;
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/category")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const add = () => {
    alert("You want to add a new row")
  }
  return (
    <Main>
      <Container>
        <MaterialTable
          icons={tableIcons}
          actions={[
            {
              icon: tableIcons.Add,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: {add}
            },
            {
              icon: tableIcons.Edit,
              tooltip: "update",
              onClick: (event, data) => {
                console.log(data);
              },
            },
            {
              icon: tableIcons.Delete,
              tooltip: "delete",
              onClick: (event, data) => {
                alert(`Do you want to delete ${data.name} ?`);
              },
            },
          ]}
          options={{ filtering: true, actionsColumnIndex: -1 }}
          columns={[
            { title: "Name", field: "name" },
            {
              title: "Logo",
              field: "logo",
              sorting: false,
              filtering: false,
              render: (data) => (
                <img src={configImg(data.logo)} style={{ width: 50 }} alt=""/>
              ),
            },
            {
              title: "Image",
              field: "image",
              sorting: false,
              filtering: false,
              render: (data) => (
                <img src={configImg(data.image)} style={{ width: 50 }}  alt=""/>
              ),
            },
            {
              title: "Video",
              field: "video",
              sorting: false,
              filtering: false,
              render: (data) => (
                <video src={configImg(data.video)} style={{ width: 50 }} />
              ),
            },
          ]}
          data={data}
          title="Category"
        />
      </Container>
    </Main>
  );
};
export default Category;
