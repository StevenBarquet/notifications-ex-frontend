import React from 'react';
import style from './TableExCont.module.scss';
import { useQueryGetData } from 'src/services/useQueryGetData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@sudo-boss/spellbook/Table';

/**
 * TableExCont Component: Description of the behavior...
 * @returns {JSX.Element}
 */
export function TableExCont() {
  // -----------------------CONSTS, HOOKS, STATES
  const { data } = useQueryGetData();
  const isData = data?.length && !!data[0]?.id;
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style['TableExCont']}>
      <Table bordered>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Repo Name</TableHeaderCell>
            <TableHeaderCell>Path</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isData
            ? data.map((info, index) => (
                <TableRow key={index + info.id}>
                  <TableCell>{info.id}</TableCell>
                  <TableCell>{info.name}</TableCell>
                  <TableCell>{info.full_name}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
}
