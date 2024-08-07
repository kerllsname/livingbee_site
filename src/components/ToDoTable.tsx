import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';

function ToDoTable() {
  return (
    <div className="flex flex-col">
      <Table
        color={'success'}
        selectionMode="multiple"
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Задача</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ToDoTable;
