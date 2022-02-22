import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DataTable, Button} from 'react-native-paper';
import {BrightText} from '../../components/Texts';
import {Colors} from '../../styles';
import {IUser} from '../../types';

const optionsPerPage = [2, 3, 4];

const AgentDashboard = ({navigation}: any) => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // const renderItem = users.map(item => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate('CustomerDashboard', {item})}>
  //       <DataTable.Row>
  //         <DataTable.Cell>{`${item.firstName} ${item.lastName}`}</DataTable.Cell>
  //         <DataTable.Cell>{item.email}</DataTable.Cell>
  //         <DataTable.Cell>{false}</DataTable.Cell>
  //       </DataTable.Row>
  //     </TouchableOpacity>
  //   );
  // });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        icon="account-plus"
        mode="contained"
        onPress={() => navigation.push('Wizard')}>
        Add Customer
      </Button>
      {/* <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Active</DataTable.Title>
        </DataTable.Header>
        {renderItem}
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={page => setPage(page)}
          label="1-2 of 6"
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable> */}
    </View>
  );
};

export default AgentDashboard;
