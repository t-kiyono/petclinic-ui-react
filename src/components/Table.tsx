import React from 'react';
import styled from '@emotion/styled';

const Table = styled('table')({
  width: '100%',
  marginBottom: '20px',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& > thead > tr > th': {
    backgroundColor: '#3c3834',
    color: '#f1f1f1',
    verticalAlign: 'bottom',
    borderTop: '1px solid #34302D',
    borderBottom: '2px solid #34302D',
    padding: '8px',
    textAlign: 'left',
  },
  '& > tbody > tr:nth-of-type(odd)': {
    backgroundColor: '#f9f9f9',
  },
  '& > tbody > tr > th, & > tbody > tr > td': {
    borderTop: '1px solid #34302D',
    padding: '8px',
    lineHeight: '1.428571429',
    verticalAlign: 'top',
    textAlign: 'left',
  },
});

type MultiData = Array<{key: number, data: any}>;

interface TableProps {
  showHeader?: boolean;
  contents: Array<MultiData> | any;
}

const TableComponent: React.FC<TableProps> = props => {
  const { showHeader, contents } = props;
  if (Array.isArray(contents)) {
    const multiData = contents as MultiData;
    if (multiData.length > 0) {
      const keys = Object.keys(multiData[0].data);
      return (
        <Table>
          { showHeader &&
          <thead>
            <tr>
              {keys.map((k, i) => <th key={i}>{k}</th>)}
            </tr>
          </thead>
          }
          <tbody>
            {
              multiData.map(c =>
                <tr key={c.key}>
                  {keys.map((k, i) => <td key={i}>{c.data[k]}</td>)}
                </tr>
              )
            }
          </tbody>
        </Table>
      );
    } else {
      return <></>;
    }
  } else {
    return (
      <Table>
        <tbody>
          {
            Object.keys(contents).map(key =>
              <tr key={key}>
                <th>{key}</th>
                <td>{contents[key]}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    );
  }
};

export default TableComponent;
