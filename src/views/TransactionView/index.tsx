import React from 'react';
import {TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';

const TransactionView = ({route}) => {
  console.log(route.params);
  const {transactions} = route.params;

  const renderItem = transactions.map(item => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <DataTable.Row>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{`$${item.number}`}</DataTable.Cell>
          <DataTable.Cell>{item.date}</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>
    );
  });

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Amount</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
      </DataTable.Header>
      {renderItem}
      {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
    </DataTable>
  );
};

export default TransactionView;
