import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const Tables = ({ tableData, tableHead }) => {
  //   const tableHead = ["Name", "Age", "Occupation"];
  //   const tableData = [
  //     ["John Doe", "28", "Engineer"],
  //     ["Jane Smith", "34", "Doctor"],
  //     ["Sam Johnson", "45", "Teacher"],
  //   ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#ccc" }}>
        <Row data={tableHead} style={styles.head} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default Tables;
