import React from 'react';
import style from './RefetchExCont.module.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@sudo-boss/spellbook/Table';
import { useQueryTableDataV2 } from 'src/services/useQueryTableDataV2';

/**
 * RefetchExCont Component: Description of the behavior...
 * @returns {JSX.Element}
 */
export function RefetchExCont() {
  // -----------------------CONSTS, HOOKS, STATES
  const { data } = useQueryTableDataV2();
  const isData = data?.records?.length && !!data?.records?.[0]?.title;
  // -----------------------RENDER

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style['RefetchExCont']}>
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
