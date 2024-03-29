import React from 'react';
import style from './TableGridExCont.module.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@sudo-boss/spellbook/Table';
import { useQueryTableData } from 'src/services/useQueryTableData';
import { useNotification } from './useNotification';
import Button from '@sudo-boss/spellbook/Button';

/**
 * TableGridExCont Component: Description of the behavior...
 * @returns {JSX.Element}
 */
export function TableGridExCont() {
  // -----------------------CONSTS, HOOKS, STATES
  const { data, refetch } = useQueryTableData();
  const isData = data?.records?.length && !!data?.records?.[0]?.title;
  const { toastComp } = useNotification();
  // -----------------------RENDER

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style['TableGridExCont']}>
      {toastComp}
      <Button type="button" iconType="fa-refresh" sizeType="small" onClick={refetch}>
        Refresh
      </Button>
      <Table bordered borderless>
        <TableHead>
          <TableRow>
            <TableHeaderCell>RadarGroupId</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>WorkType</TableHeaderCell>
            <TableHeaderCell>AvailCount</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isData
            ? data.records.map((info, index) => (
                <TableRow key={index}>
                  <TableCell>{info.radarGroupId}</TableCell>
                  <TableCell>{info.title}</TableCell>
                  <TableCell>{info.workType}</TableCell>
                  <TableCell>{info.availCount}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
}
