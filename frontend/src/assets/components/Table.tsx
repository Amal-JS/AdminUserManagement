import * as React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue , Tooltip } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const users =[{name:'richard',phone:'ceo',email:'active'},
{name:'vishnu',phone:'manager',email:'vacation'}
]

export default function CustomTable() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Username</TableColumn>
        <TableColumn key="phone">Phone</TableColumn>
        <TableColumn key="email">Email</TableColumn>
        <TableColumn key="actions">""</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
           <TableRow key={item.name}>
           {(columnKey) => (
             <TableCell>
               {columnKey === 'actions' ? (
                 <div className="flex justify-evenly">
                   <Tooltip content="Edit user">
                     <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                       <FaEdit />
                     </span>
                   </Tooltip>
                   <Tooltip color="danger" content="Delete user">
                     <span className="text-lg text-danger cursor-pointer active:opacity-50">
                       <FaTrash />
                     </span>
                   </Tooltip>
                 </div>
               ) : (
                 getKeyValue(item, columnKey)
               )}
             </TableCell>
           )}
         </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
