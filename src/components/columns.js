

export const COLUMNS = [
    {
      Header: 'Name',
      accessor: 'Name',
      disableFilters: true,
      sticky: 'left',
   
    },
    {
      Header: 'Level',
      accessor: 'Level',
      sticky: 'left'
    },
   
    
    {
      Header: 'Avatar',
      accessor: 'Profile Image',
      maxWidth: 40,
      minWidth: 40,
      Cell: ({ cell: { value } }) => (
          <img
            src={value}
            width={25}
          />
        )
    
    },
    {
      Header: '💰 Price',
      accessor: 'Price',
      sticky: 'left'
    },
    
    {
      Header: '🧿 Bet',
      accessor: 'Bet',
      sticky: 'left'
    },
    {
      Header: '🏆 Wins',
      accessor: 'Win',
      sticky: 'left'
    },
    {
      Header: 'Lost',
      accessor: 'Lost',
      sticky: 'left'
    },
  ]
  
  