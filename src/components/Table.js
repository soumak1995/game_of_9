import React, { useMemo,useState,useEffect } from 'react'
import { useTable, useRowSelect,usePagination,useGlobalFilter,useSortBy} from 'react-table'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core//IconButton';
import { COLUMNS } from './columns'
import { Checkbox } from './Checkbox'
import {useStateValue} from '../StateProvider'
import {GlobalFilter} from './GlobalFilter'
import '../css/table.css'
export const Table = () => {
    const [{selectedPlayer,players},dispatch]=useStateValue();
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => players, [])
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: 'Select',
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps() }/>
        },
        ...columns
      ])
    }
    
    
  )
useEffect(()=>{
  dispatch({
    type:'ADD_PLAYER',
    payload:selectedFlatRows
  })
},[selectedFlatRows]);

console.log(selectedPlayer,players)
const { globalFilter,pageIndex } = state
  return (

    <div className="Container">
      
      <div className="globalFilter">
       
            <img 
             className="laying_img"
             src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.svg" 
             alt="laying"/>
   
        <div className="header_info">
            <h5>Select Playing 9</h5> 
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      

      </div>
       <div className="player_table">
       <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))
              }
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
       </div>
      
      <div className="player_tableButton" >
        <IconButton onClick={()=>previousPage()} disabled={!canPreviousPage}>
          <ArrowBackIosIcon  fontSize="small"/>
        </IconButton>
        <span>
           <strong>
                {pageIndex+1} of {pageOptions.length}
             </strong>
        </span>
        <IconButton onClick={()=>nextPage()} disabled={!canNextPage}>
          <ArrowForwardIosIcon  fontSize="small"/>
        </IconButton>
        
      </div>
     
    </div>
  )
}